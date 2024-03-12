import React, { Component } from 'react';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
class Cast extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(nextProps) )
    return false;
    return true;
  }
  render() {
    return <div className="cast-component">
    <div>
    {
        this.props.cast.map(c=>(
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