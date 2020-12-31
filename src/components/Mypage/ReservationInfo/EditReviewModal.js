import axios from "axios"; 
import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";

class EditReviewlModal extends Component  {
  constructor(props) {
    super(props);
    const { title, description } = this.props.originReview;
    this.state = {
      title: title,
      description: description,
      message: null,
      errorMessage: null
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.editReview = this.editReview.bind(this)
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key] : e.target.value })
  }

  editReview() {
    const { accessToken, reservationid } = this.props;
    const { title, description } = this.state;
    
    if(!(title || description)) {
      this.setState({errorMessage: '수정 사항이 없습니다.'})
    }
    axios.post('http://localhost:4000/mypage/writereview',
    { title: title,
      description: description,
      reservationId: reservationid },
    { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(res => {
      if(res.status === 201) {
        this.setState({message: '수정되었습니다.'})
      } else if(res.status === 200) {
        this.setState({message: '새로 생성되었습니다.'})
      }
    })
    
  }


  render() {
  const { close } = this.props;
  const { message, errorMessage } = this.state;
  const { title, description } = this.props.originReview;
  
  return (
    <div className="modal1">
      <div className="loginModal">
        <span className="btnClose" onClick={close}>&times;</span>
        {message ? 
          <>
          <div>{message}</div>
          <button onClick={close}>확인</button>
          </> :
          <>
          <input
            defaultValue={title}
            placeholder={title}
            className="title"
            type="text"
            style={{
              width:400,
              height:40
            }}
            onChange={this.handleInputValue("title")} />
          <div>
          <textarea
            defaultValue={description}
            placeholder={description}
            className="description"
            type="textarea"
            style={{
              width:400,
              height:200
            }}
            onChange={this.handleInputValue("description")} />
          </div>
          <button onClick={this.editReview}>수정하기</button>
          {errorMessage && <div>{errorMessage}</div>}
          </>
        }
      </div>
    </div>
    )
  }
}
export default withRouter(EditReviewlModal);

