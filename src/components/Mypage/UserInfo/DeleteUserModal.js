import axios from "axios"; //axios 초기 설정 필요
import "./deleteUserModal.css"
import React, { Component } from "react"; 
import { withRouter } from "react-router";

class DeleteUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    }
    this.deleteAccount = this.deleteAccount.bind(this);
    this.goToMainpage = this.goToMainpage.bind(this);
  }

  deleteAccount() {
    const { accessToken } = this.props;

    axios.post(`${process.env.REACT_APP_URL}/mypage/deleteuser`,
      { }, 
      { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(this.setState({ message: '이용해주셔서 감사합니다!' }))
    .catch(err => err)
  }

  goToMainpage() {
    const { logoutHandlerSimple, history } = this.props;
    
    logoutHandlerSimple()
    history.push('/')
    window.open('/','_self') //새로고침
  }
 
  render() {
      const { close } = this.props;
      const { message } = this.state;

      return (
        message ? 
        <div className='DUMmodalBG'>
          <div className='DUMctn'>
            <div>{message}</div>
            <button className='btnDUM' onClick={this.goToMainpage}>확인</button>
          </div>
        </div> : 
        <div className='DUMmodalBG'>
          <div className='DUMctn'>
            <div>정말 탈퇴하시겠습니까?</div>
              <div className='btnDUMctn'>
              <button className='btnDUM' onClick={this.deleteAccount}>예</button>
              <button className='btnDUM' onClick={close}>아니오</button>
              </div>
          </div>
        </div>
      )
  }
}

export default withRouter(DeleteUserModal);
