import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazy-load';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
      <Carousel showThumbs={false} showStatus={false}>
            {
              this.state.banners.map(banner=>{
                return <LazyLoad key={banner.url} >
                <div key={banner.url} className="movie-img" style={{backgroundImage: "url(" + banner.url + ")"}} >
                {/* <LazyImage  className="movie-img" unloadedSrc={banner.url} key={banner.id} alt="Movie Banner"/> */}
                </div>
                </LazyLoad>
              })
            }
        </Carousel>
      </Paper>
  }
}

export default Banner;
