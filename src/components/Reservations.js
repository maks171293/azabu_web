import React from 'react';
import DataStore from '../flux/stores/DataStore.js';
import {Link} from 'react-router-dom';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import TimePicker from 'rc-time-picker';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton';
import 'rc-time-picker/assets/index.css';
import 'react-day-picker/lib/style.css';
const DAY_FORMAT = 'DD/MM';
require('./styles.css');


class Reservations extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: null,
      time: '',
      party: ''
    }
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeTimeHandler = this.changeTimeHandler.bind(this);
    this.changePartyHandler = this.changePartyHandler.bind(this);
  }
  changeDateHandler(date){
    this.setState({
      date
    })
  }
  changeTimeHandler(time){
    this.setState({
      time
    })
  }
  changePartyHandler(event){
    let party = event.target.value
    this.setState({
      party
    })
  }
  componentDidMount(){
    setTimeout(()=>{
      let wrapper = document.querySelector('.main__wrap-reserve');
      let elementAnimation1 = wrapper.getElementsByClassName('date')[0];
      elementAnimation1.classList.add('appear')
      let elementAnimation2 = wrapper.getElementsByClassName('time')[0];
      elementAnimation2.classList.add('appear')
      let elementAnimation3 = wrapper.getElementsByClassName('party')[0];
      elementAnimation3.classList.add('appear')
      let elementAnimation4 = wrapper.getElementsByClassName('submit_button')[0];
      elementAnimation4.classList.add('appear')

    }, 1)
  }
  componentWillUnmount(){
    let wrapper = document.querySelector('.main__wrap-reserve');
    let elementAnimation1 = wrapper.getElementsByClassName('date')[0];
    elementAnimation1.classList.remove('appear');
    let elementAnimation2 = wrapper.getElementsByClassName('time')[0];
    elementAnimation2.classList.remove('appear');
    let elementAnimation3 = wrapper.getElementsByClassName('party')[0];
    elementAnimation3.classList.remove('appear');
    let elementAnimation4 = wrapper.getElementsByClassName('submit_button')[0];
    elementAnimation4.classList.remove('appear');
  }
  render(){
    let page = DataStore.getPageBySlug('reservations');
    // let formattedDate = this.state.date ? moment(this.state.date).format(DAY_FORMAT) : "";
    const formattedDate = (date)=>{
      return moment(date).format(DAY_FORMAT);
    }
    return (
    <div className="main__wrap main__wrap-reserve">
      <div className="main__content main__content-pres">
        <Link to="/" className="close-btn"></Link>
        <div role="form" className="wpcf7" id="wpcf7-f274-o1" dir="ltr" lang="en-US">
          <div className="screen-reader-response"></div>
          <form action="http://cl-azabu.springs.pw/reservations/" method="post" className="wpcf7-form" noValidate="novalidate">
          <div style={{display: 'none'}}>
            <input name="_wpcf7" value="274" type="hidden"/>
            <input name="_wpcf7_version" value="4.8.1" type="hidden"/>
            <input name="_wpcf7_locale" value="en_US" type="hidden"/>
            <input name="_wpcf7_unit_tag" value="wpcf7-f274-o1" type="hidden"/>
            <input name="_wpcf7_container_post" value="0" type="hidden"/>
            <input name="_wpcf7_nonce" value="fc0d8b5f82" type="hidden"/>
          </div>
          <div className="rtb-booking-form">
            <input name="action" value="booking_request" type="hidden"/><p></p>
            <fieldset className="reservation">
              <legend> Reservations </legend>
              <div className="reserve__wrap">
                <div className="rtb-text date">
                  <label htmlFor="rtb-date">choose a Date </label><br/>
                  <span className="wpcf7-form-control-wrap text-119">
                    <DatePicker
                      name="text-119"
                      placeholder="6 / 9"
                      defaultDate={new Date()}
                      formatDate={formattedDate}
                      onChange={this.changeDateHandler}
                      id="rtb-date"
                      dialogContainerStyle={{marginTop: '-40px'}}
                      aria-required="true" aria-invalid="false"
                      textFieldStyle={{backgroundColor: 'transparent'}}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required datepicker picker__input picker__input-date "/>
                    </span><p></p>
                    <p><input name="rtb-date" value="2017/07/18" type="hidden" />
                  </p></div>
                  <div className="rtb-text time">
                    <label htmlFor="rtb-time"> choose your Time </label><br/>
                    <span className="wpcf7-form-control-wrap text-553">
                      </span><br/>
                      <TimePicker
                        name="text-553"
                        placeholder="12 PM"
                        defaultTime={new Date()}
                        dialogBodyStyle={{marginTop: '-70px'}}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required timepicker picker__input picker__input-time"
                        id="rtb-time"
                        aria-required="true"
                        aria-invalid="false"
                        onChange={this.changeTimeHandler}
                      />
                      <input name="rtb-time" type="hidden" />
                    </div>
                    <div className="rtb-select party">
                      <label htmlFor="rtb-party"> Party size </label><p></p>
                      <div className="select__wrap">
                        <span className="wpcf7-form-control-wrap Party">
                          <select style={{paddingTop: '0px'}} name="Party" onChange={()=>{this.changePartyHandler()}} className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" id="rtb-party" aria-required="true" aria-invalid="false">
                            <option value="2 &nbsp; people">2 &nbsp; people</option>
                            <option value="3 &nbsp; people">3 &nbsp; people</option>
                            <option value="4 &nbsp; people">4 &nbsp; people</option>
                            <option value="5 &nbsp; people">5 &nbsp; people</option>
                            <option value="6 &nbsp; people">6 &nbsp; people</option>
                            <option value="7 &nbsp; people">7 &nbsp; people</option>
                            <option value="8 &nbsp; people">8 &nbsp; people</option>
                            <option value="9 &nbsp; people">9 &nbsp; people</option>
                            <option value="10 &nbsp; people">10 &nbsp; people</option>
                            <option value="11 &nbsp; people">11 &nbsp; people</option>
                            <option value="12 &nbsp; people">12 &nbsp; people</option>
                            <option value="13 &nbsp; people">13 &nbsp; people</option>
                            <option value="14 &nbsp; people">14 &nbsp; people</option>
                          </select></span><br/>
                        </div>
                        <p></p></div>
                        <p><button type="submit" className="submit_button">Submit</button>
                      </p></div>
                      <p></p></fieldset>
                      <p></p>
                      <p></p></div></form>
                      <div className="wpcf7-response-output wpcf7-display-none"></div></div>
                    </div>
                  </div>
    )
  }
}

