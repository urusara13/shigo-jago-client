import axios from "axios"
import ReactDOM from 'react-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom"

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
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    // console.log(authorizationCode)
    // if (authorizationCode) {
    //   console.log(authorizationCode)
    //   const getkakaoToken = await axios.post('http://localhost:4000/social/kakao/callback',{
    //     "authorizationCode" : 123,
    //     "isDelete" : true,
    //     "fuck": false
    // })
    //   const token = getkakaoToken.data.data.access_token
    //   console.log('delete',token)
    //   this.setState({
    //     token: getkakaoToken.data.data.access_token
    //   })
    //   console.log('state', this.state)
    // }
    
    // const child = window.open('/mypage/kakao/delete')
    // child.location.href()
    

    // console.log(window.Kakao.isInitialized());
    // if(!window.Kakao.isInitialized) {
    //   window.Kakao.init('fbb39da1c8ecc519a63cb8852dc84385')
    // }
    // const kakaoAuthurl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTKEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_DELETE}&response_type=code`
    // console.log(kakaoAuthurl)
    // window.location.assign(kakaoAuthurl)
    // const url = new URL(window.location.href)
    // const authorizationCode = url.searchParams.get('code')


  }
 
  render() {
      console.log(this.state.token)
      const { isOpen, close } = this.props
      return (
        <>
        {isOpen ? 
          (<div className='modal1'>
             <div className='loginModal'>
               <div>정말 탈퇴하시겠습니까?</div>
               <button className='deleteAccount' onClick={this.deleteAccount}>예</button>
               <button className='close' onClick={close}>아니오</button>
               <button onClick={() => {
                 const newWindow = window.open('address')
                 setTimeout(() => newWindow.close(), 3000) 
               }}>button</button>
             </div>
           </div> ) :
          null
        }
        </>
      )
  }
}

export default withRouter(DeleteKakaoModal);

