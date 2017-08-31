import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';

class TheDen extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      let wrapper = document.querySelector('.main__logo_box');
      let elementAnimation1 = wrapper.getElementsByClassName('big_logo_wrapper')[0];
      elementAnimation1.classList.add('appear')
      let elementAnimation2 = wrapper.getElementsByClassName('city-ul')[0];
      elementAnimation2.classList.add('appear')
      let elementAnimation3 = wrapper.getElementsByClassName('destination')[0];
      elementAnimation3.classList.add('appear')

    }, 1)
  }
  componentWillUnmount(){
    let wrapper = document.querySelector('.main__logo_box');
    let elementAnimation1 = wrapper.getElementsByClassName('big_logo_wrapper')[0];
    elementAnimation1.classList.remove('appear');
    let elementAnimation2 = wrapper.getElementsByClassName('city-ul')[0];
    elementAnimation2.classList.remove('appear');
    let elementAnimation3 = wrapper.getElementsByClassName('destination')[0];
    elementAnimation3.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug("den");
    return (
      <div className="main__wrap">
        <div className="main__content main__content-landing-page">
        <Link to="/" className="close-btn"></Link>
        <div className="main__logo_box">
            <div className="big_logo_wrapper"></div>
            <p className="destination">choose your destination</p>
            <ul className="city-ul">
                <li>{page.acf['city-field-1']}</li>
                <li>{page.acf['city-field-2']}</li>
                <li>{page.acf['city-field-3']}</li>
                <li>{page.acf['city-field-4']}</li>
            </ul>
        </div>
    </div>
</div>
    )
  }
}

export default TheDen;
