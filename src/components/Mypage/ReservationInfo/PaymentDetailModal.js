import axios from "axios"; 
import "./paymentDetailModal.css"
import React, { Component } from "react"; 

class PaymentDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetail: {
        price: '',
        howToPaid: '',
        cardNumber: ''
      }
    }
  }

  componentDidMount() {
    const { accessToken, reservationinfo } = this.props;

    axios.post('http://localhost:4000/mypage/paymentinfo',
      { reservationId: reservationinfo.id },
      { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then(res => {
      this.setState({ paymentDetail: res.data.data }) })
  }

  render() {
    const { close, reservationinfo } = this.props;
    const { paymentDetail } = this.state;
  
    return (
      <div className="modal1">
        <div className="PDMctn">
          <div className="PDMctnMid">
          <div className="PDMtitle">
          <div className="PDMtot">숙소명</div>
          <div className="PDMtot">체크인</div>
          <div className="PDMtot">체크아웃</div>
          <div className="PDMtot">인원상세</div>
          <div className="PDMtot">예약날짜</div>
          <div className="PDMtot">결제금액</div>
          <div className="PDMtot">결제수단</div>
          {paymentDetail.howPaid === 'card' ?
          <div className="PDMtot">카드번호</div> :
          <div className="PDMtot">계좌번호</div> }
          </div>
          <div className='PDMcontent'>
          <div className="PDMtoc">{reservationinfo.hotelName}</div>
          <div className="PDMtoc">{reservationinfo.checkedin}</div>
          <div className="PDMtoc">{reservationinfo.checkedout}</div>
          <div className="PDMtoc">성인 {reservationinfo.adult} /아동 {reservationinfo.child}</div>
          <div className="PDMtoc">{reservationinfo.createdAt.substr(0,10)}</div> 
          <div className="PDMtoc">{paymentDetail.price}</div>
          <div className="PDMtoc">{paymentDetail.howPaid}</div>
          {paymentDetail.howPaid === 'card' ? 
          <div className="PDMtoc">{paymentDetail.cardNumber}</div> :
          <div className="PDMtoc">{paymentDetail.accountNumber}</div> }
          </div>
          </div>
          <div className="btnPDM" onClick={close}>닫기</div>
        </div>
      </div>
    )
  }
}

export default PaymentDetailModal;

