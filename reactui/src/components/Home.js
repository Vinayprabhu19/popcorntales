import React, { Component } from 'react';
import '../css/App.css';
import Carousel from 'react-bootstrap/Carousel';
import CardLayout from "./CardLayout";
import GridList from '@material-ui/core/GridList';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import Pagination from "./Pagination";
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Title from '../resources/Title.png';

class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      reviews: [],
      totalPages:0,
      currentList:[],
      banners:[]
     };

     this.carouselIndex=0;
     this.onPageChanged = this.onPageChanged.bind(this);
  
  }


  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
          const rvs = result.map(item => {
            return item;
          });
          var currentPages = [];
          var len = (rvs.length > 8)?8:rvs.length;
          for(var i=0;i< len ;i++){
            currentPages.push(rvs[i]);
          }

          this.setState({
            activePage: 1,
            totalPages: rvs.length,
            reviews: rvs,
            currentList : currentPages
          });
      });   

      fetch('./banners.json')
      .then(response => response.json())
      .then(result => {
        this.setState({
          banners:result
        });
      });
      
  }

  onPageChanged(e){
      var currentPages = [];
      var start = 8*(e.currentPage-1);
      var len = (this.state.reviews.length > 8*(e.currentPage))?8*(e.currentPage):this.state.reviews.length;
      for(var i=start;i< len ;i++){
        currentPages.push(this.state.reviews[i]);
      }

      this.setState({
        currentList : currentPages
      });
  }

  onCardClick(image){
    this.props.history.push('/review/'+image.title);
  }

  handleSelect = (selectedIndex, e) => {
    this.carouselIndex=selectedIndex;
  };


render(){
  return (
    <div className="App">
      <AppBar id="appBar" position="static">
        <Toolbar>
          <Hidden mdDown>
          <p id="title">Popcorn Tales</p>
          </Hidden>
        <section className="rightToolbar">
          <Autocomplete
            id="autocomplete-box"
            options={this.state.reviews}
            getOptionLabel={option => option.title}
            onChange={(e,v)=>{this.onCardClick(v)}}
            renderInput={params => <TextField {...params} InputProps={{...params.InputProps, disableUnderline: true}} placeholder="Movie" />}
          />
          
        </section>
        <a id="instagramButton" href="https://www.instagram.com/matineetales">
              <InstagramIcon/>
          </a>
        </Toolbar>
      </AppBar>
      <Paper id="banner-container" elevation={5}>
        <Carousel activeIndex={this.index} onSelect={this.handleSelect} indicators={false}>
            {
              this.state.banners.map(banner=>{
                return <Carousel.Item key={banner.id}>
                    <img id="movie-img" src={banner.url} key={banner.id} alt="Movie"/>
                </Carousel.Item>
              })
              
            }

        </Carousel>
      </Paper>
      <Hidden mdUp>
      <img src={Title} id="titleImage" />
      </Hidden>
      <div className="App-Content">
        <GridList className="cardGridList"  >
                      {this.state.currentList.map(image => (
                          <CardLayout key={image.reviewId} onCardClick ={()=> {this.onCardClick(image)}} review={image}/>
                      ))} 
        </GridList>
      </div>
      <footer>
          <Pagination  totalRecords={this.state.totalPages} pageLimit={8}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}/>
        </footer>
    </div>
  );
}
}

export default Home;
