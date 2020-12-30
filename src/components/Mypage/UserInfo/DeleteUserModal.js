import axios from "axios"; //axios 초기 설정 필요
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

    axios.post('http://localhost:4000/mypage/deleteuser',
      { }, 
      { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(this.setState({ message: '이용해주셔서 감사합니다!' }))
    .catch(err => console.log(err))
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
        <div className='modal1'>
          <div className='loginModal'>
            <div>{message}</div>
            <button onClick={this.goToMainpage}>확인</button>
          </div>
        </div> : 
        <div className='modal1'>
          <div className='loginModal'>
            <div>정말 탈퇴하시겠습니까?</div>
              <button className='deleteAccount' onClick={this.deleteAccount}>예</button>
              <button className='close' onClick={close}>아니오</button>
          </div>
        </div>
      )
  }
}

export default withRouter(DeleteUserModal);
