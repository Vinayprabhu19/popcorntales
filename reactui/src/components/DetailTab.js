import React from 'react';
import LazyLoad from 'react-lazy-load';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Spinner from 'react-bootstrap/Spinner'
export default function FullWidthTabs(props) {
  const pros = props.movie.review.pros;
  const cons = props.movie.review.cons;
  const url = "https://api.popcorntales.com/image?object=Graph/"+props.movie.title+".png&width=500&height=500";
  const cast = props.movie.cast;
  const ticketImage = "https://api.popcorntales.com/image?object="+props.movie.ticketDetails.ticketImage;
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
        <div >
          { props.movie.review.synopsis.split("\n").map(para =>(
                <p key={para}>{para}</p>
            ))
          }
        </div>
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
              <h4>What worked well?</h4>
              {
                  pros.map(pro=>(
                      <div className="flexbox-container" key={pro}>
                          <div><BeenhereIcon className="checkIcon" /></div>
                          <p className="pointerText">{pro}</p>
                      </div>
                  ))
              }
              <h4 className="subsection">What didn't work well?</h4>
              {
                  cons.map(con=>(
                      <div className="flexbox-container" key={con}>
                          <div><CancelIcon className="cancelIcon" /></div>
                          <p className="pointerText">{con}</p>
                      </div>
                  ))
              }
              <Grid container justify = "center" className="graphContainer">
                <LazyLoad>
              <img src={url} className="graphImage" />
              </LazyLoad>
              </Grid>
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
          <h5 className="Ticket">Date Watched : {props.movie.ticketDetails.watchDate}</h5>
          <h5 className="Ticket">Place Watched : {props.movie.ticketDetails.placeWatched}</h5>
          <Grid container justify = "center">
          <Paper elevation={20} id="ticket-container">

          <LazyLoad>
          <img src={ticketImage} className="ticketImage" alt={"Ticket"}></img>
          </LazyLoad>
          </Paper>
          </Grid>
        </div>
        </AccordionDetails>
    </Accordion>
    </div>
  );
}