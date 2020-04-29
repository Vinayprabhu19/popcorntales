import React, { Component } from 'react';
import '../css/Detail.css';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import { GridList } from '@material-ui/core';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stars:[],
        halfStars:[]
    };
  }

  
  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.stars === prevProps.stars)
      return;
    var rows = [];
    var half = this.props.stars - parseInt(this.props.stars);
    for (var i = 0; i < parseInt(this.props.stars); i++) {
        rows.push({key:i});
    }
    var halfStars = [];
    if(half>0){
      halfStars.push({key:1});
    }
    this.setState({
      stars:rows,
      halfStars:halfStars
    });
  }

  render() {
    return <GridList cols={5} className="star-container">
    {
      this.state.stars.map(s=>(<Star key={s.key} id="starIcon"/>))
    }  
    {
      this.state.halfStars.map(s=>(<StarHalf key={s.key} id="starIcon"/>))
    }
    </GridList>
  }
}

export default Stars;
