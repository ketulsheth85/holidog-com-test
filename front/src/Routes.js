import React from "react";
import NavBar from "./components/NavBar";
import Book from "./views/Book";
import Author from "./views/Author";
import BookData from "./views/BookData";
import AuthorData from "./views/AuthorData";
import BookEdit from "./views/BookEdit";
import AuthorEdit from "./views/AuthorEdit";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Book" component={Book} />
        <Route exact path="/Book/View/:id" component={BookData} />
        <Route exact path="/Book/Edit/:id" component={BookEdit} />
        <Route exact path="/Book/Add" component={BookEdit} />
        <Route exact path="/">
          <Redirect to="/Book" />
        </Route>
        <Route exact path="/Author" component={Author} />
        <Route exact path="/Author/View/:id" component={AuthorData} />
        <Route exact path="/Author/Edit/:id" component={AuthorEdit} />
        <Route exact path="/Author/Add" component={AuthorEdit} />
      </Switch>
    </div>
  );
};
