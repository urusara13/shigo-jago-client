import React, { Component } from 'react';
export default class Chat extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
        // window.open('http://localhost:3080/set','chat', 'top=100px, left=100px, height=880px, width=1025px')
        // window.open('/', '_self')
    }
    render() {
        const { isChat } = this.props
        return isChat && (
            <div>
                <object data="http://localhost:3080/set" width="510px" height="830px" style={{float: 'right', "position":"relative", "top":"200px", "left": "10px"}}></object>
            </div>
        )
    }
}