import axios from "axios"; //axios 초기 설정 필요
import React, { Component } from "react"; 
import ReservationListEntry from "./ReservationListEntry";

class ReservationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : [],
    };
  }
  
  componentDidMount() {
    const { accessToken } = this.props

    axios.get(`${process.env.REACT_APP_URL}/mypage/reserveinfo`, 
    { headers: { "Authorization" : `Bearer ${accessToken}`} })
    .then(res => { this.setState({ userInfo : res.data.data }) })
    .catch(err => err)
  }

  render() {
      const { userInfo } = this.state;
      const { accessToken } = this.props;
      
      return (
        <div className='reservationInfoContainer'>
          {userInfo.map((ele, idx) => {
            return(
              <ReservationListEntry key={idx} ele={ele} accessToken={accessToken} reload={this.reload} />
          )})}
        </div>
      )
  }

}
export default ReservationList;

