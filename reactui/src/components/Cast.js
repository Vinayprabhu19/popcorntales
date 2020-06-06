import React, { Component } from 'react';
import '../css/review.css';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

class Cast extends Component {
    constructor(props) {
        super(props);
        this.state={
            cast:this.props.cast
        }
      }
  render() {
    return <div className="cast-component">
        <h4>Cast</h4>
        {
            this.state.cast.map(c=>(
                <div className="flexbox-container" key={c}>
                    <div><LocalMoviesIcon className="movieIcon" /></div>
                    <h6>{c}</h6>
                </div>
            ))
        }
    </div>
  }
}

export default Cast;
