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
        <div id="cast-details">
        {
            this.state.cast.map(c=>(
                <div className="flexbox-container" key={c}>
                    <div><LocalMoviesIcon className="movieIcon" /></div>
                    <h6 className="bullets">{c}</h6>
                </div>
            ))
        }
        </div>
    </div>
  }
}

export default Cast;
