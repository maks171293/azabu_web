import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Submenu extends React.Component{
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
  render(){
    return(
      <div className="sub_menu">
          <Link className="home__btn home__btn-beige" to="/"></Link>
           <ul className="nav submenu__nav">
                    {/* <li><Link to="/index.html">home</Link></li>
                    <li><Link to="/menu.html">menu</Link></li>
                    <li><Link to="/gallery.html">gallery</Link></li>
                    <li><Link to="/preservations.html">reservations</Link></li>
                    <li><Link to="/events.html">events</Link></li>
                    <li><Link to="/press.html">press</Link></li>
                    <li><Link to="/about.html">about</Link></li>
                    <li><Link to="/contact.html">contact</Link></li>
                    <li><Link to="/lp.html">the den</Link></li> */}
                    {
                      this.state.menus.map((menu, index) => {
                          let slug = menu.url.split('/');
                          slug = slug[slug.length - 2];
                          if(slug.indexOf('.') === -1){
                          return (
                            <li key={index} >
                              <Link
                                to={`/${slug}`}>
                                  {menu.title}
                              </Link>
                          </li>
                          )
                        }else{
                          return (
                            <li key={index}><Link to="/" >{menu.title}</Link></li>
                          )
                        }
                      })
                    }
            </ul>
       </div>
    )
  }
}
