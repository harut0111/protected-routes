import React from "react";
import "./style/index.scss";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={Layout} />
          <Route path="*" component={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
