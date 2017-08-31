import React from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../img/logo2.png';

class Header extends React.Component{
  render(){
    return  (
      <footer>
            <div className="footer-wrap">
                <Link to="/splash" className="main__link link-email">enter email</Link>
                <a className="main__link link-credits" href="#">credits</a>
                <Link to="/" className="link-logo"><img src={logo2}/></Link>
            </div>
      </footer>
    )
  }
}

export default Header;
