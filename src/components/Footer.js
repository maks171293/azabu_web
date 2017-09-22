import React from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../img/logo2.png';
import ReactModal from 'react-modal';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      showModal: false
    }
    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  changeInputHandler(event){
    let text = event.target.value;
    this.setState({
      textValue: text
    })
  }
  handleOpenModal(e){
    this.setState({
      showModal: true
    })
  }
  handleAfterOpenFunc(){
    let modal = document.querySelector('.modal_content');
    modal.classList.add('active');
  }
  handleCloseModal(){
    this.setState({
      showModal: false
    })
  }
  render(){
    return  (
      <footer>
            <div className="footer-wrap">
                {/* <Link to="/splash" className="main__link link-email">enter email</Link> */}

                <form id="form-wysija-html598c696191ee0-2" method="post" action="http://cl-azabu.springs.pw/" className="inputs widget_wysija html_wysija">
                  <p className="wysija-paragraph">
                    <input id="myID"
                           className="wysija-input validate[required,custom[email]] inputs__field inputs__field--text"
                           type="text"
                           name="wysija[user][email]"
                           required
                           value={this.state.textValue}
                           onChange={(event)=>this.changeInputHandler(event)}
                           />
                    <input className="inputs__submit wysija-submit wysija-submit-field" type="submit" value="Submit" />
                    <label htmlFor="myID" className="inputs__label">
                      Enter Email
                    </label>
                    <span className="abs-req">
            {/* <input type="text" name="wysija[user][abs][email]" className="wysija-input validated[abs][email]" value="lalalal@gmail.com" /> */}
        </span>
                </p>
                <input type="hidden" name="form_id" value="2" />
                <input type="hidden" name="action" value="save" />
                <input type="hidden" name="controller" value="subscribers" />
                <input type="hidden" value="1" name="wysija-page" />
                <input type="hidden" name="wysija[user_list][list_ids]" value="1" />
                </form>
                <ReactModal
                  isOpen={false}
                  contentLabel="lala"
                  onRequestClose={this.handleCloseModal}
                  className="modal_content"
                  overlayClassName="modal_overlay"
                  onAfterOpen={this.handleAfterOpenFunc}
                >
                  <h2>Lalalalal</h2>
                  <p>ololoolollo</p>
                </ReactModal>

                <a className="main__link link-credits" href="http://deepsleepstudio.com">crafted by</a>
                <Link to="/" className="link-logo"><img src={logo2}/></Link>
            </div>
      </footer>
    )
  }
}

export default Header;
