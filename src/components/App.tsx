import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import PageNotFound from "./NotFound";
import NotesPage from "./NotesPage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="center">BlockFlow!</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/Notes" component={NotesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;