import React, { Component } from 'react'

export default class HandlerEx extends Component {
    state = {click :'Hello World!'}
    render() {
        // const {click} = this.state;
    return (
        <>
            <h1>HandlerEx</h1>
            <h1>{this.state.click}</h1>
            <button onClick={() => {
                this.setState({click: 'Goodbye World!'})
            }}>클릭</button>
        </>
    )
  }
}
