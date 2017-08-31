import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';

class Press extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      let elementAnimation1 = document.getElementsByClassName('testt')[0];
      elementAnimation1.classList.add('appear')
    }, 1)
  }
  componentWillUnmount(){
    let elementAnimation1 = document.getElementsByClassName('testt')[0];
    elementAnimation1.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug("press");
    return (
      <div className="main__wrap main__wrap-press">

<div className="main__content main__content-press">

   <Link to="/" className="home__btn home__btn-beige" ></Link>
<Link to="/" className="close-btn"></Link>
<div className="title__wrap">
  <h2 className="press__title">press</h2>
  <div className="michelin_block"></div>
</div>
<div className="testt">
  <div className="press__wrap">
      <ul className="press__ul press__ul-gs">
          <li>{page.acf.press_title_1}</li>
          <li><a>{page.acf.post_name_1}</a></li>
      </ul>
      <ul className="press__ul press__ul-gs">
          <li>{page.acf.press_title_2}</li>
          <li><a>{page.acf.post_name_2}</a></li>
      </ul>
      <ul className="press__ul press__ul-gs">
          <li>{page.acf.press_title_3}</li>
          <li><a>{page.acf.post_name_3}</a></li>
      </ul>
  </div>
  <div className="press__wrap press__wrap-ny">
      <ul className="press__ul">
          <li>{page.acf.press_title_4}</li>
          <li>{page.acf.post_name_4}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_5}</li>
          <li>{page.acf.post_name_5}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_6}</li>
          <li>{page.acf.post_name_6}</li>
      </ul>
  </div>
  <div className="press__wrap press__wrap-ny">
      <ul className="press__ul">
          <li>{page.acf.press_title_7}</li>
          <li>{page.acf.post_name_7}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_8}</li>
          <li>{page.acf.post_name_8}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_9}</li>
          <li>{page.acf.post_name_9}</li>
      </ul>
  </div>
  <div className="press__wrap press__wrap-eater">
      <ul className="press__ul">
          <li>{page.acf.press_title_10}</li>
          <li>{page.acf.post_name_10}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_11}</li>
          <li>{page.acf.post_name_11}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_12}</li>
          <li>{page.acf.post_name_12}</li>
      </ul>
  </div>
  <div className="press__wrap">
      <ul className="press__ul">
          <li>{page.acf.press_title_13}</li>
          <li>{page.acf.post_name_13}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_14}</li>
          <li>{page.acf.post_name_14}</li>
      </ul>
      <ul className="press__ul">
          <li>{page.acf.press_title_15}</li>
          <li>{page.acf.post_name_15}</li>
      </ul>
  </div>
</div>

<a href="#" className="arrow arrow-left arrow-left-press"></a>
<a href="#" className="arrow arrow-right arrow-right-press"></a></div>

      </div>
    )
  }
}

export default Press;
