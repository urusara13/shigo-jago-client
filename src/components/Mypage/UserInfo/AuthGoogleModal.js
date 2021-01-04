import "./authKakaoGoogleModal.css"
import React, { Component } from "react"
import { withRouter } from "react-router"
require('dotenv').config();

class AuthGoogleModal extends Component {
  constructor(props) {
    super(props)

    this.authAccount = this.authAccount.bind(this.authAccount);
  }

  authAccount() {
    const googleoAuthurl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI_AUTH}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile email`
    window.location.assign(googleoAuthurl)
  }
  
  render() {
      const { isOpen, close } = this.props
      return (
        <>
        {isOpen ? 
          (<div className='AKMmodalBG'>
             <div className='AKMctn'>
               <div className='AKMcontent'>구글과 연동하시겠습니까?</div>
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

export default withRouter(AuthGoogleModal)

