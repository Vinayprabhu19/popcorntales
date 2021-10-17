import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import  Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from '@material-ui/core/Button';
class Banner extends Component {
  constructor(props){
    super(props);
    var banners=[];
    for(var i=0;i<props.items.length;i++){
      // var url="https://api.popcorntales.com/image?object=Banners/Movie"+i+".jpg";
      var url = props.items[i].coverImage;
      if (url=="")
      url = props.items[i].titleImage;
      banners.push({
        id:i,
        name: props.items[i].title,
        url: url
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
              this.props.items.map(banner=>{
                return <CarouselItem  key={banner.title}>
                <div key={banner.title} className="movie-img" style={{backgroundImage: "url(" + banner.coverImage + ")"}} >
                  <div className="info">
                   <h2 className="bannerTitle"> {banner.title}</h2>
                   <h2 className="bannerRating">{banner.language} - {banner.rating}/5</h2>
                   </div>
                {/* <LazyImage  className="movie-img" unloadedSrc={banner.url} key={banner.id} alt="Movie Banner"/> */}
                </div>
                </CarouselItem>
              })
            }
        </Carousel>
      </Paper>
  }
}

export default Banner;
