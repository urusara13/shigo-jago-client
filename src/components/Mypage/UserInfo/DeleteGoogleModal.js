import "./deleteKakaoGoogleModal.css"
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
             <div className='DKMctn'>
             <div className='DKMcontent'>구글 계정을</div> 
               <div className='DKMcontent'>연결 해제하시겠습니까?</div>
               <div className='btnDKMctn'>
               <button className='btnDKM' onClick={this.deleteAccount}>예</button>
               <button className='btnDKM' onClick={close}>아니오</button>
               </div>
             </div>
           </div> ) :
          null
        }
        </>
      )
  }
}

export default withRouter(DeleteGoogleModal)

