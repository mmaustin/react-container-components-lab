import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8QmKq623qtRnVbp0ubiwQg5XH8sigQYB';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            reviews: [],
        }
    }

    handleChange = event => {
        this.setState({search: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(URL.concat(this.state.search))
        .then(resp => resp.json())
        .then((movieQuery) => this.setState({queryReviews: movieQuery.results}))

    }

    render(){
        return(
            <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
        )
    }

}
