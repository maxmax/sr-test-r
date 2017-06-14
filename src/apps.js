import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Prizes from './modules/Prizes'
import Guide from './modules/Guide'
import Winners from './modules/Winners'
import Matches from './modules/Matches'
import Tests from './modules/Tests'


import './Base/main.scss';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      {/* make them children of `App` */}
      <Route path="/prizes" component={Prizes}/>
      <Route path="/guide" component={Guide}/>
      <Route path="/winners" component={Winners}/>
      <Route path="/matches" component={Matches}/>
      <Route path="/test_modules" component={Tests}/>
    </Route>
  </Router>
), document.getElementById('app'))
