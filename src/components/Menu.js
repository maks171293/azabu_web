import React from 'react';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DataStore from '../flux/stores/DataStore.js';

class Menu extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      let elementAnimation1 = document.getElementsByClassName('menu__txt-wrap')[0];
      elementAnimation1.classList.add('appear')

    }, 1)
  }
  componentWillUnmount(){
    let elementAnimation1 = document.getElementsByClassName('menu__txt-wrap')[0];
    elementAnimation1.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug('menu');
    return (
      <div className="main__wrap main__wrap-menu">
      <div className="main__content main__content-menu">
      <Link to="/" className="close-btn"></Link>
      <div className="menu__imgBox" style={{backgroundImage: `url(${page.acf.image_background})`}}></div>
      <Link className="home__btn" to="/"></Link>
      <div className="menu__wrap" key="menu-fade">
         <div className="menu__txt-wrap">
             <h2>menus</h2>
             <div dangerouslySetInnerHTML={ {__html: page.acf.description} } />
             <ul className="menu__ul">
                 <li><a href={page.acf.lunch_menu} download>lunch</a></li>
                 <li><a href={page.acf.dinner_menu} download>dinner</a></li>
                 <li><a href={page.acf.brunch_menu} download>happy hour</a></li>
                 <li><a href={page.acf.happy_hours_menu} download>brunch</a></li>
                 <li><a href={page.acf.kids_menu} download>kids menu</a></li>
                 <li><a href={page.acf.drinks_menu} download>drinks</a></li>
             </ul>
             <h2>hours</h2>
             <div className="menus__hours">
               <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf['lunch-time']} } />
               <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf['dinner-time']} } />
               <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf.brunch_time} } />
               <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf.happy_hours} } />
            </div>
          </div>
      </div>
    </div>
    </div>
    )
  }
}

export default Menu;
