import React, { Component } from "react"
import { withRouter } from "react-router"
require('dotenv').config();

class DeleteGoogleModal extends Component {
  constructor(props) {
    super(props)

  this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount() {
    window.open(`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI_DELETE}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile email`, "_self")
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

export default withRouter(DeleteGoogleModal)

