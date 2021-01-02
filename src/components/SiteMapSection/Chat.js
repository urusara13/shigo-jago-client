import React, { Component } from 'react';

export default class Chat extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
        window.open('http://localhost:3080/set','chat', 'top=100px, left=100px, height=880px, width=1025px')
        window.open('/', '_self')
    }
    render() {
        return(
            <div>

            </div>
        )
    }
}