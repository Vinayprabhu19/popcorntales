import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Carousel } from 'react-bootstrap';
class Banner extends Component {
  constructor(props){
    super(props);
    var banners=[];
    for(var i=1;i<=4;i++){
      banners.push({
        id:i,
        name:"Movie"+i,
        url:"https://api.popcorntales.com/image?object=Banners/Movie"+i+".jpg"
      })
    }
    this.state={
      banners:banners
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }
  render() {
   return <Paper id="banner-container" elevation={10}>
      <Carousel>
            {
              this.state.banners.map(banner=>{
                return <Carousel.Item  key={banner.url}>
                <div key={banner.url} className="movie-img" style={{backgroundImage: "url(" + banner.url + ")"}} >
                {/* <LazyImage  className="movie-img" unloadedSrc={banner.url} key={banner.id} alt="Movie Banner"/> */}
                </div>
                </Carousel.Item>
              })
            }
        </Carousel>
      </Paper>
  }
}

export default Banner;
