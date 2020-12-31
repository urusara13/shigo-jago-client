import axios from "axios";
import React, { Component } from "react"; 

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
  this.editUserInfo = this.editUserInfo.bind(this);
  
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  closeModal() {
    this.setState({
      errorMessage: null
    })
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
      <>
      <div>회원정보 수정</div>
      <div>이메일</div>
      <div className="email">{userInfo.email}</div>
      <div>이름</div>
      <input
        className="name"
        type="text"
        placeholder={userInfo.name}
        onChange={this.handleInputValue("name")}
      />
      <div>전화번호</div>
      <input
        className="mobile"
        type="text"
        placeholder={userInfo.mobile}
        onChange={this.handleInputValue("mobile")}
      />
      
      <div>비밀번호</div>
      <input
        className="password"
        type="text"
        placeholder="새로운 비밀번호"
        onChange={this.handleInputValue("password")}
      />

      <button className="btnEdit" onClick={this.editUserInfo}>수정하기</button>
      {errorMessage && <EditModal close={this.closeModal} errorMessage={errorMessage} />}
      </>
    )
     
  }

}

export default withRouter(UserEdit);
