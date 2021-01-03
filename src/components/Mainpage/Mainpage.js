import React, { Component } from 'react';
import { Route , withRouter } from "react-router-dom"; 
import Search from './Search'
import ResultList from '../ResultList/ResultList'
import Chat from './Chat'


class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      reservation: {
        adult: null,
        child: null
      },
      isChat: false
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
    const { reservation, isChat } = this.state
    
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
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzNiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjI4NTcgMTAuNTcxNEMyOC4yODU3IDQuODg2MTYgMjEuOTU3NiAwLjI4NTcxNCAxNC4xNDI5IDAuMjg1NzE0QzYuMzI4MTMgMC4yODU3MTQgMCA0Ljg4NjE2IDAgMTAuNTcxNEMwIDEzLjgyNTkgMi4wODkyOSAxNi43Mzg4IDUuMzQzNzUgMTguNjI3MkM0LjY2MDcxIDIwLjI5NDYgMy43NzY3OSAyMS4wNzgxIDIuOTkzMyAyMS45NjIxQzIuNzcyMzIgMjIuMjIzMiAyLjUxMTE2IDIyLjQ2NDMgMi41OTE1MiAyMi44NDZDMi42NTE3OSAyMy4xODc1IDIuOTMzMDQgMjMuNDI4NiAzLjIzNDM4IDIzLjQyODZDMy4yNTQ0NiAyMy40Mjg2IDMuMjc0NTUgMjMuNDI4NiAzLjI5NDY0IDIzLjQyODZDMy44OTczMiAyMy4zNDgyIDQuNDc5OTEgMjMuMjQ3OCA1LjAyMjMyIDIzLjEwNzFDNy4wNTEzNCAyMi41ODQ4IDguOTM5NzMgMjEuNzIxIDEwLjYwNzEgMjAuNTM1N0MxMS43MzIxIDIwLjczNjYgMTIuOTE3NCAyMC44NTcxIDE0LjE0MjkgMjAuODU3MUMyMS45NTc2IDIwLjg1NzEgMjguMjg1NyAxNi4yNTY3IDI4LjI4NTcgMTAuNTcxNFpNMzYgMTUuNzE0M0MzNiAxMi4zNTk0IDMzLjc5MDIgOS4zODYxNiAzMC4zOTUxIDcuNTE3ODZDMzAuNjk2NCA4LjUwMjIzIDMwLjg1NzEgOS41MjY3OSAzMC44NTcxIDEwLjU3MTRDMzAuODU3MSAxNC4xNjc0IDI5LjAwODkgMTcuNDgyMSAyNS42NTQgMTkuOTMzQzIyLjU0MDIgMjIuMTgzIDE4LjQ2MjEgMjMuNDI4NiAxNC4xNDI5IDIzLjQyODZDMTMuNTYwMyAyMy40Mjg2IDEyLjk1NzYgMjMuMzg4NCAxMi4zNzUgMjMuMzQ4MkMxNC44ODYyIDI0Ljk5NTUgMTguMjIxIDI2IDIxLjg1NzEgMjZDMjMuMDgyNiAyNiAyNC4yNjc5IDI1Ljg3OTUgMjUuMzkyOSAyNS42Nzg2QzI3LjA2MDMgMjYuODYzOCAyOC45NDg3IDI3LjcyNzcgMzAuOTc3NyAyOC4yNUMzMS41MjAxIDI4LjM5MDYgMzIuMTAyNyAyOC40OTExIDMyLjcwNTQgMjguNTcxNEMzMy4wMjY4IDI4LjYxMTYgMzMuMzI4MSAyOC4zNTA0IDMzLjQwODUgMjcuOTg4OEMzMy40ODg4IDI3LjYwNzEgMzMuMjI3NyAyNy4zNjYxIDMzLjAwNjcgMjcuMTA0OUMzMi4yMjMyIDI2LjIyMSAzMS4zMzkzIDI1LjQzNzUgMzAuNjU2MyAyMy43NzAxQzMzLjkxMDcgMjEuODgxNyAzNiAxOC45ODg4IDM2IDE1LjcxNDNaIiBmaWxsPSIjNTgxQjk4Ii8+Cjwvc3ZnPgo=" className="chatter" style={{"float":"right", "width":"100px", "height": "100px", "position":"relative", "top":"850px"}} 
      onClick={() => this.setState({isChat: !isChat})}>
        </img>
        <Chat isChat={isChat}/>
      </div>
    ) 
  }
}


export default withRouter(Mainpage)