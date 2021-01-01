import axios from "axios";
import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";
import "./userInfo.css";

import DeleteUserModal from "./DeleteUserModal";
import DeleteKakao from './DeleteKakaoModal'

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteAccountModalOpen: false,
      isDeleteKakaoAccount: false
    };

  this.openDeleteAccountModal = this.openDeleteAccountModal.bind(this)
  this.closeDeleteAccountModal = this.closeDeleteAccountModal.bind(this)
  this.openDeleteKakaoModal = this.openDeleteKakaoModal.bind(this)
  this.closeDeleteKakaoModal = this.closeDeleteKakaoModal.bind(this)
  this.goToEditUserInfo = this.goToEditUserInfo.bind(this);
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

  openDeleteKakaoModal() {
    this.setState({
      isDeleteKakaoAccount: true
    })
  }

  closeDeleteKakaoModal() {
    this.setState({
      isDeleteKakaoAccount: false
    })
  }

  goToEditUserInfo() {
    this.props.history.push('/mypage/useredit');
  }

  componentDidMount() {
    const { accessToken, userInfoHandler, socialInfoHandler } = this.props;
    
    axios.get('http://localhost:4000/mypage/userinfo', {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    .then(res => {
      console.log(res.data.data)
      userInfoHandler(res.data.data[0])
      // res.data.data.(ele => {
      //   ele.Socials 
      // })
      //socialInfoHandler(res.data.data)
    })
    .catch(err => console.log(err))
  }

  render() {
      const { userInfo, socialInfo, logoutHandlerSimple, accessToken } = this.props;
      const { isDeleteAccountModalOpen, isDeleteKakaoAccount } = this.state;

      return (
        <div className='userInfoContainer'>
          <div className='userInfo'>
            <div className='userInfoCTtitle'>이름</div>
            <div className='userInfoCT'>{userInfo.name}</div>
            <div className='userInfoCTtitle'>이메일</div>
            <div className='userInfoCT'>{userInfo.loginId}</div>
            <div className='userInfoCTtitle'>전화번호</div>
            <div className='userInfoCT'>{userInfo.mobile}</div>
            {socialInfo && socialInfo}
            <div className='userInfoCTtitle'>소셜 연결 계정</div>
            <div className='userInfoCTtitle'>{}</div>
            <div className='userInfoCT'>{userInfo.mobile}</div>
          </div>
          <div className='btnUInfoCtn'> 
          <button className='btnUInfo' onClick={this.goToEditUserInfo}>회원정보수정</button>
          <button className='btnUInfo' onClick={this.openDeleteKakaoModal}>카카오계정 연결해제</button>
          { isDeleteKakaoAccount && 
          <DeleteKakao 
            isOpen={isDeleteKakaoAccount}
            close={this.closeDeleteKakaoModal} />}
            
          <button className='btnUInfo' onClick={this.openDeleteAccountModal}>탈퇴하기</button>
          { isDeleteAccountModalOpen && 
          <DeleteUserModal 
            close={this.closeDeleteAccountModal} 
            logoutHandlerSimple={logoutHandlerSimple}
            accessToken={accessToken} />}
          </div>
        </div>
      )
  }
}

export default withRouter(UserInfo);
