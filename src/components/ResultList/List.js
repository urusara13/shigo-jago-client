import React, { Component } from "react"; 
import axios from "axios";

import Listentry from "./Listentry"
import ListModal from "./ListModal"


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [], 
    };
  }
  
  async componentDidMount() {
    const { reservation } = this.props

    const hotelList = await axios.post('http://localhost:4000/search/list', {
      areacode: reservation.areacode,
      sigungucode: reservation.sigungucode
    })

    this.setState({
      list: hotelList.data.data
    })

  }
  
  render() {
    const { list } = this.state
    const { reservation } = this.props
 
    return (
      list.map((ele, idx) => (
        <Listentry list={ele} reservation={reservation} key={idx} />
      ))
    )
  }


}

export default List;
