import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Step2 from './step2';
import Step3 from './step3';
import './step.css';
import './App.css';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <Route path = "/step2"><Step2/></Route>
      <Route path = "/step3"><Step3/></Route>
      <br/>
      <Link to="/step2">step2</Link>
      <br/>
      <Link to="/step3">step3</Link>
      {/* <div> */}
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/step3">step3</Link>
          </li> */}
          {/* <li>
            <Link to="/step2">step2</Link>
          </li>
          <li>
            <Link to="/step3">step3</Link>
          </li>
          <li>
            <Link to="/dash">dash</Link>
          </li>
        </ul>  */}

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Switch> */}
          {/* <Route exact path="/">
            <Home />
          </Route> 
                    {/* <Route component={Step3}>
            {/* <Dashboard /> */}
          {/* </Route>  */}
          
          {/* <Route component={Step2}>
            {/* <step2 /> */}
          {/* </Route>
          <Route component={Step3}>
            {/* <Dashboard /> */}
          {/* </Route>
          <Route exact path="/dash">
            <Dashboard />
          </Route>  */}
        {/* </Switch> */}
      {/* </div> */}
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
