import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./component/Header";
import { Movielist } from "./Pages/Movielist";
import { Trending } from "./Pages/Trending";
import { Watched } from "./Pages/Watched";
import { Add } from "./Pages/Add";
import { Movies} from "./Pages/Movies";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";


import {GlobalProvider} from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>

        <Switch>
          <Route exact path="/trending">
            <Trending/>
          </Route>

          <Route path="/movielist">
            <Movielist/>
          </Route>

          <Route path="/movies">
            <Movies/>
          </Route>


          <Route path="/watched">
            <Watched/>
          </Route>

          <Route path="/add">
            <Add/>
          </Route>
        </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
