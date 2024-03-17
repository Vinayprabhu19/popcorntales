import React, { lazy,Suspense,Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import (/* webpackPrefetch: true */ "../css/Detail.css");
import HomeButton from '@mui/icons-material/Home';
import Hidden from '@mui/material/Hidden';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
const ShareMenu = lazy(() => import('./ShareMenu'));
const BarChartIcon = lazy(() => import('@mui/icons-material/BarChart'));
const InstagramIcon = lazy(() => import('@mui/icons-material/Instagram'));
const MailIcon = lazy(() => import('@mui/icons-material/Mail'));
const FavoriteIcon = lazy(() => import('@mui/icons-material/Favorite'));
import { Helmet } from 'react-helmet';
const BottomNavigation = lazy(() => import('@mui/material/BottomNavigation'));
const BottomNavigationAction = lazy(() => import('@mui/material/BottomNavigationAction'));
import { styled } from '@mui/material/styles';
import ImageLoader from './ImageLoader';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


const DetailTab = lazy(() => import('./DetailTab'));
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
        selectedMovie: {
            title: "Popcorn Tales",
            genre : [],
            review : {
              synopsis:"",
              pros:[],
              cons:[]
            },
            ticketDetails:{ticketImage:"Graph/Popcorn Tales.png"},
            cast:[],
            rating:5
        },
        selectedTab:null,
        loading:true,
        schema:{}
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    if(!nextState.dataLoaded)
      return false;
    if(this.state.selectedMovie.title != nextState.selectedMovie.title)
      return true;
    return false;
  }

  componentDidMount(){
    var movieTitle = this.props.match.params.movieName;
    fetch('https://api.popcorntales.com/moviereview?movie='+movieTitle,{
        headers : {
          'Accept': 'application/json'
         }})
    .then(response => response.json())
    .then(result => {
      if(result.message!= null ){
        this.props.history.push('/404');
        return;
      }
        result=this.processImageData(result);
        result.review=JSON.parse(result.review);
        var schema = this.getSchema(result);
        result.ticketDetails = JSON.parse(result.ticketDetails);
        this.setState({
            dataLoaded:true,
            selectedMovie : result,
            selectedTab:0,
            loading:false,
            schema:schema
          });
    })
    .catch(error =>{
      console.error(error);
      this.props.history.push('/404');
      return;
    })
  }


hearts = (starCount) => {
  if(starCount == undefined)
    return;
  const value = starCount;
  return (
        <StyledRating name="customized-color" defaultValue={value} precision={0.25} value={value}
                    icon={<FavoriteIcon fontSize="inherit" />} readOnly={true}/>
  );
}
processImageData(data){
  var width,height;
  var width,height;
  if(window.matchMedia("(max-width: 576px)").matches){
    width=150;height=200;
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
    width=250;height=300;
  }
  data.titleImage=  data.titleImage+"&width="+width+"&height="+height;
  return data;
}

