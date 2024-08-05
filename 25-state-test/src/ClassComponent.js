import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        count: 0,
    } 
    
  render() {
    const {count} = this.state;

    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={() => {
            this.setState({ count: count + 2})
        }}>+2</button>
      </>
    )
  }
}
