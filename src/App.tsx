import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { FormPage } from './pages/FormPage'
import { HomePage } from './pages/HomePage'

import './App.css'
import './assets/google-sans-cufonfonts/font.css'

const App: React.FC = () =>
  <Router>
    <Route path="/form" component={FormPage} exact={true} />
    <Route path="/" component={HomePage} exact={true} />
  </Router>
export default App
