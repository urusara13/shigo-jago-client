import axios from "axios";
import React, { Component } from "react"; 
import "./editUser.css"
import { withRouter } from "react-router-dom"; //withRouter: history 사용하기 위해
import EditModal from "./EditUserModal"

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      password: null,
      mobile: null,
      errorMessage: null
    };

  this.handleInputValue = this.handleInputValue.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.goToUserInfo = this.goToUserInfo.bind(this);
  this.editUserInfo = this.editUserInfo.bind(this);
  
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }
  closeModal() {
    this.setState({ errorMessage: null })
  }
  goToUserInfo() {
    this.props.history.push('/mypage/userinfo')
  }


  editUserInfo() {
    const { accessToken, history } = this.props;
    const { name, password, mobile } = this.state;

    if(!(name || password || mobile)) {
      this.setState({
        errorMessage: '변경된 사항이 없습니다.'
      });
    }
    else {
      const newUserInfo = {
        name: name,
        mobile: mobile,
        password: password
      }
      if(!name) delete newUserInfo.name
      if(!mobile) delete newUserInfo.mobile
      if(!password) delete newUserInfo.password

      axios.post('http://localhost:4000/mypage/useredit', newUserInfo,
      { headers: {"Authorization": `Bearer ${accessToken}`} })
      .then(this.setState({ 
        name: null,
        password: null,
        mobile: null,
        errorMessage: '성공적으로 처리되었습니다.' })) //서버 요청 후 state 정보 삭제
      .then(() => {
        history.push('/mypage')}) 
      .catch(err => console.log(err))
    }
  }

  render() {
    const { userInfo } = this.props;
    const { errorMessage } = this.state;

    return(
      <div className='EUCtn'>
      <div className='EUCtnMid'>
      <div className='userEditCTtitle'>이름</div>
      <input
        className="EUinput" type="text"
        placeholder={userInfo.name}
        onChange={this.handleInputValue("name")}
      />

      <div className='userEditCTtitle'>아이디</div>
      <div className="email">{userInfo.loginId}</div>
      
      <div className='userEditCTtitle'>전화번호</div>
      <input
        className="EUinput" type="text"
        placeholder={userInfo.mobile}
        onChange={this.handleInputValue("mobile")}
      />
      
      <div className='userEditCTtitle'>비밀번호</div>
      <input
        className="EUinput" type="text"
        placeholder="새로운 비밀번호"
        onChange={this.handleInputValue("password")}
      />
      </div>
      <div className='btnEUCtn'>
      <button className="btnEdit" onClick={this.editUserInfo}>수정하기</button>
      <button className="btnEdit" onClick={this.goToUserInfo}>뒤로가기</button>
      {errorMessage && <EditModal close={this.closeModal} errorMessage={errorMessage} />}
      </div>
      </div>
    )
     
  }

}

export default withRouter(UserEdit);
