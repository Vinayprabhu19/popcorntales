import React, { Suspense, lazy,Component} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const HitAndMiss = lazy(() => import('./HitAndMiss'));
const Ticket = lazy(() => import('./Ticket'));
const PartsAndParcel = lazy(() => import('./PartsAndParcel'));
const Cast = lazy(() => import('./Cast'));
const Synopsis = lazy(() => import('./Synopsis'));
class DetailTab extends Component {
  constructor(props){
    super(props);
    var pros = this.props.movie.review.pros;
    var cons = this.props.movie.review.cons;
    var url = "https://api.popcorntales.com/image?object=Graph/"+this.props.movie.title+".png&width=400&height=400";
    var cast = this.props.movie.cast;
    var ticketImage = "https://api.popcorntales.com/image?object="+this.props.movie.ticketDetails.ticketImage;
    this.state={
      pros:pros,
      cons:cons,
      url:url,
      cast:cast,
      ticketImage:ticketImage,
      synopsis:this.props.movie.review.synopsis,
      movie:props.movie
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(nextProps) )
    return false;
    return true;
  }


  render(){
    return <div className="movie-detail">
        <Accordion defaultExpanded={true} TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <h5 className="centerText">Review</h5>
          </AccordionSummary>
          <AccordionDetails className="review-component" >
          <Suspense>
            <Synopsis synopsis={this.state.synopsis}/>
            </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <HitAndMiss pros={this.state.pros} cons={this.state.cons} url={this.state.url}/>
            </Suspense>
          </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5 className="centerText">Parts and Parcel</h5>
          </AccordionSummary>
          <AccordionDetails>
          <Suspense fallback={<div>Loading...</div>}>
            <PartsAndParcel movie={this.state.movie}/>
            </Suspense>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5 className="centerText">Cast and Crew</h5>
          </AccordionSummary>
          <AccordionDetails>
          <Suspense fallback={<div>Loading...</div>}>
          <Cast cast={this.state.cast}/>
          </Suspense>
          </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5 className="centerText">Ticket</h5>
          </AccordionSummary>
          <AccordionDetails>
          <Suspense fallback={<div>Loading...</div>}>
              <Ticket ticketDetails={this.state.movie.ticketDetails} ticketImage={this.state.ticketImage}/>
              </Suspense>
          </AccordionDetails>
      </Accordion>
      </div>
  }

}

export default DetailTab;