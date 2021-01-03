import axios from "axios";
import "./paymentModal.css"
import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";


class PaymentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCompany: null,
      cardNumber1: null,
      cardNumber2: null,
      cardNumber3: null,
      cardNumber4: null,
      validThru: null,
      bank: null,
      accountNumber: null,
      message: null
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.pay = this.pay.bind(this);
    this.goToMypage = this.goToMypage.bind(this);
  }

  pay() {
    const { accessToken, howPay, res, price, hotelName } = this.props;
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, accountNumber} = this.state;
    const cardNumber = `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`
    
    if(!accessToken) {
      this.setState({message: '로그인을 먼저 진행해주세요.'})
    } 
    else {
      axios.post('http://localhost:4000/detail/payment',
        { reserveInfo: {
            checkedin: res.checkIn,
            checkedout: res.checkOut,
            adult: res.adult,
            child: res.child,
            hotelName: hotelName },
          payInfo: {
            price: price,
            howPaid: howPay,
            cardNumber: cardNumber,
            accountNumber: accountNumber,
          }},
        { headers: {"Authorization": `Bearer ${accessToken}`}} )
      .then(res => {
        if(res.data.message) {
          this.setState({message: '성공적으로 예약되었습니다.'})
        }
      })
      .catch(err => err)
    }
  }
  
  goToMypage() {
    const { close, history } = this.props;

    close()
    history.push('/mypage/reservationinfo')
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key] : e.target.value})
  }

  render() {
    const { howPay, close } = this.props;
    const { message } = this.state;

    return (
      message ? 
        <div className='modal1'>
          <div className='PMMCtn'>      
          <div className='PMMmessage'>{message}</div> 
          {message === '성공적으로 예약되었습니다.' && 
            <button className="btnClose" onClick={this.goToMypage}>확인</button>}
          {message === '로그인을 먼저 진행해주세요.' && 
            <button className="btnPMpay" onClick={close}>확인</button>}
          </div>
        </div> 
        :
        <div className='modal1'>
          <div className='PMMCtn'>       
          <span className="btnPMClose" onClick={close}>&times;</span>
          {howPay === 'card' && 
          <>
          <h1>카드결제</h1>
          <div className='PMcardNumberCtn'>
          <div className='PMtitle'>카드번호</div>
          <input
            className="cardNumber" type="text" maxLength="4"
            onChange={this.handleInputValue("cardNumber1")} />
          <input
            className="cardNumber" type="text" maxLength="4"
            onChange={this.handleInputValue("cardNumber2")} />
          <input
            className="cardNumber" type="text" maxLength="4"
            onChange={this.handleInputValue("cardNumber3")} />
          <input
            className="cardNumber" type="text" maxLength="4"
            onChange={this.handleInputValue("cardNumber4")} />
          </div>
          <div className='PMetc'>
          <div className='PMtitleCardCompany'>카드사</div>
          <select className="cardCompany" onChange={this.handleInputValue("cardCompany")}>
            <option value=""></option>
            <option value="현대">현대</option>
            <option value="삼성">삼성</option>
            <option value="롯데">롯데</option>
          </select>
          <div className='PMtitle'>유효기간</div> 
          <input
            className="cardNumber" type="text" placeholder='mm/yy' maxLength="5"
            onChange={this.handleInputValue("validThru")} />
          </div>
          </> }
          {howPay === 'account' && 
          <>
          <h1>계좌결제</h1>
          <div className='PMaccount'>
          <div className='PMbank'>
            <div className='PMaccTitle'>은행</div> 
            <div className='PMaccTitle'>계좌번호</div> 
          </div>
          <div className='PMinput'>
            <select className='PMaccContent' onChange={this.handleInputValue("bank")}>
              <option value='' ></option>
              <option value='신한'>신한</option>
              <option value='우리'>우리</option>
              <option value='국민'>국민</option>
            </select>
            <input
              className="PMaccContent" type="text"
              onChange={this.handleInputValue("accountNumber")} /> 
          </div>
          </div>
          </> }
          
          <button className='btnPMpay' onClick={this.pay}>결제하기</button>
          </div>
        </div>
      
      )
  }
}

export default withRouter(PaymentModal)

