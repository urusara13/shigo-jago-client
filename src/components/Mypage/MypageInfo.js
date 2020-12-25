import React, { Component } from "react"; 

import UserInfo from "./UserInfo";
import ReservationInfo from "./ReservationInfo";


class MypageInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoDetail: 'user',
      userInfo: {
        name: '',
        email: '',
        mobile: ''
      },
    };

    this.reservationInfoChange = this.reservationInfoChange.bind(this);
    this.userInfoChange = this.userInfoChange.bind(this);
    this.userInfoHandler = this.userInfoHandler.bind(this);
  }

  reservationInfoChange() {
    this.setState({
      infoDetail: 'reservation'
    })
  }

  userInfoChange() {
    this.setState({
      infoDetail: 'user'
    })
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
      const { userInfoHandler, logoutHandler, accessToken } = this.props;
      const { infoDetail, userInfo } = this.state;

      return (
          <div className='infoContainer'>
            <button className='btnUserInfo' onClick={this.userInfoChange}>
              회원정보
            </button>
            <button className='btnReservationInfo' onClick={this.reservationInfoChange}>
              예약내역
            </button>
            { 
              infoDetail === 'user' ? 
              <UserInfo 
                userInfoHandler={userInfoHandler} 
                logoutHandler={logoutHandler}
                accessToken={accessToken}
                userInfoHandler={this.userInfoHandler}
                userInfo={userInfo}  /> : //로그인 시 받은 userInfo props 전달 필요
              
              <ReservationInfo 
                accessToken={accessToken}/> //로그인 시 받은 userInfo props 전달 필요
            }
          </div>
      )
  }


}

export default MypageInfo;
