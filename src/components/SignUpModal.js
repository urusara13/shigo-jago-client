import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            mobile: "",
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignup = () => {
        if (this.state.email === "" && this.state.password === "" && this.state.username === ""
            && this.state.mobile === "") {
            this.setState({ errorMessage: '모든 항목은 필수입니다' });//어려웠던부분
        } else {
            axios
                .post(
                    'http://localhost:4000/user/signup',
                    {
                        email: this.state.email,
                        password: this.state.password,
                        username: this.state.username,
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

    render() {
        const { isOpen, close } = this.props;

        return (
            <>
                {isOpen ?
                    (
                        <div className="modal2">
                            <div onClick={close}>
                                <div className="signUpModal">
                                    <span className="btnClose" onClick={close}>
                                        &times;
                                    </span>
                                    <div className="signUpModalContents" onClick={isOpen}>
                                        <h1>Sign Up</h1>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <div>모든 항목은 필수입니다</div>
                                            <div>
                                                <span>이메일</span>
                                                <input
                                                    className="email"
                                                    type="email"
                                                    onChange={this.handleInputValue("email")}
                                                ></input>
                                            </div>
                                            <div>
                                                <span>비밀번호</span>
                                                <input
                                                    className="password"
                                                    type="password"
                                                    onChange={this.handleInputValue("password")}
                                                ></input>
                                            </div>
                                            <div>
                                                <span>이름</span>
                                                <input
                                                    className="newName"
                                                    type='text'
                                                    onChange={this.handleInputValue("username")}
                                                ></input>
                                            </div>
                                            <div>
                                                <span>전화번호</span>
                                                <input
                                                    className="phoneNum"
                                                    type='tel'
                                                    onChange={this.handleInputValue("mobile")}
                                                ></input>
                                            </div>
                                            <button
                                                className="btn btn-signup"
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
                        </div>
                    ) : null
                }
            </>
        );
    }
}

export default SignUpModal;
