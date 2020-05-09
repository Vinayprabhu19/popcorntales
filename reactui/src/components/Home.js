import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
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
import BarChartIcon from '@material-ui/icons/BarChart';
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
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
      mode: "no-cors"
  };
    fetch('https://api.popcorntales.com/movie')
      .then(response => response.json())
      .then(result => {
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
          <Hidden mdDown>
          <h1 id="title">Popcorn Tales</h1>
          </Hidden>
          <a href="/analytics"><BarChartIcon fontSize={"large"} color={"primary"}/></a>
        <section className="rightToolbar">
          <Autocomplete
            id="autocomplete-box"
            options={this.state.reviews}
            getOptionLabel={option => option.title}
            onChange={(e,v)=>{this.onCardClick(v)}}
            renderInput={params => <TextField {...params} InputProps={{...params.InputProps, disableUnderline: true}} placeholder="Movie" />}
          />
          
        </section>
        <a href="https://www.instagram.com/matineetales">
              <InstagramIcon fontSize={"medium"}/>
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
        <div className="filter-sort">
          {/* <IconButton className="iconBtn"><FilterListIcon/></IconButton> */}
          <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"medium"}/></Button>
        </div>
        <Sort open={this.state.sortOpen} close={(data)=>this.handleSortClose(data)} data={this.state.sorter}/>
        <GridList className="cardGridList"  >
                      {this.state.currentList.map(image => (
                          <CardLayout key={image.title} onCardClick ={()=> {this.onCardClick(image)}} review={image}/>
                      ))} 
        </GridList>
      </div>
      <footer>
          <Pagination  totalRecords={this.state.totalPages} pageLimit={8}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}/>

          <div id="footerText"> 
              <h6>Need your feedback to improve  
              <a href="mailto:vinay@popcorntales.com"> <MailIcon/></a>
              </h6>
          </div>
        </footer>
    </div>
    </div>
  );
}
handleSortClose(data){
  // result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
  // sorter:{
  //   "field":"timeStamp",
  //   "sortType":"Ascending"
  // }
      if(data.field == this.state.sorter.field && data.sortType == this.state.sorter.sortType){
        this.setState({sortOpen:false})
        return;
      }
      var reviews;
      if(this.field == "timeStamp"){
        if(data.sortType == "Descending")
          reviews = this.state.reviews.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)})
        else
          reviews = this.state.reviews.sort(function(a,b){return new Date(a.timeStamp)- new Date(b.timeStamp)})
      }
      else{
        if(data.sortType == "Descending")
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
