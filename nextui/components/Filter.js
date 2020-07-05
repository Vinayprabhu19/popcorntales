import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
class Sort extends Component {
    constructor(props) {
        super(props);
        var year = props.data.year;
        var language = props.data.language;
        var rating =props.data.rating;
        var filter={
          "year":year,
          "language":language,
          "rating":rating
        };
        this.state = {filter:filter,filterData:props.filterData};
        this.onCancel = this.onCancel.bind(this);
        this.onOK = this.onOK.bind(this);
      }
      onCancel(){
        debugger;
        this.props.close(null);
      }
      onOK(){
        this.props.close(this.state);
      }
  render() {
    return  <Dialog maxWidth={'sm'} fullWidth={true} onClose={(data)=>this.props.close(data)} disableBackdropClick={true} disableEscapeKeyDown={true} aria-labelledby="simple-dialog-title" open={this.props.open}>
    <DialogTitle id="simple-dialog-title">Filter</DialogTitle>
    <div className="filtercontainer">
    <h4 className="item">Language</h4>
    <Select
          className="item"
          variant="outlined"
          value={this.state.filter.language}
          onChange={e=>{
            var filter = this.state.filter;
            filter.language = e.target.value;
            this.setState({filter : filter})}}
        >
          {
            this.state.filterData.languages.map(language=>{
            return <MenuItem value={language} key={language}>{language}</MenuItem>
            })
          }
        </Select>
    <h4 className="item">Year</h4>
    <Select
          className="item"
          variant="outlined"
          value={this.state.filter.year}
          onChange={e=>{
            var filter = this.state.filter;
            filter.year = e.target.value;
            this.setState({filter : filter})}}
        >
          {
            this.state.filterData.years.map(year=>{
            return <MenuItem value={year} key={year}>{year}</MenuItem>
            })
          }
    </Select>
    <h4 className="item">Rating</h4>
    <Slider
      className="item"
      value={this.state.filter.rating}
      aria-labelledby="discrete-slider-small-steps"
      step={0.25}
      min={0.00}
      max={5.00}
      onChange={(e,v)=>{
        var filter = this.state.filter;
        filter.rating = v;
        this.setState({filter : filter})
      }}
      valueLabelDisplay="auto"
    />
    <Grid container justify = "center" id="starPhoto">
    <ButtonGroup variant="text" className="buttonGroup" color="primary" aria-label="text primary button group">
        <Button onClick={this.onOK}>OK</Button>
        <Button onClick={this.onCancel}>Cancel</Button>
      </ButtonGroup>
    </Grid>
    
  </div>
  </Dialog>
  }
}

export default Sort;
