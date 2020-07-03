import React, { Component } from 'react';
import '../css/card.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName:"",
      userId:"",
      password:""
    };

    this.onSubmit = this.onSubmit.bind(this);
    
    this.onFileChange = this.onFileChange.bind(this);
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
    if(this.state.imageName == ""){
      alert("Image name is empty");
      return;
    }
    var strImage = this.state.image.replace(/^data:image\/[a-z]+;base64,/, "");
    var data ={
      imageName:this.state.imageName,
      image:strImage,
      imageType:this.state.imageType,
      userId:this.state.userId,
      password:this.state.password
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };

  var proxyUrl = 'https://fierce-chamber-21718.herokuapp.com/';
  var url = 'https://api.popcorntales.com/object';

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
  
  async onFileChange(evt){

const file = document.querySelector('#file').files[0];
debugger;
this.setState({
  image:await toBase64(file),
  imageType:file.type
})
  }

  
  render() {
    return <div className="container"> 
      <h3>Add Image</h3>
       <FormControl component="fieldset" className="container">
      <FormGroup>
          <input type="file" id="file" onChange={this.onFileChange} /> 
          <TextField className="smallField" type={"text"} value={this.state.imageName} onChange={e=> this.setState({imageName : e.target.value})} label={"Image Name"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"text"} value={this.state.userId} onChange={e=> this.setState({userId : e.target.value})} label={"User Id"} InputProps={{ disableUnderline: true }}/>
          <TextField className="smallField" type={"password"} value={this.state.password} onChange={e=> this.setState({password : e.target.value})} label={"Password"} InputProps={{ disableUnderline: true }}/>

          
          <Button onClick={this.onSubmit} >Submit</Button>
      </FormGroup>
    </FormControl>
    
    </div>
  }
}

export default Movie;
