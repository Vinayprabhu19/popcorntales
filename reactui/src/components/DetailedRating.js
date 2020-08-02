import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import "../css/Detail.css";

export default function DetailedRating(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const stars = (starCount) => {
    if(starCount == undefined)
      return;
    const value = starCount;
    return (
          <Rating name="customized-color" defaultValue={value} precision={0.1} value={value}/>
    );
  }

  const actingRating = stars(props.selectedMovie.actingRating);
  const directionRating = stars(props.selectedMovie.directionRating);
  const dialoguesRating = stars(props.selectedMovie.dialoguesRating);
  const scriptRating = stars(props.selectedMovie.scriptRating);
  const editingRating = stars(props.selectedMovie.editingRating);
  const cinematographyRating = stars(props.selectedMovie.cinematographyRating);
  const musicRating = stars(props.selectedMovie.musicRating);
  return ( <div>
        <InfoIcon onClick={handleClick} className="infoBtn"/>
      <Menu
        id="rating-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}> 
          <div>
  <h5>Script - {props.selectedMovie.scriptRating}/5</h5>
            {scriptRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Acting - {props.selectedMovie.actingRating}/5</h5>
            {actingRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Direction - {props.selectedMovie.directionRating}/5</h5>
            {directionRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Dialogues - {props.selectedMovie.dialoguesRating}/5</h5>
            {dialoguesRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Visuals - {props.selectedMovie.cinematographyRating}/5</h5>
            {cinematographyRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Editing - {props.selectedMovie.editingRating}/5</h5>
            {editingRating}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}> 
          <div>
            <h5>Music - {props.selectedMovie.musicRating}/5</h5>
            {musicRating}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}