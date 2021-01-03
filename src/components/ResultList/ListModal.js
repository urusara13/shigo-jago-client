import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './List.css';

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: null,
      review: null
    };
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async getDetail() {
    try{    
      const { contentid, contenttypeid } = this.props.list
      const detail = await axios.post('http://localhost:4000/search/detail', {
        contentid: contentid,
        contenttypeid: contenttypeid
      })

      if (!detail.data.firstimage) {
        detail.data.firstimage = 'http://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg'
      }

      this.setState({ hotelDetail: detail.data })
    }
      catch {
        const { contentid, contenttypeid } = this.props.list
        const detail = await axios.post('http://localhost:4000/search/detail', {
          contentid: contentid,
          contenttypeid: contenttypeid
        })
  
        if (!detail.data.firstimage) {
          detail.data.firstimage = 'http://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg'
        }
        this.setState({ hotelDetail: detail.data })
      }

  }

  async getReview() {
    
    try{
      const { contentid, contenttypeid } = this.props.list
      const review = await axios.post('http://localhost:4000/detail/review',{ 
        contentId: contentid,
        contenttypeId: contenttypeid
      },{
        timeout: 3000
      })
      this.setState({review: review.data.data})
    }
    catch {
      const { contentid, contenttypeid } = this.props.list
      const review = await axios.post('http://localhost:4000/detail/review',{ 
        contentId: contentid,
        contenttypeId: contenttypeid
      },{
        timeout: 3000
      })
      this.setState({review: review.data.data})
    }
  }

  async componentDidMount() {
    this.getReview()
    this.getDetail()
  }

  render() {
    const { close, reservation, list } = this.props
    const { hotelDetail, review } = this.state

    const newInfo = {}; //Payment props 넘겨주기 위함
    newInfo.reservation = reservation;
    newInfo.hotelDetail = hotelDetail;
    newInfo.totalPrice = list.price

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
              <h2>리뷰</h2>
              {review && review.map((ele, idx) => (
                <div key={idx}>
                <div>{idx}.{ele.title}</div>
                <div>{ele.description}</div>
                </div>
              ))}
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
