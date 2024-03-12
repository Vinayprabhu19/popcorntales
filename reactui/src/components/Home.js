import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';
import React, { Suspense, lazy, Component } from 'react';
import '../css/Home.css';
import '../css/card.css';
import { Helmet } from 'react-helmet';
import BarChartIcon from '@mui/icons-material/BarChart';
import Tooltip from '@mui/material/Tooltip';
const Sort = lazy(() => import('./Sort'));
const Filter = lazy(() => import('./Filter'));
const CardsList = lazy(() => import('./CardsList'));
const InstagramIcon = lazy(() => import('@mui/icons-material/Instagram'));
const MailIcon = lazy(() => import('@mui/icons-material/Mail'));
const SortIcon = lazy(() => import('@mui/icons-material/Sort'));
const FilterListIcon = lazy(() => import('@mui/icons-material/FilterList'));
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MenuOutlined, SearchOutlined, SortAscendingOutlined, FilterOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout';
import Input from 'antd/lib/input';
import { Pagination } from '@mui/material';

const { Search } = Input;
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
        this.setState({
          schema: schema,
          activePage: pageNo,
          totalPages: rvs.length,
          allReviews: rvs,
          reviews: rvs,
          currentList: currentPages,
          loading: false
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
    const text = e.target.value.toLowerCase();
    const filteredReviews = this.state.allReviews.filter(review => review.title.toLowerCase().includes(text));
  
    const totalPages = filteredReviews.length;
    const currentList = filteredReviews.slice(0, 18);
  
    this.setState({
      activePage: 1,
      totalPages,
      reviews: filteredReviews,
      currentList,
      loading: false,
      filter: {
        language: "All",
        year: "All",
        rating: [0.0, 5.0]
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
          <div style={{ color: '#fff', background: "#45b3e0", fontSize: '30px', height: "70px", padding: "5px", textAlign: "center", fontFamily: "Satisfy", display: "flex", justifyContent: "center", alignItems: "center" }}>Popcorn Tales</div>
          
            <Paper className="filter-sort" elevation={5}>
              <div className="d-flex justify-content-center">
                <Search placeholder="Search..." style={{ width: 200, marginRight: '20px' }} prefix={<SearchOutlined />} value={this.state.searchText} onChange={this.onSearch}/>
                <Tooltip title="Sort">
                  <Button className="iconBtn" onClick={this.openSort}><SortIcon style={{ fill: "purple" }} /></Button>
                </Tooltip>
                <Tooltip title="Filter">
                  <Button className="iconBtn" onClick={this.openFilter}><FilterListIcon style={{ fill: "purple" }} /> </Button>
                </Tooltip>
                <Suspense fallback={<CircularProgress style={{ marginLeft: "50%" }} color="inherit" />}>
                  <Sort open={this.state.sortOpen} close={(data) => this.handleSortClose(data)} data={this.state.sorter} />
                </Suspense>
                <Suspense fallback={<CircularProgress style={{ marginLeft: "50%" }} color="inherit" />}>
                  <Filter open={this.state.filterOpen} close={(data) => this.handleFilterClose(data)} data={this.state.filter} filterData={this.state.filterData} />
                </Suspense>
                </div>
            </Paper>
            


            <CardsList movies={this.state.currentList} />
            <div style={{ width: "100%", height: "50px", marginBottom: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Pagination
                count={Math.ceil(this.state.totalPages / 18)} // Calculate total number of pages based on total records and page limit
                page={this.state.activePage} // Current active page
                onChange={(event, value) => this.onPageChanged(value)} // Function to handle page change
                showFirstButton
                showLastButton
              />
            </div>
            <footer>
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
    const filterData = { years: new Set(), languages: new Set(), genre: new Set() };
    
    result.forEach(movie => {
      filterData.languages.add(movie.language);
      filterData.years.add(movie.year);
      movie.genre.forEach(genre => filterData.genre.add(genre));
    });
  
    filterData.years = ["All", ...Array.from(filterData.years)].sort();
    filterData.languages = ["All", ...Array.from(filterData.languages)];
    filterData.genre = ["All", ...Array.from(filterData.genre)];
  
    this.setState({ filterData });
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
    if (!data) {
      this.setState({ filterOpen: false });
      return;
    }
  
    const { language, year, genre, rating } = data.filter;
    let reviews = this.state.allReviews.filter(movie => {
      const langCheck = language === "All" || movie.language === language;
      const yearCheck = year === "All" || movie.year === year;
      const genreCheck = genre === "All" || movie.genre.includes(genre);
      const ratingCheck = movie.rating >= rating[0] && movie.rating <= rating[1];
      return langCheck && yearCheck && genreCheck && ratingCheck;
    });
  
    const currentPages = reviews.slice(0, 18);
    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews,
      currentList: currentPages,
      loading: false,
      sortOpen: false,
      filterOpen: false,
      filter: data.filter,
      searchText: ""
    });
  }
  handleSortClose(data) {
    // Check if the sorting fields are the same as the current state
    if (data.field === this.state.sorter.field && data.sortType === this.state.sorter.sortType) {
      this.setState({ sortOpen: false });
      return;
    }
  
    // Clone the reviews array to avoid mutating the state directly
    let reviews = [...this.state.reviews];
  
    // Sort the reviews based on the field and sortType provided in the data
    if (data.field === "timeStamp") {
      reviews.sort((a, b) => {
        const dateA = new Date(a.timeStamp);
        const dateB = new Date(b.timeStamp);
        return data.sortType === "Descending" ? dateB - dateA : dateA - dateB;
      });
    } else {
      reviews.sort((a, b) => {
        const valueA = a[data.field];
        const valueB = b[data.field];
        return data.sortType === "Descending" ? valueB - valueA : valueA - valueB;
      });
    }
  
    // Update currentPages with the first 18 elements of the sorted reviews
    const currentPages = reviews.slice(0, 18);
  
    // Update the state with the sorted reviews and other necessary data
    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews,
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