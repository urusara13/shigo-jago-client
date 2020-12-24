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
  
  componentDidMount() {
    axios.post('http://localhost:4000/search/list')
    .then(res => {
      console.log(res.data)
      this.setState({
        list: res.data
      })
    })
  }
  
  render() {
    const { list } = this.state;

    return (
      list.map((ele, idx) => (
        <Listentry list={ele} key={idx} />
      ))
    )
  }


}

export default List;
