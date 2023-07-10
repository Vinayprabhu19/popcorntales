import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import  Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
class Banner extends Component {
  constructor(props){
    super(props);
    var banners=[];
    var count=0;
    for(var i=0;i<props.items.length && count<5;i++){
      // var url="https://api.popcorntales.com/image?object=Banners/Movie"+i+".jpg";
      var url = props.items[i].coverImage;
      if(url==null || url == undefined)
        continue;
      if(url.replace("https://api.popcorntales.com/image?object=","").trim() == "")
       continue;
      banners.push({
        id:i,
        name: props.items[i].title,
        url: url
      })
      count++;
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
                return <CarouselItem  key={banner.name}>
                <div key={banner.name} className="movie-img" style={{backgroundImage: "url(" + banner.url + ")"}} >
                </div>
                </CarouselItem>
              })
            }
        </Carousel>
      </Paper>
  }
}

export default Banner;
