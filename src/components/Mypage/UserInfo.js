import axios from "axios";
import React, { Component } from "react"; 

import DeleteAccountModal from "./DeleteAccountModal";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteAccountModalOpen: false
    };

  this.openDeleteAccountModal = this.openDeleteAccountModal.bind(this);  
  this.closeDeleteAccountModal = this.closeDeleteAccountModal.bind(this);
  }

  openDeleteAccountModal() {
    this.setState({
      isDeleteAccountModalOpen: true
    })
  }

  closeDeleteAccountModal() {
    this.setState({
      isDeleteAccountModalOpen: false
    })
  }

  componentDidMount() {
    const { accessToken, userInfoHandler } = this.props;
    
    axios.get('http://localhost:4000/mypage/userinfo', {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    .then(res => {
      userInfoHandler(res.data.data)
    })
    .catch(err => console.log(err))
  }


  render() {
      const { userInfo, logoutHandler, accessToken } = this.props;
      const { isDeleteAccountModalOpen } = this.state;

      return (
        <div className='userInfoContainer'>
          <div className='userInfo'>
            <div>회원정보</div>
            <div className='userName'>이름 : {userInfo.name}</div>
            <div className='email'>이메일 : {userInfo.email}</div>
            <div className='mobile'>전화번호 : {userInfo.mobile}</div>
          </div>
          <button className='deleteAccount' onClick={this.openDeleteAccountModal}>탈퇴하기</button>
          <DeleteAccountModal 
            isOpen={isDeleteAccountModalOpen} 
            close={this.closeDeleteAccountModal} 
            logoutHandler={logoutHandler}
            accessToken={accessToken} />
        </div>
      )
  }

}

export default UserInfo;
