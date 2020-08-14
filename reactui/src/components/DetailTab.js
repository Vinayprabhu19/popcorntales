import React, { Suspense, lazy,PureComponent} from 'react';
import LazyLoad from 'react-lazy-load';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const HitAndMiss = lazy(() => import('./HitAndMiss'));
const Ticket = lazy(() => import('./Ticket'));
const PartsAndParcel = lazy(() => import('./PartsAndParcel'));
const Cast = lazy(() => import('./Cast'));
const Synopsis = lazy(() => import('./Synopsis'));
class DetailTab extends PureComponent {
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
            <Synopsis synopsis={this.state.synopsis}/>
          </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} >
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