render(){
  if (!this.state.dataLoaded) {
    return <Backdrop open={this.state.loading}>
    <CircularProgress color="inherit" />
  </Backdrop>
}
const overallRating = this.hearts(this.state.selectedMovie.rating);
  return ( <>
       <Helmet>
          <title>{this.state.selectedMovie.title + " Movie Review and Analysis"}</title>
          <meta name="description" content={this.state.selectedMovie.review.synopsis}/>
          <script className='structured-data-list' type="application/ld+json">{this.state.schema}</script>
        </Helmet>
    <div id="container" className={this.state.loading ? 'hidden' : ''}>

        <AppBar style={{width:"100%",height:"60px",backgroundColor:"white",color:"black"}} position="static">
        <Toolbar>
            <a href="/" alt={"Popcorn Tales"}><HomeButton/></a>
            {(this.state.selectedMovie.title.length < 20) && <h1 id="title">{this.state.selectedMovie.title +" Movie Review"}</h1>}
            {(this.state.selectedMovie.title.length >= 20) && <h1 id="title">{this.state.selectedMovie.title}</h1>}
            <section style={{marginLeft:"auto",display:"inline-block"}}>
            </section>
          </Toolbar>
        </AppBar>
        <div style={{padding:"10px"}}>
            <Hidden mdUp >
              <div style={{width:"100%",marginTop:"20px",zIndex:999}} >
                    <div className="movie-card" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Paper elevation={19} >
                      <ImageLoader className="movie-card" alt={this.state.selectedMovie.title} src={this.state.selectedMovie.titleImage}></ImageLoader>
                      </Paper>
                    </div>
                  </div>
                  <div className="topHeader">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <h1 className="headerLevel1 centerAligned" >{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  </div>
                  <h3 className="headerLevel2 centerAligned">{this.state.selectedMovie.language}</h3>
                  <h3 className="headerLevel2 centerAligned" >{this.state.selectedMovie.genre.join(",")}</h3>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                  {overallRating}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <a id="trailerButton" href={this.state.selectedMovie.trailer} target="_blank" rel="noreferrer">Watch trailer</a>
                  </div>
                  </div>
            </Hidden>
            <Hidden mdDown>
            <div className="movieDetail">
                <div className="movie-card" style={{width:"fit-content",marginTop:"2%",padding:"5px",float:"left",zIndex:999}}>
                    <Paper elevation={19}  >
                    <ImageLoader className="movie-card" alt={this.state.selectedMovie.title} src={this.state.selectedMovie.titleImage}></ImageLoader>
                  </Paper>
                </div>
                <div style={{width:"fit-content",marginTop:"2%",float:"left",marginLeft:"30px"}}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 className="headerLevel1" >{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                    <a id="trailerButton" href={this.state.selectedMovie.trailer} target="_blank" rel="noreferrer">Watch trailer</a>
                    </div>
                    <h2 className="headerLevel2" >{this.state.selectedMovie.language}</h2>
                    <h3 className="headerLevel2" >{this.state.selectedMovie.genre.join(",")}</h3>
                    <h3 className="headerLevel2" >{this.state.selectedMovie.rating}/5</h3>
                    {overallRating}
                </div>
            </div>
            </Hidden>
        </div>
          <DetailTab movie={this.state.selectedMovie} selectedTab={this.state.selectedTab} 	/>
          <footer>
          <Suspense>
              <Paper className="fixedFooter" elevation={5}>
                <BottomNavigation >
                    <a href="https://www.instagram.com/popcorntaless" target="_blank" rel="noreferrer" className="social-icon">
                    <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
                    </a>
                    <a href="/analytics" target="_blank"  className="social-icon">
                    <BottomNavigationAction label="Analytics" icon={<BarChartIcon />} />
                    </a>
                    <a href="mailto:popcorntales19@gmail.com" target="_blank"  className="social-icon">
                    <BottomNavigationAction label="Mail" icon={<MailIcon />} />
                    </a>
                    <ShareMenu title={this.state.selectedMovie.title}/>
                  </BottomNavigation>
              </Paper>
              </Suspense>
            </footer>
    </div>
    </>
  );
}

getSchema(movie){
  var ticketDetails = JSON.parse(movie.ticketDetails);
 var jsonbody= {
    "@context" : "http://schema.org",
    "@type" : "Movie",
    "name" : movie.title,
    "image" : movie.titleImage,
    "author": {
      "@type": "Person",
      "name": "Vinay Prabhu"
    },
    "director": {
      "@type": "Person",
      "name": movie.cast[0].split("-")[0].trim()
    },
    "dateCreated": ticketDetails.watchDate,
    "review" : {
      "@type" : "Review",
      "author" : {
        "@type" : "Person",
        "name" : "Vinay Prabhu"
      },
      "reviewRating" : {
        "@type" : "Rating",
        "ratingValue" : movie.rating
      },
      "reviewBody" : movie.review.synopsis
    }
  }
  return JSON.stringify(jsonbody)
}

}

export default Detail;