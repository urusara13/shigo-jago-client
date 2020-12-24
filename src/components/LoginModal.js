import React, { Component } from "react"; 
import axios from "axios";

axios.defaults.withCredentials = true;

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  handleLogin() {
    const { loginHandler } = this.props;

    if(!(this.state.email && this.state.password)) {
      alert('아이디와 비밀번호를 모두 채워주세요.')
    } else {
      axios.post('http://localhost:4000/user/login', {
        email: this.state.email,
        password: this.state.password
      }, {
        headers: {"Content-Type": "application/json"}
      })
      .then(res => {
        loginHandler(res.data.data.accessToken)
      })
      .catch(err => console.log(err));
    }
  } 
  

  render() {
    const { isOpen, close } = this.props;

    return (
      <>
      {
        isOpen ? 
        (<div className='modal'>
          <div>로그인</div>
          <input
            className="email"
            type="text"
            placeholder="E-mail"
            onChange={this.handleInputValue("email")}
          />
          <input
            className="password"
            type="text"
            placeholder="Password"
            onChange={this.handleInputValue("password")}
          />
          <button className="btnLogin" onClick={this.handleLogin}>로그인</button>
          <button className='btnClose' onClick={close}>닫기</button>
        </div> ) :
        null
      }
      </>
      )
    }
  }
  

export default LoginModal;
