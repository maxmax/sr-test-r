import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Sub from './Sub';
import Jumbotron from '../components/Jumbotron';
import Nav from './Nav';

export default class BaseLayout extends React.Component {

  render() {

    const { children } = this.props;

    return (
      <div className="landing-app">
        <Sub />
        <Jumbotron />
        <Nav />
        <section className="main">
          {children}
        </section>
      </div>
    );
  }
}
