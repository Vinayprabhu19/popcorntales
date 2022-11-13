import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
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
    return  <Dialog onClose={(data)=>this.props.close(data)} disableEscapeKeyDown={true} aria-labelledby="simple-dialog-title" open={this.props.open}>
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
    <Grid container  justifyContent="center" id="starPhoto">
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
