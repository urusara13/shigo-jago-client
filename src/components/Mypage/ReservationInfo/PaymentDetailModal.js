import axios from "axios"; //axios 초기 설정 필요
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
      this.setState({paymentDetail: res.data.data}) })
  }

  render() {
    const { close, reservationinfo } = this.props;
    const { paymentDetail } = this.state;
  
    return (
      <div className="modal1">
        <div className="loginModal">
          <span className="btnClose" onClick={close}>&times;</span>
          <div>숙소명: {reservationinfo.hotelName}</div>
          <div >체크인: {reservationinfo.checkedin}</div>
          <div >체크아웃: {reservationinfo.checkedout}</div>
          <div >인원 상세: 성인 {reservationinfo.adult} /아동 {reservationinfo.child}</div>
          <div >예약 날짜: {reservationinfo.createdAt.substr(0,10)}</div> 
          <div>결제 금액: {paymentDetail.price}</div>
          <div>결제 수단: {paymentDetail.howToPaid}</div>
          <div>카드 번호: {paymentDetail.cardNumber}</div>
        </div>
      </div>
    )
  }
}

//카드 번호와 계좌번호따로따로 다루는 것 확인 필요. (api 문서에는 카드 넘버만 있음)
export default PaymentDetailModal;

