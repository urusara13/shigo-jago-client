import React, { Component } from "react"; 

import UserInfo from "./UserInfo/UserInfo";
import UserEdit from "./UserInfo/EditUser";
import ReservationList from "./ReservationInfo/ReservationList";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

class MypageInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        loginId: '',
        mobile: ''
      },
      socialInfo: []
    };
    
    this.userInfoHandler = this.userInfoHandler.bind(this);
    this.socialInfoHandler = this.socialInfoHandler.bind(this);
  }


  userInfoHandler(data) {
    this.setState({
      userInfo: {
        name: data.name,
        loginId: data.loginId,
        mobile: data.mobile
      },
    })
  }

  socialInfoHandler(data) {
    this.setState({
      socialInfo: data,
    })
  }


  render() {
      const { logoutHandlerSimple, accessToken } = this.props;
      const { userInfo, socialInfo } = this.state;

      return (
        <Router>
          <nav className='UInav'>
          <ul className='menu'>
            <li>
            <Link to='/mypage' className='UIlink'>회원정보</Link>
            </li>
            <li>
            <Link to='/mypage/reservationinfo' className='UIlink'>예약내역</Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route 
              path='/mypage/useredit'
              render={() => (
                <UserEdit
                  userInfo={userInfo}
                  accessToken={accessToken} />
            )}  />
            <Route 
              path='/mypage/reservationinfo'
              render={() => (
                <ReservationList
                 accessToken={accessToken} />
            )} />
            <Route 
              path='/mypage'
              render={() => (
                <UserInfo 
                  logoutHandlerSimple={logoutHandlerSimple}
                  accessToken={accessToken}
                  userInfoHandler={this.userInfoHandler}
                  socialInfoHandler={this.socialInfoHandler}
                  userInfo={userInfo}
                  socialInfo={socialInfo}/>
            )}  />
          </Switch>
        </Router>
      )
  }


}

export default MypageInfo;