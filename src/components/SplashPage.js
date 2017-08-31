import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';

class SplashPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  onChangeInput(event){
    let text = event.target.value;
    this.setState({
      inputValue: text
    })
  }
  componentDidMount(){
    setTimeout(()=>{
      let wrapper = document.querySelector('.main__logo_box');
      let elementAnimation1 = wrapper.getElementsByClassName('big_logo_wrapper')[0];
      elementAnimation1.classList.add('appear')
      let elementAnimation2 = wrapper.getElementsByClassName('city-ul')[0];
      elementAnimation2.classList.add('appear')
      let elementAnimation3 = wrapper.getElementsByClassName('destination')[0];
      elementAnimation3.classList.add('appear')
      let elementAnimation4 = wrapper.getElementsByClassName('widget_wysija_cont')[0];
      elementAnimation4.classList.add('appear')

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
    let elementAnimation4 = wrapper.getElementsByClassName('widget_wysija_cont')[0];
    elementAnimation4.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug("splash");
    return (
      <div className="main__wrap">
        <div className="main__content main__content-landing-page">
        <div className="main__logo_box main__logo_box-splash">
          <Link to="/" className="close-btn"></Link>
            <div className="big_logo_wrapper"></div>
            <div dangerouslySetInnerHTML={ {__html: page.acf.destination} }></div>
            <ul className="city-ul">
                <li>{page.acf['city-field-1']}</li>
                <li>{page.acf['city-field-2']}</li>
                <li>{page.acf['city-field-3']}</li>
                <li>{page.acf['city-field-4']}</li>
            </ul>
            <div className="widget_wysija_cont html_wysija">
              <div id="msg-form-wysija-html598c696191ee0-2" className="wysija-msg ajax"></div>
            <form id="form-wysija-html598c696191ee0-2" method="post" action="http://cl-azabu.springs.pw/splash" className="widget_wysija html_wysija">
                    <p className="wysija-paragraph">
                        <input type="text" name="wysija[user][email]" className="wysija-input validate[required,custom[email]]" title="" onChange={(event)=>this.onChangeInput(event)} placeholder="enter email for updates" value={this.state.inputValue} />
                        <input className="wysija-submit wysija-submit-field" type="submit" value="Go" />
                        <span className="abs-req">
                {/* <input type="text" name="wysija[user][abs][email]" className="wysija-input validated[abs][email]" value="lalalal@gmail.com" /> */}
            </span>
                    </p>
                    <input type="hidden" name="form_id" value="2" />
                    <input type="hidden" name="action" value="save" />
                    <input type="hidden" name="controller" value="subscribers" />
                    <input type="hidden" value="1" name="wysija-page" />
                    <input type="hidden" name="wysija[user_list][list_ids]" value="1" />
                </form></div>
        </div>
          </div>
      </div>


    )
  }
}

export default SplashPage;
