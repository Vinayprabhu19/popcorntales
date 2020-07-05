import React from "react";
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeButton from '@material-ui/icons/Home';
import Synopsis from '../components/Synopsis';
import Review from '../components/Review';
import LazyImage from "../components/LazyImage";
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Cast from '../components/Cast';
import Ticket from '../components/Ticket';
import MailIcon from '@material-ui/icons/Mail';
import SocialMenu from '../components/SocialMenu';
import DetailedRating from '../components/DetailedRating';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Head from 'next/head';
import Router from 'next/router'
import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export async function getServerSideProps (context){
    var resMovie = await fetch(`https://api.popcorntales.com/movie`);
    var movies = await resMovie.json();
    var titles = movies.map(function(a) {return a.title;});
    var title=context.params.movie;
    if(!titles.includes(title)){
      var failureStatus=true;
      if(typeof window === 'undefined'){
        context.res.writeHead(302, {location: '/'})
        context.res.end();
        return {
          props: {
            failureStatus
          }
        }
      } else {
      // On client
        Router.push('/')
      }
      return {}
    }

    const res = await fetch(`https://api.popcorntales.com/moviereview?movie=`+context.params.movie);
    const movie = await res.json();
    return {
      props: {
        movie
      }
    }
   //this.props.history.push('/');
  }
class Detail extends Component {
  constructor(props) {
    super(props);
    var result = props.movie;
    if(typeof(result.review) == "string")
        result.review=JSON.parse(result.review);
    if(typeof(result.ticketDetails) == "string")
    result.ticketDetails = JSON.parse(result.ticketDetails);
    var movieTitle = result.title;

    if(movieTitle == undefined){
      movieTitle="Popcorn Tales";
    }
    debugger;
    this.state = {
        loading:true,
        shareUrl:"www.popcorntales.com",
        tags:"#popcorntales #movietime #moviereview #popcorn #letswatch",
        selectedMovie : result,
        selectedTab:0,
        loading:false,
        shareUrl:"www.popcorntales.com/review/"+movieTitle.replace(/ /g, '%20'),
        quote:"I read a review of "+movieTitle+" and I feel that it's worth watching. Read the review and let's watch it together!!"
          
    };
  }

  handleChange(v){
    this.setState({
      selectedTab:v
    })
  }

