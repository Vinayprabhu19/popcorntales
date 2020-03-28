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

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      reviews: [],
      totalPages:0
     };
  
  }


  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
          const rvs = result.map(item => {
            return item;
          });
          this.setState({
            activePage:1,
            totalPages:rvs.length,
            reviews: rvs
          });
      });   
  }

  onPageChanged(e){
    console.log(e);
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
      
      <div className="App-Content">
        <GridList className="cardGridList"  >
                      {this.state.reviews.map(image => (
                          <CardLayout key={image.reviewId} onCardClick ={()=> console.log(image)} review={image}/>
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

export default App;
