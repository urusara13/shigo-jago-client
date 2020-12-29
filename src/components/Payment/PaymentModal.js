import axios from "axios";
import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";


class PaymentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber1: null,
      cardNumber2: null,
      cardNumber3: null,
      cardNumber4: null,
      validThru: null,
      accountNumber: null,
      message: null
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.pay = this.pay.bind(this);
    this.goToMypage = this.goToMypage.bind(this);
  }

  pay() {
    const { accessToken, howPay, res, hotelName } = this.props;
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, accountNumber} = this.state;
    const cardNumber = `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`
    
    if(!accessToken) {
      this.setState({message: '로그인을 먼저 진행해주세요.'})
    } 
    else {
      axios.post('http://localhost:4000/detail/payment',
        { reserveInfo: {
            checkedin: '2020-12-01', //res.checkIn
            checkedout: '2020-12-02', //res.checkOut
            adult: res.adult,
            child: res.child,
            hotelName: hotelName },
          payInfo: {
            price: '100000', //수정필요
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
      .catch(err => console.log(err))
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
          <div className='loginModal'>      
          <div>{message}</div> 
          {message === '성공적으로 예약되었습니다.' && 
            <button className="btnClose" onClick={this.goToMypage}>확인</button>}
          {message === '로그인을 먼저 진행해주세요.' && 
            <button className="btnClose" onClick={close}>확인</button>}
          </div>
        </div> :
        <div className='modal1'>
          <div className='loginModal'>       
          <span className="btnClose" onClick={close}>&times;</span>
          {howPay === 'card' && 
          <>
          <div>카드결제</div>
          <input
            className="cardNumber" type="text"
            onChange={this.handleInputValue("cardNumber1")} />
          <input
            className="cardNumber" type="text"
            onChange={this.handleInputValue("cardNumber2")} />
          <input
            className="cardNumber" type="text"
            onChange={this.handleInputValue("cardNumber3")} />
          <input
            className="cardNumber" type="text"
            onChange={this.handleInputValue("cardNumber4")} />
          <input
            className="cardNumber" type="text" placeholder='유효기간'
            onChange={this.handleInputValue("validThru")} />
          </> }
          {howPay === 'account' && 
          <>
          <div>계좌결제</div>
          <input
            className="accountNumber" type="text"
            onChange={this.handleInputValue("accountNumber")} /> 
          </> }
          <button onClick={this.pay}>결제하기</button>
          </div>
        </div>
      
      )
  }
}

export default withRouter(PaymentModal)

