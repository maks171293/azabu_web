import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';
import moment from 'moment';

let eventWrapStyle = {
    width: '84%',
    overflow: 'hidden',
}


class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeEvents: 0,
      currentWidth: 0
    }
  }
  componentDidMount(){
    document.querySelector(`[data-event-index='0']`).style.position = 'relative';
    document.querySelector(`[data-event-index='1']`).style.position = 'relative';
    document.querySelector(`[data-event-index='2']`).style.position = 'relative';
    document.querySelector(`[data-event-index='0']`).style.left = '0%';
    document.querySelector(`[data-event-index='1']`).style.left = '0%';
    document.querySelector(`[data-event-index='2']`).style.left = '0%';
    document.querySelector(`[data-event-index='0']`).style.display = 'block';
    document.querySelector(`[data-event-index='1']`).style.display = 'block';
    document.querySelector(`[data-event-index='2']`).style.display = 'block';

    document.querySelector(`[data-event-index='1']`).style.marginLeft = '25px';
    document.querySelector(`[data-event-index='1']`).style.marginRight = '25px';

    setTimeout(()=>{
      let elementAnimation1 = document.getElementsByClassName('events__content')[0];
      elementAnimation1.classList.add('appear');
    }, 1)
  }
  componentWillUnmount(){
    let elementAnimation1 = document.getElementsByClassName('events__content')[0];
    elementAnimation1.classList.remove('appear');
  }
  rightEventsArrowClick(event){
    event.preventDefault();
    let posts = DataStore.getAllPosts();
    let nextEvents = this.state.activeEvents+3;
    let items = document.querySelectorAll('[data-event-index]').length -1;
    if(nextEvents > items){
      return;
    }
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.opacity = '0';
    document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.opacity = '0';
    document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.opacity = '0';
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.left = '-100%';
    document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.left = '-100%';
    document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.left = '-100%';

    document.querySelector(`[data-event-index='${nextEvents}']`).style.left = '0%';
    if(document.querySelector(`[data-event-index='${nextEvents+1}']`)){document.querySelector(`[data-event-index='${nextEvents+1}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.marginLeft = '25px';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.marginRight = '25px';}
    if(document.querySelector(`[data-event-index='${nextEvents+2}']`)){document.querySelector(`[data-event-index='${nextEvents+2}']`).style.left = '0%';}
    document.querySelector(`[data-event-index='${nextEvents}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents}']`).style.opacity = '1';
    if(document.querySelector(`[data-event-index='${nextEvents+1}']`)){
      document.querySelector(`[data-event-index='${nextEvents+1}']`).style.position = 'relative';
      document.querySelector(`[data-event-index='${nextEvents+1}']`).style.opacity = '1';
    }
    if(document.querySelector(`[data-event-index='${nextEvents+2}']`)){
      document.querySelector(`[data-event-index='${nextEvents+2}']`).style.position = 'relative';
      document.querySelector(`[data-event-index='${nextEvents+2}']`).style.opacity = '1';
    }
    this.setState({
      activeEvents: this.state.activeEvents+3
    })
  }
  leftEventsArrowClick(event){
    event.preventDefault();
    let nextEvents = this.state.activeEvents-3;
    if(nextEvents < 0){
      return;
    }
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.opacity = '0';
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`)){
      document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.position = 'absolute';
      document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.marginLeft = '25px';
      document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.marginRight = '25px';
      document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.opacity = '0';}
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`)){
      document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.position = 'absolute';
      document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.opacity = '0';
    }
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.left = '100%';
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.left = '100%';}
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.left = '100%';}
    document.querySelector(`[data-event-index='${nextEvents}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents+2}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents+2}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents}']`).style.opacity = '1';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.opacity = '1';
    document.querySelector(`[data-event-index='${nextEvents+2}']`).style.opacity = '1';
    this.setState({
      activeEvents: this.state.activeEvents-3
    })
  }
  render(){
    let posts = DataStore.getAllPosts();
    return (
      <div className="main__wrap main__wrap-events">
       <div className="main__content main__content-events">
        <Link className="home__btn home__btn-beige" to="/"></Link>
        <Link to="/" className="close-btn"></Link>
        <div className="events__content">
            <a onClick={(event)=>this.leftEventsArrowClick(event)} href="#" style={{zIndex: '5'}}  className="arrow arrow-left arrow-left-pos"></a>
            <div style={{width: '84%', overflowX: 'hidden', justifyContent: 'flex-start'}} className="events__wrap">
              {
                posts.map((post, index)=>{
                  return(
                    <div key={index} data-event-index={index} style={{backgroundImage: `url(${post.acf.thumbnail})`, transition: 'left .7s ease', left: '100%', position: 'absolute'}} className="events__block">
                        <p className="events__txt">{post.title.rendered}</p>
                        <p className="event__info">{moment(post.date).format('YYYY-MM-DD/h:mm a')}, {post.title.rendered}</p>
                    </div>
                  )
                })
              }

            </div>
            <a onClick={(event)=>this.rightEventsArrowClick(event)} href="#" style={{zIndex: '5'}} className="arrow arrow-right arrow-right-pos"></a>
        </div>
    </div>
    </div>

    )
  }
}

export default Events;
