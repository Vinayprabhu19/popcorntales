import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';
import React, { Suspense, lazy, Component } from 'react';
import '../css/Home.css';
import '../css/card.css';
import { Helmet } from 'react-helmet';
import BarChartIcon from '@material-ui/icons/BarChart';
import Tooltip from '@mui/material/Tooltip';
import Banner from "./Banner";
const Sort = lazy(() => import('./Sort'));
const Filter = lazy(() => import('./Filter'));
const CardsList = lazy(() => import('./CardsList'));
const Pagination = lazy(() => import('./Pagination'));
const InstagramIcon = lazy(() => import('@material-ui/icons/Instagram'));
const MailIcon = lazy(() => import('@material-ui/icons/Mail'));
const SortIcon = lazy(() => import('@material-ui/icons/Sort'));
const FilterListIcon = lazy(() => import('@material-ui/icons/FilterList'));
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.state = {
      reviews: [],
      totalPages: 0,
      currentList: [],
      loading: true,
      sortOpen: false,
      filterOpen: false,
      searchText: "",
      sorter: {
        "field": "timeStamp",
        "sortType": "Descending"
      },
      filter: {
        "language": "All",
        "year": "All",
        "genre":"All",
        "rating": [0.0, 5.0]
      },
      filterData: { "years": ["All"], "languages": ["All"],"genre":["All"] }
    };
    this.onPageChanged = this.onPageChanged.bind(this);
    this.openSort = this.openSort.bind(this);
    this.handleSortClose = this.handleSortClose.bind(this);
    this.openFilter = this.openFilter.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updating State");
    if (JSON.stringify(this.state) == JSON.stringify(nextState)) {
      return false;
    }
    return true;
  }
  componentDidMount() {
    var urlParams = new URLSearchParams(window.location.search);
    var pageNo = urlParams.get("page");
    fetch('https://api.popcorntales.com/movie')
      .then(response => response.json())
      .then(result => {
        var schema = this.getSchema(result);
        const rvs = result.map(item => {
          return item;
        });
        var currentPages = [];
        pageNo = (pageNo ==null)?1:parseInt(pageNo);
        var start = 18 * (pageNo - 1);
        var len = (result.length > 18 * (pageNo)) ? 18 * (pageNo) : result.length;
        for (var i = start; i < len; i++) {
          currentPages.push(result[i]);
        }
        var len = currentPages.length;
        var banners=result;
        this.setState({
          schema: schema,
          activePage: pageNo,
          totalPages: rvs.length,
          allReviews: rvs,
          reviews: rvs,
          currentList: currentPages,
          loading: false,
          banners:banners
        })
        this.getFilteredData(result);
      })
      .catch(error => {
        console.error(error);
      })
  }

  onPageChanged(e) {
    var currentPages = [];
    var start = 18 * (e.currentPage - 1);
    var len = (this.state.reviews.length > 18 * (e.currentPage)) ? 18 * (e.currentPage) : this.state.reviews.length;
    for (var i = start; i < len; i++) {
      currentPages.push(this.state.reviews[i]);
    }
    this.setState({
      currentList: currentPages
    });
    this.props.history.push("?page="+e.currentPage);;
  }

  onSearch(e) {

    var text = e.target.value;
    var reviews = [];
    for (var i = 0; i < this.state.allReviews.length; i++) {
      reviews.push(this.state.allReviews[i]);
    }

    reviews = reviews.filter(function (r) { return r.title.toLocaleLowerCase().includes(text.toLowerCase()); });

    var currentPages = [];
    var len = (reviews.length > 18) ? 18 : reviews.length;
    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }
    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      filter: {
        "language": "All",
        "year": "All",
        "rating": [0.0, 5.0]
      },
      searchText: text
    });
  }

  openSort() {
    this.setState({
      sortOpen: true
    });
  }

  openFilter() {
    this.setState({
      filterOpen: true
    });
  }


  render() {
    if (this.state.loading) {
      return <Backdrop open={this.state.loading}>
         <CircularProgress color="inherit"/>
      </Backdrop>
    }
    return (
      <>
        <Helmet>
          <title>Popcorn Tales - Movie Reviews & Analysis</title>
          <meta name="description" content="Find the latest movies reviews from various Indian and Foreign languages" />
          <script className='structured-data-list' type="application/ld+json">{this.state.schema}</script>
        </Helmet>
        {
        !this.state.loading && <div>
          <div className={this.state.loading ? 'hidden' : 'App'}>
            <Suspense fallback={  <CircularProgress color="inherit" />}>
              <Banner items={this.state.banners} />
            </Suspense>
            <Paper className="filter-sort" elevation={18}>
              <div className="d-flex justify-content-center">
                <input type="text" id="searchField" value={this.state.searchText} onChange={this.onSearch} placeholder="Movie Title" />
                <Hidden smDown>
                  <Tooltip title="Sort">
                    <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"large"} style={{ fill: "purple" }} /></Button>
                  </Tooltip>
                  <Tooltip title="Filter">
                    <Button className="iconBtn" onClick={this.openFilter} ><FilterListIcon fontSize={"large"} style={{ fill: "purple" }} /> </Button>
                  </Tooltip>
                </Hidden>
                <Hidden mdUp>
                  <Tooltip title="Sort">
                    <Button className="iconBtn" onClick={this.openSort} ><SortIcon fontSize={"default"} style={{ fill: "purple" }} /></Button>
                  </Tooltip>
                  <Tooltip title="Filter">
                    <Button className="iconBtn" onClick={this.openFilter}><FilterListIcon fontSize={"default"} style={{ fill: "purple" }} /> </Button>
                  </Tooltip>
                </Hidden>
                <Suspense fallback={  <CircularProgress style={{marginLeft:"50%"}}  color="inherit" />}>
                  <Sort open={this.state.sortOpen} close={(data) => this.handleSortClose(data)} data={this.state.sorter} />
                </Suspense>
                <Suspense fallback={  <CircularProgress style={{marginLeft:"50%"}}  color="inherit" />}>
                  <Filter open={this.state.filterOpen} close={(data) => this.handleFilterClose(data)} data={this.state.filter} filterData={this.state.filterData} />
                </Suspense>
              </div>
            </Paper>
            <CardsList movies={this.state.currentList} />
            <footer>
              <div className="d-flex justify-content-center">
                <Suspense fallback={  <CircularProgress style={{marginLeft:"50%"}}  color="inherit" />}>
                  <Pagination totalRecords={this.state.totalPages} pageLimit={18} landingPage={this.state.activePage}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged} />
                </Suspense>
              </div>
              <div className="d-flex justify-content-center" style={{height:"50px",margin:"5px"}}>

              </div>
              <Paper className="fixedFooter" elevation={5}>
                <BottomNavigation
                  >
                    <a href="https://www.instagram.com/popcorntaless" target="_blank" rel="noreferrer" className="social-icon">
                    <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
                    </a>
                    <a href="/analytics" target="_blank"  className="social-icon">
                    <BottomNavigationAction label="Analytics" icon={<BarChartIcon />} />
                    </a>
                    <a href="mailto:popcorntales19@gmail.com" target="_blank"  className="social-icon">
                    <BottomNavigationAction label="Mail" icon={<MailIcon />} />
                    </a>
                  </BottomNavigation>
              </Paper>
            </footer>

          </div>
        </div>
        }
      </>
    );
  }
  async getFilteredData(result) {
    for (var i = 0; i < result.length; i++) {
      if (this.state.filterData.languages.includes(result[i].language)) continue;
      this.state.filterData.languages.push(result[i].language);
    }
    for (var i = 0; i < result.length; i++) {
      if (this.state.filterData.years.includes(result[i].year)) continue;
      this.state.filterData.years.push(result[i].year);
    }
    for (var i = 0; i < result.length; i++) {
      for(var j=0;j<result[i].genre.length;j++){
        if (this.state.filterData.genre.includes(result[i].genre[j])) continue;
        this.state.filterData.genre.push(result[i].genre[j]);
      }

    }
    this.state.filterData.years.sort();

  }
  processImageData(data) {
    var width, height;
    if (window.matchMedia("(max-width: 576px)").matches) {
      width = 140; height = 200;
    }
    else if (window.matchMedia("(max-width: 958px)").matches) {
      width = 200; height = 260;
    }
    else if (window.matchMedia("(max-width: 1300px)").matches) {
      width = 220; height = 250;
    }
    else if (window.matchMedia("(max-width: 2000px)").matches) {
      width = 250; height = 300;
    }
    else {
      width = 400; height = 500;
    }
    for (var i = 0; i < data.length; i++) {
      data[i].titleImage = data[i].titleImage + "&width=" + width + "&height=" + height;
    }
    return data;
  }
  handleFilterClose(data) {
    if (data == null) {
      this.setState({
        filterOpen: false
      });
      return;
    }
    var reviews = [];
    for (var i = 0; i < this.state.allReviews.length; i++) {
      reviews.push(this.state.allReviews[i]);
    }
    if (data.filter.language != "All") {
      reviews = reviews.filter(function (r) { return r.language == data.filter.language });
    }
    if (data.filter.year != "All") {
      reviews = reviews.filter(function (r) { return r.year == data.filter.year });
    }
    if (data.filter.genre != "All") {
      reviews = reviews.filter(function (r) { return r.genre.includes(data.filter.genre)});
    }
    reviews = reviews.filter(function (r) { return r.rating >= data.filter.rating[0] && r.rating <= data.filter.rating[1] });

    var currentPages = [];
    var len = (reviews.length > 18) ? 18 : reviews.length;
    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }
    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      sortOpen: false,
      filterOpen: false,
      filter: data.filter,
      searchText: ""
    });
  }
  handleSortClose(data) {
    // result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
    // sorter:{
    //   "field":"timeStamp",
    //   "sortType":"Ascending"
    // }
    if (data.field === this.state.sorter.field && data.sortType === this.state.sorter.sortType) {
      this.setState({ sortOpen: false })
      return;
    }
    var reviews;
    if (this.field === "timeStamp") {
      if (data.sortType === "Descending")
        reviews = this.state.reviews.sort(function (a, b) { return new Date(b.timeStamp) - new Date(a.timeStamp) })
      else
        reviews = this.state.reviews.sort(function (a, b) { return new Date(a.timeStamp) - new Date(b.timeStamp) })
    }
    else {
      if (data.sortType === "Descending")
        reviews = this.state.reviews.sort(function (a, b) {
          if (a[data.field] > b[data.field]) { return -1; }
          if (a[data.field] < b[data.field]) { return 1; }
          return 0;
        })
      else
        reviews = this.state.reviews.sort(function (a, b) {
          if (a[data.field] < b[data.field]) { return -1; }
          if (a[data.field] > b[data.field]) { return 1; }
          return 0;
        })
    }
    var currentPages = [];
    var len = (reviews.length > 18) ? 18 : reviews.length;
    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }
    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      sortOpen: false,
      sorter: data
    });
  }


  getSchema(movieList) {
    var jsonbody = {
      "name":"Popcorn Tales",
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": []
    };

    for (var i = 0; i < movieList.length; i++) {
      var movie = movieList[i];
      var item = {
        "@type": "ListItem",
        "position": i + 1,
         "name":movie.title,
         "image":movie.titleImage,
        "url": "https://popcorntales.com/" + movie.title
      }
      jsonbody.itemListElement.push(item);
    }
  //   var entries="";
  //   for(var i=0;i<movieList.length;i++){
  //     var entry = "<url>\n<loc>" + "https://www.popcorntales.com/"+movieList[i].title.replaceAll(" ","%20")+"</loc>\n"+
  //   "<lastmod>"+new Date().toISOString()+"</lastmod>\n"+
  // "</url>";
  //     entries = entries + entry +"\n";
  // }
  // debugger;

    return JSON.stringify(jsonbody)
  }

}


export default Home;