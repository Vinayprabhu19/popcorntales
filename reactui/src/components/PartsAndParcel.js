import React, { Component } from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Typography from "@mui/material/Typography";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
class PartsAndParcel extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(this.props) )
    return false;
    return true;
  }
  render() {
    return <div className="review-component">
    <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Script - {this.props.movie.scriptRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.scriptRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
    <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Acting - {this.props.movie.actingRating}/5</Typography>
   {/* {actingRating} */}
   <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.actingRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Direction - {this.props.movie.directionRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.directionRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Dialogues - {this.props.movie.dialoguesRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.dialoguesRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Visuals - {this.props.movie.cinematographyRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.cinematographyRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Editing - {this.props.movie.editingRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.editingRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>Music - {this.props.movie.musicRating}/5</Typography>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.musicRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
 </div>
  }

}

export default PartsAndParcel;