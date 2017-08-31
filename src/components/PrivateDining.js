import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';

class PrivateDining extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeGallery: 'gallery_1',
      activeImageIndex: 0
    }
  }
  componentDidMount(){
    let index = this.state.activeImageIndex;
    document.querySelector(`[data-dining-index='${index}']`).style.left = '0';
  }
  changeCityHandler(gallery, event){
    event.preventDefault();
    this.setState({
      activeGallery: gallery
    });
  }
  buttonLeftClick(event){
    event.preventDefault();
    let currentIndex = this.state.activeImageIndex;
    let nextIndex = this.state.activeImageIndex - 1;
    if(currentIndex === 0){
      return;
    }
    document.querySelector(`[data-dining-index='${currentIndex}']`).style.left = '100%';
    document.querySelector(`[data-dining-index='${nextIndex}']`).style.left = '0';
    this.setState({
      activeImageIndex: nextIndex
    })
  }
  buttonRightClick(event){
    event.preventDefault();
    let currentIndex = this.state.activeImageIndex;
    let nextIndex = this.state.activeImageIndex + 1;
    let page = DataStore.getPageBySlug("private-dining");
    if(currentIndex === page.acf[this.state.activeGallery].length-1){
      return;
    }
    document.querySelector(`[data-dining-index='${currentIndex}']`).style.left = '-100%';
    document.querySelector(`[data-dining-index='${nextIndex}']`).style.left = '0';
    this.setState({
      activeImageIndex: nextIndex
    })
  }
  render(){
    let page = DataStore.getPageBySlug("private-dining");
    return (
      <div className="main__wrap main__wrap-private">
        <div className="main__content main__content-private">
            <Link to="/" className="close-btn"></Link>
            <div className="links_wrap private__links_wrap">
            <h2 className="title private__title">private dining</h2>
            <ul className="private__ul">
                <li><a onClick={(event)=>this.changeCityHandler('gallery_1', event)} href="">{page.acf['city-field-1']}</a></li>
                <li><a onClick={(event)=>this.changeCityHandler('gallery_2', event)} href="">{page.acf['city-field-2']}</a></li>
                <li><a onClick={(event)=>this.changeCityHandler('gallery_3', event)} href="">{page.acf['city-field-3']}</a></li>
                <li><a onClick={(event)=>this.changeCityHandler('gallery_4', event)} href="">{page.acf['city-field-4']}</a></li>
                <li><a onClick={(event)=>this.changeCityHandler('gallery_5', event)} href="#">{page.acf['city-field-5']}</a></li>
            </ul>
            </div>
            <div style={{position: 'relative', overflow: 'hidden', width: '100%', height: '100%'}}>
            {
              page.acf[this.state.activeGallery].map((image, index)=>{
                return (<div key={index} data-dining-index={index} style={{backgroundImage: `url(${image.guid})`, transition: 'all ease .7s', width: '100%', position: 'absolute', left: '100%' }} className="private__imgBox">
                </div>)
              })
            }
            <a onClick={(event)=>this.buttonLeftClick(event)} href="#" className="arrow arrow-left"></a>
            <a onClick={(event)=>this.buttonRightClick(event)} href="#" className="arrow arrow-right"></a>
            </div>
          </div>
        </div>
    )
  }
}

export default PrivateDining;
