import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8QmKq623qtRnVbp0ubiwQg5XH8sigQYB';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super();
    
        this.state = {
          reviews: [],
        };
      }
    
      componentDidMount() {
        fetch(URL)
          .then((response) => response.json())
          .then((movieData) => this.setState({ reviews: movieData.results }));
      }
    
      render() {
          //let movieByline = this.state.reviews.map(review => review.byline)
        return <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>;
      }

}
