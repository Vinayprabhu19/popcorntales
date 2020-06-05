import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css';
import Title from '../resources/Title.png';
import CardLayout from "./CardLayout";
import Pagination from "./Pagination";
import Sort from "./Sort";
import Grid from '@material-ui/core/Grid';
import BarChartIcon from '@material-ui/icons/BarChart';
import SocialMenu from './SocialMenu';
class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      reviews: [],
      totalPages:0,
      currentList:[],
      banners:[],
      loading:true,
      sortOpen:false,
      sorter:{
        "field":"timeStamp",
        "sortType":"Ascending"
      }
     };

     this.carouselIndex=0;
     this.onPageChanged = this.onPageChanged.bind(this);
     this.openSort = this.openSort.bind(this);
     this.handleSortClose = this.handleSortClose.bind(this);
  }


  componentDidMount(){
    fetch('https://api.popcorntales.com/movie')
      .then(response => response.json())
      .then(result => {
        result = this.processImageData(result);
        result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
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
            currentList : currentPages,
            loading:false
          })
      })
      .catch(error =>{
        console.error(error);
      })

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
  openSort(){
    this.setState({
      sortOpen : true
    });
  }
  

render(){
  return (
    <div>
      <Backdrop open={this.state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
    <div className={this.state.loading ? 'hidden' : 'App'}>
      <AppBar id="appBar" position="static">
        <Toolbar>
          <a href="/analytics"><BarChartIcon fontSize={"large"} color={"primary"}/></a>
          <Hidden mdDown>
          <h1 id="title">Popcorn Tales</h1>
          </Hidden>
          <section className="rightToolbar">
            <SocialMenu/>
          </section>
        </Toolbar>
      </AppBar>
      <Paper id="banner-container" elevation={10}>
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
      <Grid container justify = "flex-end" className="filter-sort">
          {/* <IconButton className="iconBtn"><FilterListIcon/></IconButton> */}
          <Autocomplete
            id="autocomplete-box"
            options={this.state.reviews}
            getOptionLabel={option => option.title}
            onChange={(e,v)=>{this.onCardClick(v)}}
            renderInput={params => <TextField {...params} InputProps={{...params.InputProps, disableUnderline: true}} placeholder="Movie" />}
          />
          <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"default"} color={"primary"}/></Button>
        </Grid>
        <Sort open={this.state.sortOpen} close={(data)=>this.handleSortClose(data)} data={this.state.sorter}/>
        <GridList className="cardGridList"  >
                      {this.state.currentList.map(image => (
                          <CardLayout key={image.title} review={image}/>
                      ))} 
        </GridList>
      </div>
      <footer>
          <Pagination  totalRecords={this.state.totalPages} pageLimit={8}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}/>

          <div id="footerText"> 
              <h6>Need your feedback to improve  
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
              </h6>
          </div>
        </footer>
    </div>
    </div>
  );
}
processImageData(data){
  var width,height;
  if(window.matchMedia("(max-width: 300px)").matches){
    width=150;height=200;
  }
  if(window.matchMedia("(max-width: 576px)").matches){
    width=280;height=320;
  }
  else if(window.matchMedia("(max-width: 958px)").matches){
    width=300;height=360;
  }
  else if(window.matchMedia("(max-width: 1300px)").matches){
    width=300;height=350;
  }
  else{
    width=400;height=500;
  }
  for(var i=0;i<data.length;i++){
    data[i].titleImage=  data[i].titleImage+"&width="+width+"&height="+height;
  }
  return data;
}
handleSortClose(data){
  // result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
  // sorter:{
  //   "field":"timeStamp",
  //   "sortType":"Ascending"
  // }
      if(data.field === this.state.sorter.field && data.sortType === this.state.sorter.sortType){
        this.setState({sortOpen:false})
        return;
      }
      var reviews;
      if(this.field === "timeStamp"){
        if(data.sortType === "Descending")
          reviews = this.state.reviews.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)})
        else
          reviews = this.state.reviews.sort(function(a,b){return new Date(a.timeStamp)- new Date(b.timeStamp)})
      }
      else{
        if(data.sortType === "Descending")
          reviews = this.state.reviews.sort(function(a,b){if(a[data.field] > b[data.field]) { return -1; }
          if(a[data.field] < b[data.field]) { return 1; }
          return 0;})
        else
          reviews = this.state.reviews.sort(function(a,b){if(a[data.field] < b[data.field]) { return -1; }
          if(a[data.field] > b[data.field]) { return 1; }
          return 0;})
      }
      debugger;
      var currentPages = [];
      var len = (reviews.length > 8)?8:reviews.length;
      for(var i=0;i< len ;i++){
        currentPages.push(reviews[i]);
      }
      this.setState({
        activePage: 1,
        totalPages: reviews.length,
        reviews: reviews,
        currentList : currentPages,
        loading:false,
        sortOpen:false,
        sorter:data
      });
    }
}

export default Home;
