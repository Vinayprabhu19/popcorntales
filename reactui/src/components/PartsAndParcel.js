import React, { Component } from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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
     <h5>Script - {this.props.movie.scriptRating}/5</h5>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.scriptRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
    <h5>Acting - {this.props.movie.actingRating}/5</h5>
   {/* {actingRating} */}
   <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.actingRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <h5>Direction - {this.props.movie.directionRating}/5</h5>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.directionRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <h5>Dialogues - {this.props.movie.dialoguesRating}/5</h5>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.dialoguesRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <h5>Visuals - {this.props.movie.cinematographyRating}/5</h5>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.cinematographyRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <h5>Editing - {this.props.movie.editingRating}/5</h5>
     <Rating
     name="customized-icons"
     defaultValue={Math.round(this.props.movie.editingRating)}
     getLabelText={(value) => customIcons[value].label}
     IconContainerComponent={IconContainer} readOnly={true}
   />
   </div>
   <div>
     <h5>Music - {this.props.movie.musicRating}/5</h5>
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