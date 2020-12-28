import axios from "axios"; //axios 초기 설정 필요
import React, { Component } from "react"; 
import { withRouter } from "react-router";

class DeleteAccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount() {
    const { logoutHandler, history, accessToken } = this.props;

    axios.post('http://localhost:4000/mypage/deleteuser',
      { }, 
      { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(alert('이용해주셔서 감사합니다.'))
    .then(logoutHandler())
    .then(history.push('/') )
    .catch(err => console.log(err))
  }
 
  render() {
      const { isOpen, close } = this.props;

      return (
        <>
        {isOpen ? 
          (<div className='modal1'>
             <div className='loginModal'>
               <div>정말 탈퇴하시겠습니까?</div>
               <button className='deleteAccount' onClick={this.deleteAccount}>예</button>
               <button className='close' onClick={close}>아니오</button>
             </div>
           </div> ) :
          null
        }
        </>
      )
  }
}

export default withRouter(DeleteAccountModal);
