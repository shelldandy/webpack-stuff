import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  render () {
    return (
      <h1>Hello Webpack from React</h1>
    )
  }
}

ReactDOM.render(<Hello />, document.body)
