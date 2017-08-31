import React from 'react';
import DataStore from '../flux/stores/DataStore.js';
import {Link} from 'react-router-dom';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import * as mapStyles from '../googleMapsStyle.json';
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 25.76794931059328, lng: -80.13255963325504 }}
    defaultOptions={{ styles: mapStyles }}
  />
));

class Contact extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      let elementAnimation1 = document.getElementById('map');
      elementAnimation1.classList.add('appear');
      let elementAnimation2 = document.querySelector('.contact__txt-wrap').children[1];
      elementAnimation2.classList.add('appear');
      let elementAnimation3 = document.getElementsByClassName('contact__title')[0];
      elementAnimation3.classList.add('appear');
    }, 1)
  }
  componentWillUnmount(){
    let elementAnimation1 = document.getElementById('map');
    elementAnimation1.classList.remove('appear');
    let elementAnimation2 = document.querySelector('.contact__txt-wrap').children[1];
    elementAnimation2.classList.remove('appear');
    let elementAnimation3 = document.getElementsByClassName('contact__title')[0];
    elementAnimation3.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug("contact");
    return (
      <div className="main__wrap main__wrap-contact">
    <div className="main__content main__content-contact">
      <a className="home__btn home__btn-beige" href="#"></a>
       <Link to="/" className="close-btn"></Link>
       <div id="map">
         <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
       </div>
       <div className="contact__txt-wrap">
           <h2 className="title contact__title">{page.acf.main_greeting}</h2>
           <div dangerouslySetInnerHTML={ {__html: page.acf.contact_info} } />
       </div>
    </div>
</div>
    )
  }
}

export default Contact;
