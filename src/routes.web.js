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
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id/:name" exact>
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
