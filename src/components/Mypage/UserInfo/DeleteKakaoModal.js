import React, { Component } from "react"
import { withRouter } from "react-router"
require('dotenv').config();

class DeleteKakaoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    }

  this.deleteAccount = this.deleteAccount.bind(this);
  }

  async deleteAccount() {
    window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTKEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_DELETE}&response_type=code`, "_self")
  }
 
  render() {
      const { isOpen, close } = this.props
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

export default withRouter(DeleteKakaoModal);

