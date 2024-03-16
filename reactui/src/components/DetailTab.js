import React, { Suspense, lazy,Component} from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style';

const { Panel } = Collapse; // Destructuring to get Panel component from Collapse

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
      <Collapse accordion="true" defaultActiveKey={['1']}>
        <Panel header="Review" key="1" style={{textAlign:"justify"}}>
        <Suspense>
            <Synopsis synopsis={this.state.synopsis}/>
            </Suspense>
        </Panel>
        <Panel header="Hit and Miss" key="2" style={{textAlign:"justify"}}>
        <Suspense>
             <HitAndMiss pros={this.state.pros} cons={this.state.cons} url={this.state.url}/>
            </Suspense>
        </Panel>
        <Panel header="Parts and Parcel" key="3" style={{textAlign:"justify"}}>
        <Suspense>
        <PartsAndParcel movie={this.state.movie}/>
            </Suspense>
        </Panel>
        <Panel header="Cast and Crew" key="4" style={{textAlign:"justify"}}>
        <Suspense>
            <Cast cast={this.state.cast}/>
            </Suspense>
        </Panel>
        <Panel header="Ticket" key="5" style={{textAlign:"justify"}}>
        <Suspense>
        <Ticket ticketDetails={this.state.movie.ticketDetails} ticketImage={this.state.ticketImage}/>
            </Suspense>
        </Panel>
      </Collapse>
      </div>
  }

}

export default DetailTab;