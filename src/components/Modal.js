import React, { Component, PropTypes } from 'react';

export default class Modal extends Component {

  render() {

    const { children } = this.props;

    return (
      <div className='modal'>
        <section>{children}</section>
      </div>
    );
  }
}
