import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './pages/Home';
import AllColors from './pages/AllColors';

function App() {
    return (
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='' component={Home} />
            <Route exact path='/all-colors' component={AllColors} />
          </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
