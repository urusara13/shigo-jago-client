import "./authKakaoGoogleModal.css"
import React, { Component } from "react"
import { withRouter } from "react-router"
require('dotenv').config();

class AuthKakaoModal extends Component {
  constructor(props) {
    super(props)

    this.authAccount = this.authAccount.bind(this.authAccount);
  }

  authAccount() {
    // const { userInfo } = this.props
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
    }
    const kakaoAuthurl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTKEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_AUTH}&response_type=code`
    window.location.assign(kakaoAuthurl)
  }

  render() {
      const { isOpen, close } = this.props
      return (
        <>
        {isOpen ? 
          (<div className='modal1'>
             <div className='AKMctn'>
               <div className='AKMcontent'>카카오와 연동하시겠습니까?</div>
               <div className='btnAKMctn'>
               <button className='btnAKM' onClick={this.authAccount}>예</button>
               <button className='btnAKM' onClick={close}>아니오</button>
               </div>
             </div>
           </div> ) :
          null
        }
        </>
      )
  }
}

export default withRouter(AuthKakaoModal)

