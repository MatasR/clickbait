import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Home from './pages/Home/Home'
import AllColors from './pages/AllColors/AllColors'
import Color from './pages/Color/Color'

function App() {
    return (
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/all-colors' component={AllColors} />
            <Route path='/color/:id' component={Color} />
          </Switch>
        </BrowserRouter>
    );
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
