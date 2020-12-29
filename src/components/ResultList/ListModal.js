import React, { Component } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: null,
      price: {
        adult: [20000, 23000, 30000, 31000, 38000, 40000],
        child: [8000, 10000, 12000]
      }
    };
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.toDate = this.toDate.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  toDate(str) {
    const year = str.substr(0,4);
    const month = str.substr(5,2);
    const date = str.substr(8,10);

    return new Date(Number(year), Number(month), Number(date));
  }
  
  async getDetail() {
    const { contentid, contenttypeid } = this.props.list
    const detail = await axios.post('http://localhost:4000/search/detail',{
      contentid: contentid,
      contenttypeid: contenttypeid
    })

    this.setState({
      hotelDetail: detail.data
    })
  }

  componentDidMount() {
    this.getDetail()
  }

  render() {
    const { close, reservation } = this.props
    const { adult, child, checkIn, checkOut } = this.props.reservation
    const { hotelDetail, price } = this.state
    
    const totalPrice =
      (adult * price.adult[Math.floor(Math.random() * price.adult.length)] + 
       child * price.child[Math.floor(Math.random() * price.child.length)]) *
      ((this.toDate(checkOut) - this.toDate(checkIn)) / 86400000) //숙박일수 계산

    //체크아웃 체크인 날짜 유효성 검사 필요  
    const newInfo = {}; //Payment props 넘겨주기 위함
    newInfo.reservation = reservation;
    newInfo.hotelDetail = hotelDetail;
    newInfo.totalPrice = totalPrice;

    return (
      hotelDetail ?
      <>
      <div className='modal1'>
        <div className='loginModal'>       
        <span className="btnClose" onClick={close}>&times;</span>
        <div>숙소명 : {hotelDetail.title} </div>
        <div>위치 : {hotelDetail.addr1} {hotelDetail.addr2}</div>
        <div>연락처 : {hotelDetail.telname} {hotelDetail.tel}</div>
        <div>상세 : {hotelDetail.overview} </div>
        <img alt='' src={hotelDetail.firstimage} width='200' height='200'></img>
        <div>예약정보-성인: {reservation.adult}</div>
        <div>예약정보-아동: {reservation.child}</div>
        <div>총 금액 : {this.numberWithCommas(totalPrice)}</div>
        <Link to={{
          pathname: '/payment',
          state: {
            reservationInfo: newInfo}
          }}>예약하기</Link>
      </div>
      </div>
      </> 
      : null
    )
  }


}

export default ListModal;
