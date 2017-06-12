import React from 'react'
import { Link } from 'react-router';

import BaseLayout from '../layout/Base';

export default React.createClass({
  render() {

    const instanceContent = (
      <div>
        <h2>Winners</h2>
      </div>
    );

    return (
      <BaseLayout>
        {instanceContent}
      </BaseLayout>
    );

  }
})
