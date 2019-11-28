import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

export default function RouterApp() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id/:name" exact>
            <Detail />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}
