import React, { Component } from "react"; 

import UserInfo from "./UserInfo";
import UserEdit from "./UserEdit";
import ReservationInfo from "./ReservationInfo";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

class MypageInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        email: '',
        mobile: ''
      },
    };
    
    this.userInfoHandler = this.userInfoHandler.bind(this);
  }


  userInfoHandler(data) {
    this.setState({
      userInfo: {
        name: data.name,
        email: data.email,
        mobile: data.mobile
      }
    })
  }

  render() {
      const { logoutHandlerSimple, accessToken } = this.props;
      const { userInfo } = this.state;

      return (
        <Router>
          <Link to='/mypage'>회원정보</Link>
          <Link to='/mypage/reservationinfo'>예약내역</Link>
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
                <ReservationInfo 
                 accessToken={accessToken} />
            )} />
            <Route 
              path='/mypage'
              render={() => (
                <UserInfo 
                  logoutHandlerSimple={logoutHandlerSimple}
                  accessToken={accessToken}
                  userInfoHandler={this.userInfoHandler}
                  userInfo={userInfo}/>
            )}  />
          </Switch>
        </Router>
      )
  }


}

export default MypageInfo;