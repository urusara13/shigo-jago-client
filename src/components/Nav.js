import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Mypage from './Mypage'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import Mainpage from './Mainpage';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isSignUpModal: false,
      buttonName: 'Log in'
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
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

  changeMypage() {
    this.props.loginHandler();
    this.setState({
      buttonName: 'My page'
    });
  }

  render() {
    const { 
      isLogin, 
      userInfo, 
      logoutHandler, 
      loginHandler, 
      userInfoHandler,
      accessToken } = this.props;
    const { isModalOpen, isSignUpModal } = this.state;
    return (
      <Router>
        <nav>
        <div className="logo"><Link to="/">쉬고,자고</Link></div>
          <div className="menu">
            <ul>
              { 
                isLogin ? //로그인 유무를 기준으로 나브바가 보여주는 내용
                <>
                  <Link to="/mypage" className='mypageLink' >My page</Link>
                  <button>Log out</button>
                </> :
                <>
                  <button className='loginBtn' onClick={this.openLoginModal}>Sign in</button>
                  <LoginModal 
                    isLogin={isLogin} 
                    isOpen={isModalOpen} 
                    close={this.closeLoginModal}
                    changeMypage={this.changeMypage}
                    loginHandler={loginHandler} />
                  <button className='signUpBtn' onClick={this.openSignUpModal} >Sign up</button>
                  <SignUpModal 
                    isOpen={isSignUpModal} 
                    close={this.closeSignUpModal}/>
                </>
              }
            </ul>
          </div>

          <Switch>
            <Route exact path="/" >
              <Mainpage/>
            </Route>
            <Route exact path='/mypage' >
              <Mypage 
                userInfo={userInfo}
                logoutHandler={logoutHandler}
                userInfoHandler={userInfoHandler}
                accessToken={accessToken} />
            </Route>  
          </Switch>
          </nav>
        </Router>
    )
  }
}


export default Nav;