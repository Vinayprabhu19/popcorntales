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
import { Carousel } from 'react-responsive-carousel';
import LazyImage from "../components/LazyImage";
import FilterListIcon from '@material-ui/icons/FilterList';
import CardLayout from "../components/CardLayout";
import Sort from "../components/Sort";
import Pagination from '@material-ui/lab/Pagination';
import Filter from "../components/Filter";
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import BarChartIcon from '@material-ui/icons/BarChart';
import SocialMenu from '../components/SocialMenu';
import Tooltip from '@material-ui/core/Tooltip';
export async function getServerSideProps(context){
  const res = await fetch('https://api.popcorntales.com/movie');
  const movies = await res.json();
  var banners =[];
  for(var i=1;i<=4;i++){
    banners.push({
      id:i,
      name:"Movie"+i,
      url:"https://api.popcorntales.com/image?object=Banners/Movie"+i+".jpg"
    })
  }
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movies,
      banners
    },
  }
 
}
class Home extends Component {
  constructor(props) {
    super(props);
    var result = props.movies;
    var filter = this.getFilteredData(result);
    var banners = props.banners;
    result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
      const rvs = result.map(item => {
        return item;
      });
    var currentPages = [];
    var len = (rvs.length > 8)?8:rvs.length;
    for(var i=0;i< len ;i++){
      currentPages.push(rvs[i]);
    }
    // Don't call this.setState() here!
    this.state = { 
      reviews: [],
      currentList:[],
      banners:banners,
      loading:true,
      sortOpen:false,
      filterOpen:false,
      searchText:"",
      activePage: 1,
      totalPages: rvs.length,
      allReviews:rvs,
      reviews: rvs,
      currentList : currentPages,
      loading:false,
      filter:{
        "language":"All",
        "year":"All",
        "rating":[0.0,5.0]
      },
      sorter:{
        "field":"timeStamp",
        "sortType":"Descending"
      },
      filterData:filter
     };

     this.carouselIndex=0;
     this.onPageChanged = this.onPageChanged.bind(this);
     this.openSort = this.openSort.bind(this);
     this.handleSortClose = this.handleSortClose.bind(this);
     this.openFilter=this.openFilter.bind(this);
     this.onSearch = this.onSearch.bind(this);
    
  }

  

  onPageChanged(e){
    var targetPage=parseInt(e.target.innerText);
      var currentPages = [];
      var start = 8*(targetPage-1);
      var len = (this.state.reviews.length > 8*(targetPage))?8*(targetPage):this.state.reviews.length;
      for(var i=start;i< len ;i++){
        currentPages.push(this.state.reviews[i]);
      }

      this.setState({
        currentList : currentPages,
        activePage:targetPage
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
    <Head>
        <title>Popcorn Tales</title>
        <meta name="description" content="Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here."/>
          <link async rel="icon" type="image/x-icon"  href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link async rel="canonical" href="https://www.Popcorntales.com/" />
          <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var firebaseConfig = {
                apiKey: "AIzaSyAXuIINLnRmwacxjys3I6ziuSTq8lJ0iw8",
                authDomain: "popcorntales-40767.firebaseapp.com",
                databaseURL: "https://popcorntales-40767.firebaseio.com",
                projectId: "popcorntales-40767",
                storageBucket: "popcorntales-40767.appspot.com",
                messagingSenderId: "512137794051",
                appId: "1:512137794051:web:be612f2d6aa7c368d4b436",
                measurementId: "G-LK5DBSBMTR"
              };
              firebase.initializeApp(firebaseConfig);
              firebase.analytics();
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-170786754-1');
                  `,
            }}
          ></script>
          <script>
            
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170786754-1"></script>
        </Head>
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
        <Carousel showThumbs={false}>
            {
              this.state.banners.map(banner=>{
                return <div key={banner.id}>
                    <LazyImage  className="movie-img" unloadedSrc={banner.url} key={banner.id} alt="Movie Banner"/>
                </div>
              })
            }
        </Carousel>
      </Paper >
      <Paper elevation={12} id="filterGrid">
          <Grid container justify = "center"  className="filter-sort">
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
          <Pagination  count={this.state.totalPages%8} page={this.state.activePage}
                onChange={this.onPageChanged}/>

          <Grid container justify = "center" id="footerText">
              <h4 id="feedbackText">Need your feedback to improve  </h4>
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
              </Grid>
        </footer>
    </div>
    </div>
    </>
  );
}
getFilteredData(result){
  var languages=["All"];
  var years =["All"];
  for(var i=0;i<result.length;i++){
    if(languages.includes(result[i].language)) continue;
    languages.push(result[i].language);}
  for(var i=0;i<result.length;i++){
      if(years.includes(result[i].year)) continue;
      years.push(result[i].year);}
  years.sort();
  return {
    languages:languages,
    years:years,
    rating:[0.0,5.0]
  };
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
