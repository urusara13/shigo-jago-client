import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            mobile: "",
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignup = () => {
        if (this.state.email === "" && this.state.name === "" && this.state.password === ""
            && this.state.mobile === "") {
            this.setState({ errorMessage: '모든 항목은 필수입니다' });
        } else {
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

    render() {
        return (
            <>              
                    <div >
                        <div className="signUpModal">
                            <div className="signUpModalContents" >
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
                                            onChange={this.handleInputValue("name")}
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
            </>
        );
    }
}

export default withRouter(SignUpModal);
