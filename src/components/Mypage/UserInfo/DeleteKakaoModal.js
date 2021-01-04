import "./deleteKakaoGoogleModal.css"
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
          (<div className='DKMmodalBG'>
             <div className='DKMctn'>
               <div className='DKMcontent'>카카오 계정을</div> 
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

export default withRouter(DeleteKakaoModal);

