import React, { Component } from 'react';
import '../css/card.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      titleImage:"",year:"2020-05",genre:"",rating:5,scriptRating:5,directionRating:5,dialoguesRating:5,cinematographyRating:5,
      editingRating:5,musicRating:5,actingRating:5,
      synopsis:"",pros:"",cons:"",language:"",cast:"",
      ticketImage:"",watchDate:"2020-05-19",placeWatched:"",userId:"",password:"",trailer:""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    
  }

  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue="Are you sure you want to close ?";
    });
};

componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
}
  
  onSubmit(evt){
    var data ={
      title:this.state.title,
      titleImage:this.state.titleImage,
      year:this.state.year.substr(0,4),
      language:this.state.language,
      genre:this.state.genre.split(","),
      rating:this.state.rating,
      scriptRating:this.state.scriptRating,
      directionRating:this.state.directionRating,
      dialoguesRating:this.state.dialoguesRating,
      cinematographyRating:this.state.cinematographyRating,
      editingRating:this.state.editingRating,
      musicRating:this.state.musicRating,
      actingRating:this.state.actingRating,
      trailer:this.state.trailer,
      review:{
        synopsis:this.state.synopsis,
        pros:this.state.pros.split("\n"),
        cons:this.state.cons.split("\n")
      },
      cast:this.state.cast.split("\n"),
      ticketDetails:{
        ticketImage:this.state.ticketImage,
        watchDate:this.state.watchDate,
        placeWatched:this.state.placeWatched
      },
      userId:this.state.userId,
      password:this.state.password
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };

  var proxyUrl = 'https://fierce-chamber-21718.herokuapp.com/';
  var url = 'https://api.popcorntales.com/movie';

  fetch(proxyUrl + url, requestOptions)
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        console.log(data);
      })
      .catch(error =>{
        alert(error);
        console.error(error);
      })
  }

  render() {
    return <div className="container"> 
      <h3>Add Review</h3>
       <FormControl component="fieldset" className="container">
      <FormGroup>
          <TextField className="smallField" type={"text"} value={this.state.title} onChange={e=> this.setState({title : e.target.value})} label={"Title"} InputProps={{ disableUnderline: true }}/>
          <TextField className="mediumField" type={"text"} value={this.state.titleImage} onChange={e=> this.setState({titleImage : e.target.value})} label={"Title Image"} InputProps={{ disableUnderline: true }}/>
          <TextField className="mediumField" type={"text"} value={this.state.language} onChange={e=> this.setState({language : e.target.value})} label={"Language"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"month"} value={this.state.year} onChange={e=> this.setState({year : e.target.value})} label={"Year"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"text"} value={this.state.genre} onChange={e=> this.setState({genre : e.target.value})} label={"Genre"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.rating} onChange={e=> this.setState({rating : e.target.value})} label={"Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.scriptRating} onChange={e=> this.setState({scriptRating : e.target.value})} label={"Script Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.directionRating} onChange={e=> this.setState({directionRating : e.target.value})} label={"Direction Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.dialoguesRating} onChange={e=> this.setState({dialoguesRating : e.target.value})} label={"Dialogues Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.cinematographyRating} onChange={e=> this.setState({cinematographyRating : e.target.value})} label={"Cinematography Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.editingRating} onChange={e=> this.setState({editingRating : e.target.value})} label={"Editing Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.musicRating} onChange={e=> this.setState({musicRating : e.target.value})} label={"Music Rating"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"number"} value={this.state.actingRating} onChange={e=> this.setState({actingRating : e.target.value})} label={"Acting Rating"} InputProps={{ disableUnderline: true }}/>          
        
          
          <TextField className="mediumField" type={"text"} value={this.state.trailer} onChange={e=> this.setState({trailer : e.target.value})} label={"Trailer"} InputProps={{ disableUnderline: true }}/>
          <TextareaAutosize aria-label="Synopsis" rowsMin={3} placeholder="Synopsis" value={this.state.synopsis} onChange={e=> this.setState({synopsis : e.target.value})} className="textArea"  />
          <TextareaAutosize aria-label="Pros" rowsMin={3} placeholder="Pros" value={this.state.pros} onChange={e=> this.setState({pros : e.target.value})}  className="textArea"/>
          <TextareaAutosize aria-label="Cons" rowsMin={3} placeholder="Cons" value={this.state.cons} onChange={e=> this.setState({cons : e.target.value})}  className="textArea"/>
          <TextareaAutosize aria-label="Cast" rowsMin={3} placeholder="Cast" value={this.state.cast} onChange={e=> this.setState({cast : e.target.value})}  className="textArea"/>
          <TextField className="mediumField" type={"text"} value={this.state.ticketImage} onChange={e=> this.setState({ticketImage : e.target.value})} label={"Ticket Image"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"date"} value={this.state.watchDate} onChange={e=> this.setState({watchDate : e.target.value})} label={"Watch Date"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"text"} value={this.state.placeWatched} onChange={e=> this.setState({placeWatched : e.target.value})} label={"Venue"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"text"} value={this.state.userId} onChange={e=> this.setState({userId : e.target.value})} label={"User Id"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"password"} value={this.state.password} onChange={e=> this.setState({password : e.target.value})} label={"Password"} InputProps={{ disableUnderline: true }}/>

          
          <Button onClick={this.onSubmit} >Submit</Button>
      </FormGroup>
    </FormControl>
    
    </div>
  }
}

export default Movie;
