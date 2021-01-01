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
                  userInfo={userInfo}/>
            )}  />
          </Switch>
        </Router>
      )
  }


}

export default MypageInfo;