  getToolbar = () => {
    switch(this.state.selectedTab) {
        case 0: 
          if(this.state.selectedMovie.review !== undefined)
            return <Synopsis synopsis={this.state.selectedMovie.review.synopsis}/>
        break;
        case 1: 
          if(this.state.selectedMovie.review !== undefined)
            return <Review review={this.state.selectedMovie.review} title={this.state.selectedMovie.title}/>
         break;
      case 2: 
          return <Cast cast={this.state.selectedMovie.cast}/>
       break;
    case 3: 
          return <Ticket ticketDetails={this.state.selectedMovie.ticketDetails}/>
        break;
        default: {
            return <p></p>
        }
    }   
};

hearts = (starCount) => {
  if(starCount == undefined)
    return;
  const value = starCount;
  return (
        <StyledRating name="customized-color" defaultValue={value} precision={0.1} value={value} 
                    icon={<FavoriteIcon fontSize="inherit" />}/>
  );
}

render(){
  const toolbar = this.getToolbar();
  const overallRating = this.hearts(this.state.selectedMovie.rating);
  return (
    <>
       <Head>
          <title>{this.state.selectedMovie.title + " Review "+this.state.selectedMovie.rating+"/5"}</title>
          <meta name="description" content={this.state.selectedMovie.review.synopsis}/>
          <link async rel="icon" type="image/x-icon"  href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link async rel="canonical" href="https://www.Popcorntales.com/" />
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
    <div id="container" className={this.state.loading ? 'hidden' : ''}>
        
        <AppBar id="appBar" position="static">
        <Toolbar id="toolbar">
            <a href="/"><HomeButton/></a>
            <h1 id="title">Popcorn Tales</h1>
            <section className="rightToolbar">
            <SocialMenu/>
            </section>
          </Toolbar>
        </AppBar>
        <div className="movie-header">
            <div id="card" >
              <Paper elevation={19}>
              <LazyImage className="card-img" alt={"Popcorn Tales " + this.state.selectedMovie.title + " Review Image"} unloadedSrc={this.state.selectedMovie.titleImage}/>
              </Paper>
              <Hidden smDown>
              <Grid container justify = "center" className="ratingHearts">
                 {overallRating}
                  </Grid>
              </Hidden>
            </div>
            <Hidden mdUp >
                  <div className="topHeader">
                    <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  <DetailedRating selectedMovie={this.state.selectedMovie}/>
                  </Grid>
                  <h3 className="headerLevel2 centerAligned" >{this.state.selectedMovie.language}</h3>
                  <h3 className="headerLevel2 centerAligned">{this.state.selectedMovie.genre.join(",")}</h3>
                  <Grid container justify = "center">
                  {overallRating}
                  </Grid>
                  </div>
            </Hidden>
            <Hidden smDown>
            <div id="movie-description">
                <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  <DetailedRating selectedMovie={this.state.selectedMovie}/>
                  </Grid>
                <h2 className="headerLevel2">{this.state.selectedMovie.language}</h2>
                <h3 className="headerLevel2">{this.state.selectedMovie.genre.join(",")}</h3>
                <h3 className="headerLevel2">{this.state.selectedMovie.rating}/5</h3>   
                <div className="icon-container">
                <TwitterShareButton url={this.state.shareUrl} quote={this.state.quote} className="social-media-icon"><TwitterIcon size={28} round/></TwitterShareButton>
                <FacebookShareButton url={this.state.shareUrl} title={this.state.quote} hashtag={this.state.tags} className="social-media-icon"><FacebookIcon size={28} round/></FacebookShareButton>
                <WhatsappShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><WhatsappIcon size={28} round/></WhatsappShareButton>
                <TelegramShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TelegramIcon size={28} round/></TelegramShareButton>
                </div>
            </div>
            </Hidden>
            
            <Hidden mdDown>
              <div id="trailer_div">
                  <iframe id="trailer" title={this.state.selectedMovie} src={this.state.selectedMovie.trailer}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
              </div>
            </Hidden>
        </div>
        <div className="movie-detail">
          <Paper elevation={8}>
          <AppBar position="static">
            <Tabs onChange={(e,v)=>{this.handleChange(v)}}  value={this.state.selectedTab} variant="fullWidth" aria-label="simple tabs example">
              <Tab value={0} label="Review" className="tab"/>
              <Tab value={1} label="Hit & Miss" className="tab"/>
              <Tab value={2} label="Cast & Crew" className="tab"/>
              <Tab value={3} label="Ticket" className="tab"/>
            </Tabs>
          </AppBar>
          </Paper>
          <div>
          {toolbar}
          </div>
        </div>
        <footer>
          <div id="footerText"> 
              <Hidden smUp>
                <Grid container justify = "center" className="icon-container">
                  <TwitterShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TwitterIcon size={25} round/></TwitterShareButton>
                  <FacebookShareButton url={this.state.shareUrl} quote={this.state.quote} hashtag={this.state.tags} className="social-media-icon"><FacebookIcon size={25} round/></FacebookShareButton>
                  <WhatsappShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><WhatsappIcon size={25} round/></WhatsappShareButton>
                  <TelegramShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TelegramIcon size={25} round/></TelegramShareButton>
                  </Grid>
              </Hidden>
              <Grid container justify = "center" id="footerText">
              <h4 id="feedbackText">Need your feedback to improve  </h4>
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
              </Grid>
          </div>
        </footer>
    </div>
    </div>
    </>
  );
}
}

export default Detail;
