import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import '../css/card.css';
import Grid from '@material-ui/core/Grid';
class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onOK = this.onOK.bind(this);
      }
      handleFieldChange(evt){
      this.setState({
        field:evt.target.value
      });
      }
      handleOrderChange(evt){
        this.setState({
          sortType:evt.target.value
        });
      }
      onCancel(){
        this.props.close(this.props.data);
      }
      onOK(){
        this.props.close(this.state);
      }
  render() {
    return  <Dialog onClose={(data)=>this.props.close(data)} disableBackdropClick={true} disableEscapeKeyDown={true} aria-labelledby="simple-dialog-title" open={this.props.open}>
    <DialogTitle id="simple-dialog-title">Sort</DialogTitle>
    <div className="filtercontainer">
    <FormControl >
    <FormLabel component="legend">Field</FormLabel>
      <RadioGroup aria-label="movieAttribute" name="movieAttribute" value={this.state.field} onChange={this.handleFieldChange}>
        <FormControlLabel value="timeStamp" control={<Radio />} label="Date Added" />
        <FormControlLabel value="title" control={<Radio />} label="Title" />
        <FormControlLabel value="year" control={<Radio />} label="Year" />
        <FormControlLabel value="rating" control={<Radio />} label="Rating" />
        <FormControlLabel value="language" control={<Radio />} label="Language" />
      </RadioGroup>
    </FormControl>
    <FormControl>
    <FormLabel component="legend">Order</FormLabel>
      <RadioGroup aria-label="order" name="order" value={this.state.sortType} onChange={this.handleOrderChange}>
        <FormControlLabel value="Ascending" control={<Radio />} label="Ascending" />
        <FormControlLabel value="Descending" control={<Radio />} label="Descending" />
      </RadioGroup>
    </FormControl>
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
