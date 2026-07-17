const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const Listing = require("../models/listing.js"); // path apne project ke hisab se adjust karo

// .env load karo taaki MAP_TOKEN mile
const path = require("path");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to db");

  // Saari listings jinke paas geometry missing hai
  const listingsWithoutGeometry = await Listing.find({
    $or: [
      { geometry: { $exists: false } },
      { "geometry.coordinates": { $exists: false } },
    ],
  });

  console.log(`Found ${listingsWithoutGeometry.length} listings without geometry.`);

  for (let listing of listingsWithoutGeometry) {
    try {
      let response = await geocodingClient
        .forwardGeocode({
          query: listing.location + ", " + listing.country,
          limit: 1,
        })
        .send();

      if (response.body.features.length === 0) {
        console.log(`No geocode result for: ${listing.title} (${listing.location})`);
        continue;
      }

      listing.geometry = response.body.features[0].geometry;
      await listing.save({ validateModifiedOnly: true });
      console.log(`Updated: ${listing.title} -> ${JSON.stringify(listing.geometry.coordinates)}`);

      // Mapbox free tier rate-limit se bachne ke liye chhota sa delay
      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (err) {
      console.log(`Failed for ${listing.title}:`, err.message);
    }
  }

  console.log("Migration complete!");
  mongoose.connection.close();
}

main().catch((err) => console.log(err));