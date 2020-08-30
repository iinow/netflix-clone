import React from 'react'
import { Main } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
