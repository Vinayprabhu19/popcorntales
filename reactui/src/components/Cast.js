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
    <div >
      {this.props.cast.map(c => (
        <div style={{ display: "flex", alignItems: "center" }} key={c}>
          <div><LocalMoviesIcon className="movieIcon" /></div>
          <div style={{ marginLeft: "5px" }}>{c}</div>
        </div>
      ))}
    </div>
    </div>
  }

}

export default Cast;