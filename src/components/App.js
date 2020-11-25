import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/home";
import AboutPage from "./about/about";
import CoursesPage from "./courses/courses";
import Header from "./common/header";
import PageNotFound from "./common/pageNotFound";

const App = () => (
    <div className="container-fluid">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route component={PageNotFound} />
        </Switch>
  </div>
);

export default App;
