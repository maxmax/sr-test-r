import React from 'react'
import { Link } from 'react-router';
import Panel from '../components/Panel';

import BaseLayout from '../layout/Base';

export default React.createClass({
  render() {

    const instanceContent = (
      <section className="content-container">
        <section>
          <section className="auto">
            <Panel>
              <header>
                <h2>КАК ИГРАТЬ?</h2>
              </header>
              <section className="panel-body auto">
                <h3>Item 1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>Item 2</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h3>Item 3</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <br />
              </section>
            </Panel>
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
})
