import React, { Component } from 'react';
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
        <h3 className="subsection">Cast</h3>
        {
            this.state.cast.map(c=>(
                <div className="flexbox-container" key={c}>
                    <div><LocalMoviesIcon className="movieIcon" /></div>
                    <p className="pointerText">{c}</p>
                </div>
            ))
        }
    </div>
  }
}

export default Cast;
