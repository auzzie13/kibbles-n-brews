import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Members from "./pages/Members";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const Page404 = ({ location }) => (
  <div>
    <h2>404 :(</h2>
  </div>
);

function App() {
  return (
    <ToastProvider>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/members"} component={Members} />
          <Route path={"/events"} component={Events} />
          <Route path={"/signup"} component={SignUp} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/login"} component={Login} />
          <Route path={"/landing"} component={Landing} />
          <Route path={"/blog"} component={Blog} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
