import React, { Component } from 'react';
import { Route , withRouter } from "react-router-dom"; 
import Search from './Search'
import ResultList from '../ResultList/ResultList'


class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      reservation: {
        adult: null,
        child: null
      }
    }
    this.setReservation = this.setReservation.bind(this)
  }

  setReservation(data) {
    this.setState({
      reservation: data
    })

    this.props.history.push('/resultlist')
  }

  render() {
    const { isLogin } = this.props;
    const { reservation } = this.state
    
    return(
      <div>
      <Route 
        path='/resultlist'
        render={() => (
          <ResultList reservation={reservation}/>
      )}  />
      <Route 
        path='/'
        render={() => (
          <Search setReservation={this.setReservation} isLogin={isLogin}/>
      )} />
      </div>
    )
  }
}


export default withRouter(Mainpage)