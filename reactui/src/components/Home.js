import React, { Component } from 'react';
import movieImg from '../resources/movie.png';
import '../css/App.css';
import { Button } from '@material-ui/core';
import CardLayout from "./CardLayout";
import GridList from '@material-ui/core/GridList';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import Pagination from "./Pagination"
import { useHistory } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      reviews: [],
      totalPages:0,
      currentList:[]
     };

     this.onPageChanged = this.onPageChanged.bind(this);
  
  }


  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
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
            currentList : currentPages
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

render(){
  return (
    <div className="App">
      <AppBar id="appBar" position="static">
        <Toolbar>
        <div>
            <p id="title">Popcorn Tales</p>
          </div>
        <section className="rightToolbar">
          <Autocomplete
            id="autocomplete-box"
            options={this.state.reviews}
            getOptionLabel={option => option.title}
            onChange={(e,v)=>{debugger;console.log(v)}}
            renderInput={params => <TextField {...params} InputProps={{...params.InputProps, disableUnderline: true}} placeholder="Movie" />}
          />
          
        </section>
        <a id="instagramButton" href="https://www.instagram.com/matineetales">
              <InstagramIcon/>
          </a>
        </Toolbar>
      </AppBar>
      <img id="movie-img" src={movieImg} alt="Movie"/>
      <p id="bigTitle">POPCORN TALES</p>
      <div className="App-Content">
        <GridList className="cardGridList"  >
                      {this.state.currentList.map(image => (
                          <CardLayout key={image.reviewId} onCardClick ={()=> {this.onCardClick(image)}} review={image}/>
                      ))}
        </GridList>
      </div>
      <footer>
          <Pagination  totalRecords={this.state.totalPages} pageLimit={8}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}/>
        </footer>
    </div>
  );
}
}

export default Home;
