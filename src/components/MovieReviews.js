import React from "react";

const MovieReviews = ({ reviews }) => (
  <ul className="review-list">
      {reviews.map((movie, idx) => (
          <li className="review" key={idx}>{movie.display_title}</li>
      ))}
  </ul>
);

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;
