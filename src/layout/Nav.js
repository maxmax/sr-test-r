import React from 'react'
import { Link } from 'react-router';

export default React.createClass({

  render() {
    return (
      <div className="navigation">
        <section className="content-container">
          <ul className="nav">
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/prizes" activeClassName="active">Призы</Link>
            </li>
            <li>
              <Link to="/matches" activeClassName="active">Матчи</Link>
            </li>
          </ul>
          <ul className="nav right">
            <li>
              <Link to="/guide" activeClassName="active">Как играть?</Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }

})
