import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import React, { Suspense, lazy, Component } from 'react';
import '../css/Home.css';
import '../css/card.css';
import worker from "./worker.js";
import WebWorker from "./workerSetup";
import FilterListIcon from '@material-ui/icons/FilterList';
import { Helmet } from 'react-helmet';
import BarChartIcon from '@material-ui/icons/BarChart';
import SocialMenu from './SocialMenu';
import Tooltip from '@material-ui/core/Tooltip';
const Banner = lazy(() => import('./Banner'));
const Sort = lazy(() => import('./Sort'));
const Filter = lazy(() => import('./Filter'));
const CardsList = lazy(() => import('./CardsList'));
const Pagination = lazy(() => import('./Pagination'));
class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.worker = new WebWorker(worker);
    this.worker.postMessage("Fetch Movies");
    this.state = {
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
        "rating": [0.0, 5.0]
      },
      filterData: { "years": ["All"], "languages": ["All"] }
    };

    this.carouselIndex = 0;
    this.onPageChanged = this.onPageChanged.bind(this);
    this.openSort = this.openSort.bind(this);
    this.handleSortClose = this.handleSortClose.bind(this);
    this.openFilter = this.openFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state) == JSON.stringify(nextState)) {
      return false;
    }
    return true;
  }
  componentDidMount() {


    this.worker.addEventListener("message", event => {
      var response = event.data;
      this.setState({
        schema: response.schema,
        activePage: 1,
        totalPages: response.rvs.length,
        allReviews: response.movies,
        reviews: response.rvs,
        currentList: response.currentPages,
        loading: false
      })
    });
  }

  onPageChanged(e) {
    var currentPages = [];
    var start = 8 * (e.currentPage - 1);
    var len = (this.state.reviews.length > 8 * (e.currentPage)) ? 8 * (e.currentPage) : this.state.reviews.length;
    for (var i = start; i < len; i++) {
      currentPages.push(this.state.reviews[i]);
    }
    this.setState({
      currentList: currentPages
    });
  }

  onSearch(e) {

    var text = e.target.value;

    var reviews = [];
    for (var i = 0; i < this.state.allReviews.length; i++) {
      reviews.push(this.state.allReviews[i]);
    }
    reviews = reviews.filter(function (r) { return r.title.toLocaleLowerCase().includes(text.toLowerCase()); });

    var currentPages = [];
    var len = (reviews.length > 8) ? 8 : reviews.length;
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


  onCardClick(image) {
    this.props.history.push('/review/' + image.title);
  }

  handleSelect = (selectedIndex, e) => {
    this.carouselIndex = selectedIndex;
  };
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
        <CircularProgress color="inherit" />
      </Backdrop>
    }
    return (
      <>
        <Helmet>
          <title>Popcorn Tales - Movie Reviews & Analysis</title>
          <meta name="description" content="Find the latest movies reviews from various Indian and Foreign languages" />
          <script className='structured-data-list' type="application/ld+json">{this.state.schema}</script>
        </Helmet>
        <div>
          <div className={this.state.loading ? 'hidden' : 'App'}>
            <AppBar id="appBar" position="static">
              <Toolbar>
                <Tooltip title="Analytics"><a href="/analytics"><BarChartIcon fontSize={"large"} color={"primary"} /></a></Tooltip>
                <h1 id="title">Popcorn Tales</h1>
                <section className="rightToolbar">
                  <SocialMenu />
                </section>
              </Toolbar>
            </AppBar>
            <Suspense fallback={<div>Loading...</div>}>
              <Banner />
            </Suspense>
            <Paper className="filter-sort" elevation={12}>
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
                <Suspense fallback={<div>Loading...</div>}>
                  <Sort open={this.state.sortOpen} close={(data) => this.handleSortClose(data)} data={this.state.sorter} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                  <Filter open={this.state.filterOpen} close={(data) => this.handleFilterClose(data)} data={this.state.filter} filterData={this.state.filterData} />
                </Suspense>
              </div>
            </Paper>
            <CardsList movies={this.state.currentList} />
            <footer>
              <div className="d-flex justify-content-center">
                <Suspense fallback={<div>Loading...</div>}>
                  <Pagination totalRecords={this.state.totalPages} pageLimit={8}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged} />
                </Suspense>
              </div>
              <div className="d-flex justify-content-center">
                <h6>Need your feedback to improve
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon /></a>
                </h6>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
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

    reviews = reviews.filter(function (r) { return r.rating >= data.filter.rating[0] && r.rating <= data.filter.rating[1] });

    var currentPages = [];
    var len = (reviews.length > 8) ? 8 : reviews.length;
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
    var len = (reviews.length > 8) ? 8 : reviews.length;
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
}
export default Home;
