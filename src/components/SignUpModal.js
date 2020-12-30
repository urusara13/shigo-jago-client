import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import './SignUp.css';

axios.defaults.withCredentials = true;

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const pwRegex = RegExp(
    /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,9}$/ //  6 ~ 9자 영문, 숫자 조합
);

const phoneRegex = RegExp(
    /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/ 
);


class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            mobile: "",
            formErrors: {
                email: "",
                name: "",
                password: "",
                mobile: ""
            },
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = e => {
        e.preventDefault();
        console.log(e.target)
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "유효하지 않은 이메일입니다.";
                break;
            case "name":
                formErrors.name =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "password":
                formErrors.password = pwRegex.test(value)
                    ? ""
                    : "6 ~ 9자 영문, 숫자 조합을 사용해주세요.";
                break;
            case "mobile":
                formErrors.mobile = phoneRegex.test(value)
                    ? ""
                    : "하이픈을 이용해주세요";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    handleSignup = () => {
        let formErrors = { ...this.state.formErrors };
        if (this.state.email === "" && this.state.name === "" && this.state.password === ""
            && this.state.mobile === "") {
            this.setState({ errorMessage: '모든 항목은 필수다' });
        }
        else if (formErrors.email || formErrors.name || formErrors.password || formErrors.mobile) {

            this.setState({ errorMessage: '다 시 해 ~ ' });

        }
        else {


            axios
                .post(
                    'http://localhost:4000/user/signup',
                    {
                        email: this.state.email,
                        name: this.state.name,
                        password: this.state.password,
                        mobile: this.state.mobile
                    },
                )
                .then((response) => {
                    //console.log(response)
                    if (response.statuscode === 201) {
                        alert('가입에 성공하셨습니다!');
                    }
                })
                .then(() => {
                    this.props.history.push('/');
                })
        }
    }

    kakaoSignup = async () =>  {
        const { kakaoUserData } = this.props

        if (this.state.password === ""&& this.state.mobile === "") {
            this.setState({ errorMessage: '모든 항목은 필수입니다.' })
        }

        else if(this.state.formErrors.password && this.state.formErrors.mobile) {
            this.setState({ errorMessage: '올바르게 입력해주세요.' })
        }

        else {
          const signup = await axios.post('http://localhost:4000/user/signup', {
              email: kakaoUserData.kakao_account.email,
              name: kakaoUserData.properties.nickname,
              password: this.state.password,
              mobile: this.state.mobile
          })
            .then((response) => {
                if (response.statuscode === 201) alert('가입에 성공하셨습니다!')
            })
            .then(() => {
                this.props.history.push('/');
            })
        }
    }

    render() {
        const { formErrors } = this.state;
        const { kakaoUserData } = this.props

        
        return !kakaoUserData ? (
            <>
                <div >
                    <div className="signUpModal">
                        <div className="signUpModalContents" >
                            <h1>회원가입</h1>

                            <form onSubmit={(e) => e.preventDefault()} noValidate >

                                <div className="newEmail">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className={formErrors.email.length > 0 ? "error" : null}
                                        type="email"
                                        name="email"
                                        placeholder="사용하실 e-mail을 입력해주세요"
                                        noValidate
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.email.length > 0 && (
                                        <div className="errorMessage">{formErrors.email}</div>
                                    )}
                                </div>
                                <div className="newPassword">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className={formErrors.password.length > 0 ? "error" : null}
                                        type="password"
                                        name="password"
                                        placeholder="사용하실 password를 입력해주세요"
                                        noValidate
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.password.length > 0 && (
                                        <div className="errorMessage">{formErrors.password}</div>
                                    )}
                                </div>
                                <div className="newName">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        className={formErrors.name.length > 0 ? "error" : null}
                                        type='text'
                                        name="name"
                                        placeholder="이름을 입력해주세요"
                                        noValidate
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.name.length > 0 && (
                                        <div className="errorMessage">{formErrors.name}</div>
                                    )}
                                </div>
                                <div className="phoneNum">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input
                                        className={formErrors.mobile.length > 0 ? "error" : null}
                                        type='text'
                                        name="mobile"
                                        placeholder="휴대폰 번호를 입력해주세요"
                                        noValidate
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.mobile.length > 0 && (
                                        <div className="errorMessage">{formErrors.mobile}</div>
                                    )}
                                </div>
                                <button
                                    className="btnSignUp"
                                    type='submit'
                                    onClick={this.handleSignup}
                                >
                                    회원가입
                                    </button>
                                {<div className="alert-box">{this.state.errorMessage}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
        : (
            <>
                <div >
                    <div className="signUpModal">
                        <div className="signUpModalContents" >
                            <h1>회원가입</h1>

                            <form onSubmit={(e) => e.preventDefault()} >

                                <div className="newName">
                                  <label htmlFor="name">Name</label>
                                    <div>{kakaoUserData.properties.nickname}</div>
                                </div>

                                <div className="newEmail">
                                  <label htmlFor="email">email</label>
                                    <div>{kakaoUserData.kakao_account.email}</div>
                                </div>
                                
                                <div className="newPassword">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className={formErrors.password.length > 0 ? "error" : null}
                                        type="password"
                                        name="password"
                                        placeholder="사용하실 password를 입력해주세요"
                                        
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.password.length > 0 && (
                                        <div className="errorMessage">{formErrors.password}</div>
                                    )}
                                </div>
                  
                                <div className="phoneNum">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input
                                        className={formErrors.mobile.length > 0 ? "error" : null}
                                        type='tel'
                                        name="mobile"
                                        placeholder="휴대폰 번호를 입력해주세요"
                                        
                                        onChange={this.handleInputValue}
                                    ></input>
                                    {formErrors.mobile.length > 0 && (
                                        <div className="errorMessage">{formErrors.mobile}</div>
                                    )}
                                </div>
                                <button
                                    className="btnSignUp"
                                    type='submit'
                                    onClick={this.kakaoSignup}
                                >
                                    회원가입
                                    </button>
                                {<div className="alert-box">{this.state.errorMessage}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(SignUpModal);
