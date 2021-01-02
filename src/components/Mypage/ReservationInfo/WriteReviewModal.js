import axios from "axios";
import "./writeReviewModal.css";
import React, { Component } from "react"; 

class WriteReviewlModal extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      message: null,
      errorMessage: null
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.writeReview = this.writeReview.bind(this)
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key] : e.target.value })
  }

  writeReview() {
    const { accessToken, reservationid } = this.props;
    const { title, description } = this.state;
    
    if(!(title && description)) {
      this.setState({errorMessage: '제목과 내용 모두 작성해주세요.'})
    } else {
    axios.post('http://localhost:4000/mypage/writereview',
    { title: title,
      description: description,
      reservationId: reservationid },
    { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(this.setState({message: '성공적으로 작성되었습니다!'}))
    }
  }

  render() {
  const { close } = this.props;
  const { message, errorMessage } = this.state;

  return (
    <div className="modal1">
      <div className="WRMctn">
          {message ?
          <> 
          <div>{message}</div>
          <button className="btnWRM" onClick={close}>확인</button>
          </> :
          <div className="WRMctnMid">
          {errorMessage && <div className="WRMerrorMsg">{errorMessage}</div>}
          <input
            className="WRMtitle"
            type="text"
            placeholder="리뷰 제목을 작성해주세요."
            style={{
              width:400,
              height:40
            }}
            onChange={this.handleInputValue("title")} />
          <div>
          <textarea
            className="WRMcontent"
            type="textarea"
            placeholder="숙박 후기를 남겨주세요!"
            style={{
              width:400,
              height:200
            }}
            onChange={this.handleInputValue("description")} />
          </div>
          <div clssName="btnWRMctn">
          <button className="btnWRM" onClick={this.writeReview}>업로드</button> 
          <button className="btnWRM" onClick={close}>닫기</button>
          </div>
          </div> }
      </div>
    </div>
    )
  }
}
export default WriteReviewlModal;

