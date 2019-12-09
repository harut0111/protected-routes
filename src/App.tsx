import React from 'react';
import './style/index.scss';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <h1>Protected React Router</h1>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/app' component={Layout}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
