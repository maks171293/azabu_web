import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';

class About extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      let elementAnimation1 = document.getElementsByClassName('video__box')[0];
      elementAnimation1.classList.add('appear')
      let elementAnimation2 = document.getElementsByClassName('about__txt-wrap')[0];
      elementAnimation2.classList.add('appear')
    }, 1)
  }
  componentWillUnmount(){
    let elementAnimation1 = document.getElementsByClassName('video__box')[0];
    elementAnimation1.classList.remove('appear');
    let elementAnimation2 = document.getElementsByClassName('about__txt-wrap')[0];
    elementAnimation2.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug('about');
    return (
        <div className="main__wrap main__wrap-about">
        <div className="main__content main__content-about">
            <Link className="home__btn home__btn-beige" to="/"></Link>
            <Link to="/" className="close-btn"></Link>
       <div className="video__wrap">
           <div className="video__box">
               <a href="#" className="play__btn"></a>
           </div>
            <div className="about__txt-wrap">
                <h2 className="about__title">{page.acf.title}</h2>
                <div dangerouslySetInnerHTML={ {__html: page.acf.text} }></div>
            </div>
      </div>
      </div>
      </div>
    )
  }
}

export default About;
