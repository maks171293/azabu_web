import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../img/logo.png';
import axios from 'axios';

class Header extends React.Component{
  constructor(props){
    super(props);
    axios
      .get('http://cl-azabu.springs.pw/wp-json/menus/v1/menus/main')
      .then(({ data })=> {
        let menus = data.items;
        this.setState({
          menus
        })
      })
      .catch((err)=> {console.log(err);})
    this.state = {
      menus: []
    }
  }
  hideMobMenuHandler(){
    document.querySelector('#go').checked = false;
    document.querySelector('#nav-icon3').classList.remove('open');
  }
  toggleHamburger(){
    document.querySelector('#nav-icon3').classList.toggle('open');
  }

  render(){
    return  (<header>
      <div className="header-wrap">
            <Link to="/home" className="logo" ><img src={logo}/></Link>
          <div className="social-logo">
              <a href="https://www.facebook.com/azabu/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/azabu/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/channel/azabu"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              <a href="https://vimeo.com/azabu"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
          </div>
          <div id="input-nav-jumbotron">
          <input id="go" type="checkbox"/>
              <label htmlFor="go" className="main_menu">
                  <div className="hamburger-wrap">
                      <div id="nav-icon3" onClick={()=>{this.toggleHamburger()}}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </div>
              </label>
              <div className="menu_list">
                 <ul className="nav responsive__nav">
                          {
                            this.state.menus.map((menu, index) => {
                                let slug = menu.url.split('/');
                                slug = slug[slug.length - 2];
                                if(slug.indexOf('.') === -1){
                                return (
                                  <li key={index}>
                                    <Link
                                      onClick={()=>this.hideMobMenuHandler()}
                                      to={`/${slug}`}>
                                        {menu.title}
                                    </Link>
                                </li>
                                )
                              }else{
                                return (
                                  <li key={index}><Link onClick={()=>this.hideMobMenuHandler()} to="/" >{menu.title}</Link></li>
                                )
                              }
                            })
                          }
                  </ul>

                  <div className="social-logo social-responsive">
                      <a href="https://www.facebook.com/azabu/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="https://www.instagram.com/azabu/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="https://www.youtube.com/channel/azabu"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                      <a href="https://vimeo.com/azabu"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </header>)
  }
}

export default Header;
