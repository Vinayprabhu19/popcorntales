import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css';
import '../css/card.css';
import LazyImage from "../components/LazyImage";
import LazyLoad from 'react-lazy-load';
import FilterListIcon from '@material-ui/icons/FilterList';
import CardLayout from "./CardLayout";
import Pagination from "./Pagination";
import Sort from "./Sort";
import { Helmet } from 'react-helmet';
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import BarChartIcon from '@material-ui/icons/BarChart';
import SocialMenu from './SocialMenu';
import Tooltip from '@material-ui/core/Tooltip';
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
      filterOpen:false,
      searchText:"",
      sorter:{
        "field":"timeStamp",
        "sortType":"Descending"
      },
      filter:{
        "language":"All",
        "year":"All",
        "rating":[0.0,5.0]
      },
      filterData:{"years":["All"],"languages":["All"]}
     };

     this.carouselIndex=0;
     this.onPageChanged = this.onPageChanged.bind(this);
     this.openSort = this.openSort.bind(this);
     this.handleSortClose = this.handleSortClose.bind(this);
     this.openFilter=this.openFilter.bind(this);
     this.getFilteredData = this.getFilteredData.bind(this);
     this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount(){
    fetch('https://api.popcorntales.com/movie')
      .then(response => response.json())
      .then(result => {
        this.getFilteredData(result);
        // result = this.processImageData(result);
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
            allReviews:rvs,
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

  onSearch(e){
    
    var text = e.target.value;

    var reviews = [];
    for(var i=0;i<this.state.allReviews.length;i++){
      reviews.push(this.state.allReviews[i]);}


    reviews = reviews.filter(function(r){return r.title.toLocaleLowerCase().includes(text.toLowerCase());});
    
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
    filter:{
      "language":"All",
      "year":"All",
      "rating":[0.0,5.0]
    },
    searchText:text
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
  
  openFilter(){
    this.setState({
      filterOpen : true
    });
  }
  

render(){
  return (
    <>
    <Helmet>
        <title>Popcorn Tales</title>
          <meta name="description" content="Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here."/>
        </Helmet>
    <div>
      <Backdrop open={this.state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
    <div className={this.state.loading ? 'hidden' : 'App'}>
      <AppBar id="appBar" position="static">
        <Toolbar>
          <Tooltip title="Analytics"><a href="/analytics"><BarChartIcon fontSize={"large"} color={"primary"}/></a></Tooltip>
          <h1 id="title">Popcorn Tales</h1>
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
                  <div className="movie-img" style={{backgroundImage: "url(" + banner.url + ")"}} >
                    {/* <LazyImage  className="movie-img" unloadedSrc={banner.url} key={banner.id} alt="Movie Banner"/> */}
                    </div>
                </Carousel.Item>
              })
            }
        </Carousel>
      </Paper>
      <Paper className="filter-sort" elevation={12}>
          <Grid container justify = "center">
          <input type="text" id="searchField" value={this.state.searchText} onChange={this.onSearch} placeholder="Movie Title"/>
          <Hidden smDown>
            <Tooltip title="Sort">
          <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"large"} style={{fill: "purple"}}/></Button>
          </Tooltip>
          <Tooltip title="Filter">
          <Button className="iconBtn" onClick={this.openFilter} ><FilterListIcon fontSize={"large"} style={{fill: "purple"}} /> </Button>
          </Tooltip>
          </Hidden>
          <Hidden mdUp>
          <Tooltip title="Sort">
          <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"default"} style={{fill: "purple"}}/></Button>
          </Tooltip>
          <Tooltip title="Filter">
          <Button className="iconBtn" onClick={this.openFilter}><FilterListIcon fontSize={"default"} style={{fill: "purple"}}/> </Button>
          </Tooltip>
          </Hidden>
        <Sort open={this.state.sortOpen} close={(data)=>this.handleSortClose(data)} data={this.state.sorter}/>
        <Filter open={this.state.filterOpen} close={(data)=>this.handleFilterClose(data)} data={this.state.filter} filterData={this.state.filterData}/>
        </Grid>
      </Paper>
      <div className="App-Content">
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

          <Grid container justify = "center" id="footerText">
              <h6>Need your feedback to improve  
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
              </h6>
              </Grid>
        </footer>
    </div>
    </div>
    </>
  );
}
getFilteredData(result){
  for(var i=0;i<result.length;i++){
    if(this.state.filterData.languages.includes(result[i].language)) continue;
    this.state.filterData.languages.push(result[i].language);}
  for(var i=0;i<result.length;i++){
      if(this.state.filterData.years.includes(result[i].year)) continue;
      this.state.filterData.years.push(result[i].year);}
      this.state.filterData.years.sort();

}
processImageData(data){
  var width,height;
  if(window.matchMedia("(max-width: 576px)").matches){
    width=140;height=200;
  }
  else if(window.matchMedia("(max-width: 958px)").matches){
    width=200;height=260;
  }
  else if(window.matchMedia("(max-width: 1300px)").matches){
    width=220;height=250;
  }
  else if(window.matchMedia("(max-width: 2000px)").matches){
    width=250;height=300;
  }
  else{
    width=400;height=500;
  }
  for(var i=0;i<data.length;i++){
    data[i].titleImage=  data[i].titleImage+"&width="+width+"&height="+height;
  }
  return data;
}
handleFilterClose(data){
  if(data == null){
    this.setState({
      filterOpen:false
    });
    return;
  }
  var reviews = [];
  for(var i=0;i<this.state.allReviews.length;i++){
    reviews.push(this.state.allReviews[i]);}
  if(data.filter.language!="All"){
    reviews = reviews.filter(function(r){return r.language == data.filter.language});}
  if(data.filter.year!="All"){
      reviews = reviews.filter(function(r){return r.year == data.filter.year});}
  
  reviews = reviews.filter(function(r){return r.rating >= data.filter.rating[0] && r.rating <= data.filter.rating[1]});
    
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
    filterOpen:false,
    filter:data.filter,
    searchText:""
  });
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
