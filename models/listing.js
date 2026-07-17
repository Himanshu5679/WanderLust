const mongoose = require("mongoose");
const review = require("./review.js");
const { types, required } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({

   title: {
    type: String,
    required: true,
  },
  description:String,
    image:{
    // type:String,
    // default: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=60",
    // set:(v) => v === "" || undefined ? "https://unsplash.com/photos/vibrant-orange-lilies-with-dark-stamens-against-a-green-background-a39dZ_gddHA" : v,
    url : String,
    filename:String,
  },
  price:Number,
  location:String,
  country:String,
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  geometry :{
    type:{
      type: String,
      enum:['Point'],//location is must be point
      required: true
    },
    coordinates:{
      type:[Number],
      required:true
    }
  }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
   await review.deleteMany({_id:{$in:listing.reviews}});
  }
})
//creating module
const Listing = mongoose.model("Listing", listingSchema );

//and exporting this model to app.js
module.exports = Listing;
