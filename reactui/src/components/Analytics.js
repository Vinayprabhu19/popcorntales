import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/Mail';
import HomeButton from '@material-ui/icons/Home';
import 'chart.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Component } from 'react';
import { ColumnChart, LineChart, PieChart } from 'react-chartkick';
import '../css/analytics.css';
import '../css/card.css';
import Filter from "./Filter";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CardLayout from "./CardLayout";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reviews:[],
          filterOpen:false,
          filter:{
            "language":"All",
            "year":"All",
            "rating":[0.0,5.0]
          },
          filterData:{"years":["All"],"languages":["All"]},
          bestMovie:{},
            worstMovie:{},
            averageRating:5
        };

     this.openFilter=this.openFilter.bind(this);
     this.getFilteredData = this.getFilteredData.bind(this);
      }

      componentDidMount(){
        fetch('https://api.popcorntales.com/movie')
          .then(response => response.json())
          .then(result => {
            this.getFilteredData(result);
            var languagesData = this.getLanguages(result);
            var yearData = this.getMovieCountByYear(result);
            var categoryData = this.getMovieCountByCategory(result);
            var ratingByCategory = this.getRatingCountByCategory(result);
            var ratingCountByLanguage = this.getratingCountByLanguage(result);
            var movies = this.getMovies(result);
            this.setState({
                allReviews:result,
                reviews: result,
                totalMovies:result.length,
                languagesData: languagesData,
                yearData: yearData,
                categoryData:categoryData,
                ratingByCategory:ratingByCategory,
                ratingCountByLanguage:ratingCountByLanguage,
                bestMovie:movies["bestMovie"],
                worstMovie:movies["worstMovie"],
                averageRating:movies["averageRating"]
              })
          })
          .catch(error =>{
            console.error(error);
          })
      }

  openFilter(){
        this.setState({
          filterOpen : true
        });
      }
  getFilteredData(result){
    for(var i=0;i<result.length;i++){
      if(this.state.filterData.languages.includes(result[i].language)) continue;
      this.state.filterData.languages.push(result[i].language);}
    for(var i=0;i<result.length;i++){
        if(this.state.filterData.years.includes(result[i].year)) continue;
        this.state.filterData.years.push(result[i].year);}
    this.state.filterData.years.sort();
    this.state.filterData.years.reverse();
  }
  handleFilterClose(data){
    if(data == null){
      this.setState({
        filterOpen:false,
        filter:this.state.filter
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
    var categoryData = this.getMovieCountByCategory(reviews);
    var ratingByCategory = this.getRatingCountByCategory(reviews);
    var movies = this.getMovies(reviews);
    this.setState({
      reviews: reviews,
      filterOpen:false,
      filter:data.filter,
      categoryData:categoryData,
      ratingByCategory:ratingByCategory,
      bestMovie:movies["bestMovie"],
      worstMovie:movies["worstMovie"],
      averageRating:movies["averageRating"]
    });
  }
  render() {
    return  <div >
    <AppBar id="appBar" position="static">
        <Toolbar>
        <div>
            <a href="/"><HomeButton/></a>
            <h1 id="title">Popcorn Tales</h1>
          </div>
          </Toolbar>
    </AppBar>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Total Movies : {this.state.totalMovies}</h5>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container justify = "center">
        <Paper  elevation={15}className="mediumChart">
          <PieChart data={this.state.languagesData} legend="bottom"  width={300} height={250}/>
        </Paper>
          <Paper  elevation={15}className="mediumChart">
            <LineChart data={this.state.ratingCountByLanguage} precision={2} xtitle="Movie" ytitle="Rating" min={0} max={5.0} legend="bottom"/>
          </Paper>
          <Paper  elevation={15}className="mediumChart">
        <ColumnChart data={this.state.yearData} xtitle="Year" ytitle="Movies Watched"/>
        </Paper>
        </Grid>
        </AccordionDetails>
    </Accordion>
    <Paper elevation={10} id="filterBar">
        <Tooltip title="Filter">
          <Button className="iconBtn" onClick={this.openFilter} ><FilterListIcon fontSize={"large"} style={{fill: "purple"}} /> </Button>
           </Tooltip>
    </Paper>
    <Filter open={this.state.filterOpen} close={(data)=>this.handleFilterClose(data)} data={this.state.filter} filterData={this.state.filterData}/>
    <div id="section">

    <div id="centerSection">
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">High Rated : {this.state.bestMovie.title} {this.state.bestMovie.rating}</h5>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container justify = "center" >
          <CardLayout review={this.state.bestMovie}/>
          </Grid>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Low Rated : {this.state.worstMovie.title} {this.state.worstMovie.rating}</h5>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container justify = "center" >
          <CardLayout review={this.state.worstMovie}/>
          </Grid>
        </AccordionDetails>
    </Accordion>
    <Grid container justify = "center" >
      <Paper  elevation={15}className="mediumChart">
        <h6 className="chartText">Average Rating - {this.state.averageRating}</h6>
        <LineChart data={this.state.ratingByCategory} precision={2} xtitle="Category" ytitle="Rating" min={0} max={5.0} legend="bottom"/>
      </Paper>
      <Paper  elevation={15}className="mediumChart">
      <h6 className="chartText">Movies in filter - {this.state.reviews.length}</h6>
        <PieChart data={this.state.categoryData} legend="bottom" donut={true} />
      </Paper>
      </Grid>
      </div>
      </div>
   <footer>
   <Grid container justify = "center" id="footerText">
       <h6>Need your feedback to improve
       <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
       </h6>
    </Grid>
 </footer>
 </div>
  }

  getMovies(result){
    var res = result.sort((a,b)=>{return a.rating-b.rating});
    var rating =0;
    for(var i=0;i<res.length;i++){
        rating+=res[i].rating;
    }
    rating = rating/res.length;
    var bestMovie = (res.length>0)?res[res.length-1]:[];
    var worstMovie = (res.length>0)?res[0]:[];
    return {
      "bestMovie":bestMovie,
      "worstMovie":worstMovie,
      "averageRating":rating.toFixed(2)
    }
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
