import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/Mail';
import 'chart.js';
import HomeButton from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Component } from 'react';
import { ColumnChart, LineChart, PieChart } from 'react-chartkick';
import Head from 'next/head';
export async function getServerSideProps(context){
    const res = await fetch('https://api.popcorntales.com/movie');
    const movies = await res.json();
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        movies
      },
    }
   
  }
class Analytics extends Component {
    constructor(props) {
        super(props);
        var result = props.movies;
        
        var languagesData = this.getLanguages(result);
        var yearData = this.getMovieCountByYear(result);
        var categoryData = this.getMovieCountByCategory(result);
        var ratingByCategory = this.getRatingCountByCategory(result);
        var ratingCountByLanguage = this.getratingCountByLanguage(result);
        this.state = {
            totalMovies:result.length,
                languagesData: languagesData,
                yearData: yearData,
                categoryData:categoryData,
                ratingByCategory:ratingByCategory,
                ratingCountByLanguage:ratingCountByLanguage
        };
      }

  render() {
    return  <div >
       <Head>
        <title>Popcorn Tales</title>
        <meta name="description" content="Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here."/>
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
              firebase.analytics(); `,
            }}
          ></script>
          <script>
            
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170786754-1"></script>
        </Head>
    <AppBar id="appBar" position="static">
        <Toolbar id="toolbar">
        <Grid container alignContent = {"center"} >
            <a href="/"><HomeButton/></a>
            <h1 id="title">Popcorn Tales</h1>
          </Grid>
          </Toolbar>
    </AppBar>
    <Grid container justify = "center" className="analytics" >
      <Paper  elevation={15}className="mediumChart">
      <Grid container justify = "center" >
         <h3>Total Movies : {this.state.totalMovies}</h3>
        <PieChart id="movieChart" data={this.state.languagesData} legend="bottom" width={250} height={250}/>
        </Grid>
      </Paper>
      <Paper  elevation={15}className="mediumChart">
        <PieChart data={this.state.categoryData} legend="bottom" donut={true} id="categoryChart"/>
      </Paper>
      
      
      <Paper  elevation={15}className="mediumChart">
        <LineChart data={this.state.ratingCountByLanguage} id="languageLineChart" precision={2} xtitle="Movie" ytitle="Rating" min={0} max={5.0} legend="bottom"/>
      </Paper>
      
      
      <Paper  elevation={15}className="mediumChart">
        <LineChart data={this.state.ratingByCategory} precision={2}  id="categoryLineChart" xtitle="Category" ytitle="Rating" min={0} max={5.0} legend="bottom"/>
      </Paper>
      
      
      <Paper  elevation={15}className="mediumChart">
      <ColumnChart data={this.state.yearData}  id="yearChart" xtitle="Year"  ytitle="Movies Watched"/>
      </Paper>
      
   </Grid>
   <footer>
   <div id="footerText"> 
       <h6>Need your feedback to improve  
       <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
       </h6>
   </div>
 </footer>
 </div>
  }

getLanguages(result){
  var languages = [];
  var languageCount = [];
  for (var i = 0; i < result.length; i++){
    if(!(languages.includes(result[i].language))){
      languages.push(result[i].language)
    }
  }
  for(i = 0 ;i<languages.length;i++){
    const count = result.filter((obj) => obj.language === languages[i]).length;
    languageCount.push(
      [languages[i],count]
    )
  }
  return languageCount;
}


getMovieCountByYear(result){
 
  var year = [];
  var yearCount = [];
  for (var i = 0; i < result.length; i++){
    var y =new Date(result[i].timeStamp).getFullYear();
    if(!(year.includes(y))){
      year.push(y);
    }
  }
  for(i = 0 ;i<year.length;i++){
    const count = result.filter((obj) => new Date(obj.timeStamp).getFullYear() === year[i]).length;
    yearCount.push([year[i],count])
  }
  
  return yearCount;
}

getratingCountByLanguage(result){
  var languages = [];
  for (var i = 0; i < result.length; i++){
    if(!(languages.includes(result[i].language))){
      languages.push(result[i].language)
    }
  }
  var languageData =[
    {name:"min",data:{}},
    {name:"avg",data:{}},
    {name:"max",data:{}}
]
  for(i = 0 ;i<languages.length;i++){
    var filteredByLanguage= result.filter((obj) =>  obj.language === languages[i]);
    var min=999;
    var max =-1;
    var sum=0;
    for(var j =0;j<filteredByLanguage.length;j++){
      if(filteredByLanguage[j].rating <min) min =filteredByLanguage[j].rating;
      if(filteredByLanguage[j].rating > max) max =filteredByLanguage[j].rating;
      sum = sum+filteredByLanguage[j].rating;
    }
    var avg=sum/filteredByLanguage.length;

    languageData[0].data[languages[i]]=min;
    languageData[1].data[languages[i]]=avg;
    languageData[2].data[languages[i]]=max;
  }
  return languageData;
}

getRatingCountByCategory(result){
  var catergories = [];
  var categoryCount = [];
  for (var i = 0; i < result.length; i++){
    for(var j= 0;j<result[i].genre.length;j++){
      if(!catergories.includes(result[i].genre[j]))
        catergories.push(result[i].genre[j])
    }
  }
  var categoryData =[
    {name:"min",data:{}},
    {name:"avg",data:{}},
    {name:"max",data:{}}
  ]
  for(i = 0 ;i<catergories.length;i++){
    var filteredByCategory= result.filter((obj) =>  obj.genre.includes(catergories[i]));
    var min=999;
    var max =-1;
    var sum=0;
    for(var j =0;j<filteredByCategory.length;j++){
      if(filteredByCategory[j].rating <min) min =filteredByCategory[j].rating;
      if(filteredByCategory[j].rating > max) max =filteredByCategory[j].rating;
      sum = sum+filteredByCategory[j].rating;
    }
    var avg=sum/filteredByCategory.length;

    categoryData[0].data[catergories[i]]=min;
    categoryData[1].data[catergories[i]]=avg;
    categoryData[2].data[catergories[i]]=max;
  }
  return categoryData;
}
getMovieCountByCategory(result){
  var catergories = [];
  var categoryCount = [];
  for (var i = 0; i < result.length; i++){
    for(var j= 0;j<result[i].genre.length;j++){
      if(!catergories.includes(result[i].genre[j]))
        catergories.push(result[i].genre[j])
    }
  }
  for(var i = 0 ;i<catergories.length;i++){
    const count = result.filter((obj) =>  obj.genre.includes(catergories[i])).length;
    categoryCount.push(
      [catergories[i],count]
    )
  }
  return categoryCount;
}

}
export default Analytics;
