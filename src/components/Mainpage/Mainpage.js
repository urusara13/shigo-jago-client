import React, { Component } from 'react';
import { Route , withRouter } from "react-router-dom"; 
import Search from './Search'
import ResultList from '../ResultList/ResultList'
import Chat from './Chat'
import Game from './Game'
import { chatIcon } from '../../images/resources'
import logo from '../../images/11.png'
let arr
class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      reservation: {
        adult: null,
        child: null
      },
      isChat: false,
      isGame: false
    }
    this.setReservation = this.setReservation.bind(this)
  }

  setReservation(data) {
    localStorage.setItem("reservation",JSON.stringify(data))

    this.setState({
      reservation: data
    })
    this.props.history.push('/resultlist')
  }

  render() {
    const { isLogin } = this.props;
    const { reservation, isChat, isGame } = this.state
    
    return(
      <div>
      <Route 
        path='/resultlist'
        render={() => (
          <ResultList reservation={reservation}/>
      )}  />
      <Route 
        exact
        path='/'
        render={() => (
          <Search setReservation={this.setReservation} isLogin={isLogin}/>
      )} />
        <img src={chatIcon} alt={'kakaotalk'} className="chatter" style={{"width":"100px", "height": "100px", "position":"relative", "top":"850px", "left": "95%"}} onClick={() => this.setState({isChat: !isChat})}>
        </img>  
        <Chat isChat={isChat}/>
        {/* <img src={logo} alt={'kakaotalk'} className="chatter" style={{"width":"100px", "height": "100px", "position":"relative", "top":"700px", "left": "88%"}} onClick={() => this.setState({isGame: !isGame})}>
        </img>  
        <Game isGame={isGame}/> */}
      </div>
    ) 
  }
}

export default withRouter(Mainpage)