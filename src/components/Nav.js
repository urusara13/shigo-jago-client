import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      //isSignUpModal: false,
      buttonName: 'Log in'
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    //this.openSignUpModal = this.openSignUpModal.bind(this);
    //this.closeSignUpModal = this.closeSignUpModal.bind(this);
    this.changeMypage = this.changeMypage.bind(this);
  }

  openLoginModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeLoginModal() {
    this.setState({
      isModalOpen: false
    })
  }
/*
  openSignUpModal() {
    this.setState({
      isSignUpModal: true
    })
  }

  closeSignUpModal() {
    this.setState({
      isSignUpModal: false
    })
  }
*/
  changeMypage() {
    this.props.loginHandler();
    this.setState({
      buttonName: 'My page'
    });
  }

  render() {
    const { 
      isLogin, 
      loginHandler } = this.props;

    const { 
      isModalOpen
    } = this.state;

    return (
      <nav>
          <div class="logo"><Link to="/">쉬고자고</Link></div>
          <div class="menu">
            <ul>
              { 
                isLogin ? 
                <>
                  <Link exact to="/mypage" className='mypageLink' >My page</Link>
                  <button >Log out</button>
                </> :
                <>
                  <button onClick={this.openLoginModal}>Sign in</button>
                  <LoginModal 
                    isLogin={isLogin} 
                    isOpen={isModalOpen} 
                    close={this.closeLoginModal}
                    changeMypage={this.changeMypage}
                    loginHandler={loginHandler} />
                  <Link exact to="/user/signup">Sign up</Link>
                </>
              }
            </ul>
          </div>
      </nav>
    )
  }
}


export default Nav;