import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (this.props.children || <Home />)
  }
})
