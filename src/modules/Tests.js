import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Modal from '../components/Modal';

import BaseLayout from '../layout/Base';

export default class Tests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: true,
    }));
  }

  handleClose() {
    this.setState(prevState => ({
      isToggleOn: false
    }));
  }

  render() {

    const intmodal = (
      <Modal>
        <div className="close" onClick={(e) => this.handleClose(this)}>×</div>
        <h2>Already leaving?</h2>
        <p>We have a special offer for you!</p>
        <p>Recieve a free case and get introduced to our site by getting the random CS:GO item. Just sign in and use promocode START!</p>
        <button className="btn-try">TRY NOW!</button>
        <hr />
        <p className="timer">02:35</p>
        <p className="transform">Untill offer ends</p>
      </Modal>
    );

    const instanceContent = (
      <section className="content-container">
        <section>
          <section className="auto">
            <h2>/test_modules</h2>
            <a onClick={(e) => this.handleClick()} className="pointer">Open Modal</a>
            {this.state.isToggleOn ? intmodal : null}
          </section>
        </section>
      </section>
    );

    return (
      <BaseLayout>
        {instanceContent}
      </BaseLayout>
    );

  }
}