export default Reservations;
















{/* <div className="main__wrap main__wrap-reserve">
  <div className="main__content main__content-pres">
      <Link className="home__btn home__btn-beige" to="/"></Link>
      <Link to="/" className="close-btn"></Link>
      <div className="rtb-booking-form">
          <form method="POST" action="http://cl-azabu.springs.pw/reservations/">
              <input type="hidden" name="action" value="booking_request"/>
              <fieldset className="reservation">
                  <legend> Reservations </legend>
                  <div className="reserve__wrap">
                      <div className="rtb-text date">
                          <label htmlFor="rtb-date">choose a Date </label>
                          <DatePicker
                            name="text-119"
                            placeholder="6 / 9"
                            defaultDate={new Date()}
                            formatDate={formattedDate}
                            onChange={this.changeDateHandler}
                            id="rtb-date"
                            dialogContainerStyle={{marginTop: '-40px'}}
                            aria-required="true" aria-invalid="false"
                            textFieldStyle={{backgroundColor: 'transparent'}}
                            className="datepicker picker__input picker__input-date"/>
                          <input type="hidden" name="rtb-date" value="2017/07/18"/>
                      </div>
                      <div className="rtb-text time">
                          <label htmlFor="rtb-time"> choose your Time </label>
                          <input type="text"  id="rtb-time" value="12 PM" className="timepicker picker__input picker__input-time"/>
                          <TimePicker
                            name="text-553"
                            placeholder="12 PM"
                            defaultTime={new Date()}
                            dialogBodyStyle={{marginTop: '-70px'}}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required timepicker picker__input picker__input-time"
                            id="rtb-time"
                            aria-required="true"
                            aria-invalid="false"
                            onChange={this.changeTimeHandler}
                          />
                          <input type="hidden" name="rtb-time"/>
                      </div>
                      <div className="rtb-select party">
                          <label htmlFor="rtb-party"> Party size</label>
                          <div className="select__wrap">
                              <select name="rtb-party" id="rtb-party" onChange={(event)=>{this.changePartyHandler(event)}}  required="" aria-required="true">
                                  <option value="2 people">2 &nbsp; people</option>
                                  <option value="3 &nbsp; people">3 &nbsp; people</option>
                                  <option value="4 &nbsp; people">4&nbsp; people</option>
                                  <option value="5 &nbsp; people">5&nbsp; people</option>
                                  <option value="6 &nbsp; people">6&nbsp; people</option>
                                  <option value="7 &nbsp; people">7&nbsp; people</option>
                                  <option value="8 &nbsp; people">8&nbsp; people</option>
                                  <option value="9 &nbsp; people">9&nbsp; people</option>
                                  <option value="10 &nbsp; people">10&nbsp; people</option>
                                  <option value="11 &nbsp; people">11 &nbsp; people</option>
                                  <option value="12 &nbsp; people">12 &nbsp; people</option>
                                  <option value="13 &nbsp; people">13 &nbsp; people</option>
                                  <option value="14 &nbsp; people">14 &nbsp; people</option>
                              </select>
                          </div>
                      </div>
                      <button className="submit_button" type="submit">Submit</button>
                  </div>
              </fieldset>
          </form>
      </div>
  </div>
</div> */}
