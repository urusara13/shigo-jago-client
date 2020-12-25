//import axios from "axios"; //axios 초기 설정 필요
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
    // axios.post('http://localhost:4000/user/delete', //탈퇴 api (추가, readReview 내용 안보임)
    // { headers: { Authorization: `token ${this.props.accessToken}`}
    // })
    // .then(alert('이용해주셔서 감사합니다.'))
    // .then(() => this.props.logoutHandler())
    // .cath(err => console.log(err))

    alert('이용해주셔서 감사합니다.');
    this.props.logoutHandler();
    this.props.history.push('/');
  }

  render() {
      const { isOpen, close } = this.props;

      return (
        <>
        {isOpen ? 
          (<div className='modal'>
             <div>정말 탈퇴하시겠습니까?</div>
             <button className='deleteAccount' onClick={this.deleteAccount}>예</button>
             <button className='close' onClick={close}>아니오</button>
           </div> ) :
          null
        }
        </>
      )
  }


}

export default withRouter(DeleteAccountModal);
