import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './List.css';

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: null,
    };
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async getDetail() {
    const { contentid, contenttypeid } = this.props.list
    const detail = await axios.post('http://localhost:4000/search/detail', {
      contentid: contentid,
      contenttypeid: contenttypeid
    })


    if (!detail.data.firstimage) {
      detail.data.firstimage = 'http://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg'
    }


    this.setState({
      hotelDetail: detail.data
    })
  }

  componentDidMount() {
    this.getDetail()
  }

  render() {
    const { close, reservation, list } = this.props
    const { hotelDetail } = this.state

    const newInfo = {}; //Payment props 넘겨주기 위함
    newInfo.reservation = reservation;
    newInfo.hotelDetail = hotelDetail;
    newInfo.totalPrice = list.price

    console.log(hotelDetail)

    return (
      hotelDetail ?
        <>
          <div className='modal2'>
            <div className='listModal'>
              <span className="btnClose" onClick={close}>&times;</span>
              <div className="hotelName">{hotelDetail.title} </div>
              <div className="hotelImg">
                <img alt='' src={hotelDetail.firstimage} ></img>
              </div>
              <div className="hotelAdd">{hotelDetail.addr1} {hotelDetail.addr2}</div>
              <div className="hotelNum">{hotelDetail.telname} {hotelDetail.tel}</div>
              <div className="hotelDetail">{hotelDetail.overview} </div>

              <div>예약정보-성인: {reservation.adult}</div>
              <div>예약정보-아동: {reservation.child}</div>
              <div>총 금액 : {this.numberWithCommas(list.price)}</div>
              <div className="reservation__btn">
                <Link to={{
                  pathname: '/payment',
                  state: {
                    reservationInfo: newInfo
                  }
                }}>예약하기</Link>
              </div>
            </div>
          </div>
        </>
        : null
    )
  }


}

export default ListModal;
