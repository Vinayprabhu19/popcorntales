import React from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Rating from '@material-ui/lab/Rating';
export default function FullWidthTabs(props) {
  const pros = props.movie.review.pros;
  const cons = props.movie.review.cons;
  const url = "https://api.popcorntales.com/image?object=Graph/"+props.movie.title+".png&width=400&height=400";
  const cast = props.movie.cast;
  const ticketImage = "https://api.popcorntales.com/image?object="+props.movie.ticketDetails.ticketImage;
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
  return (
    <div className="movie-detail">
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Review</h5>
        </AccordionSummary>
        <AccordionDetails className="review-component" >
          <LazyLoad>
        <div >
          { props.movie.review.synopsis.split("\n").map(para =>(
            <div>{ ReactHtmlParser("<p>"+para+"</p>") }</div>
            ))
          }
        </div>
        </LazyLoad>
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Hit and Miss</h5>
        </AccordionSummary>
        <AccordionDetails>
        <div className="review-component">
        <LazyLoad>
          <>
              <h4 className="subHeader">What worked well?</h4>
              {
                  pros.map(pro=>(
                      <div className="flexbox-container" key={pro}>
                          <div><BeenhereIcon className="checkIcon" /></div>
                          <div className='pointerText'>{ ReactHtmlParser("<p>"+pro+"</p>") }</div>
                      </div>
                  ))
              }
              <h4 className="subHeader">What didn't work well?</h4>
              {
                  cons.map(con=>(
                      <div className="flexbox-container" key={con}>
                          <div><CancelIcon className="cancelIcon" /></div>
                          <div className='pointerText'>{ ReactHtmlParser("<p>"+con+"</p>") }</div>
                      </div>
                  ))
              }
              </>
              </LazyLoad>
              <div className="d-flex justify-content-center">
                <LazyLoad>
                  <Paper elevation={10}>
              <img src={url} className="graphImage" />
              </Paper>
              </LazyLoad>
              </div>
          </div>
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Parts and Parcel</h5>
        </AccordionSummary>
        <AccordionDetails>
        <div className="review-component">
             <div>
              <h5>Script - {props.movie.scriptRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.scriptRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
             <h5>Acting - {props.movie.actingRating}/5</h5>
            {/* {actingRating} */}
            <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.actingRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
              <h5>Direction - {props.movie.directionRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.directionRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
              <h5>Dialogues - {props.movie.dialoguesRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.dialoguesRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
              <h5>Visuals - {props.movie.cinematographyRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.cinematographyRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
              <h5>Editing - {props.movie.editingRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.editingRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
            <div>
              <h5>Music - {props.movie.musicRating}/5</h5>
              <Rating
              name="customized-icons"
              defaultValue={Math.round(props.movie.musicRating)}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer} readOnly={true}
            />
            </div>
          </div>
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Cast and Crew</h5>
        </AccordionSummary>
        <AccordionDetails>
        <div className="cast-component">
            <div>
            {
                cast.map(c=>(
                    <div className="flexbox-container" key={c}>
                        <div><LocalMoviesIcon className="movieIcon" /></div>
                        <h6 className="bullets">{c}</h6>
                    </div>
                ))
            }
            </div>
        </div>
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 className="centerText">Ticket</h5>
        </AccordionSummary>
        <AccordionDetails>
        <div id="ticket-component">
          <h5 className="centerAligned">Date Watched : {props.movie.ticketDetails.watchDate}</h5>
          <h5 className="centerAligned">Place Watched : {props.movie.ticketDetails.placeWatched}</h5>
          <div className="d-flex justify-content-center">
            <Paper elevation={20} id="ticket-container">
            <LazyLoad>
            <img src={ticketImage} className="ticketImage" alt={"Ticket"}></img>
            </LazyLoad>
            </Paper>
          </div>
        </div>
        </AccordionDetails>
    </Accordion>
    </div>
  );
}