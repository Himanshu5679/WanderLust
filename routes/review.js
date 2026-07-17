const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn ,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//review route 8
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.createReview),
);

//Delete review route 9
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
