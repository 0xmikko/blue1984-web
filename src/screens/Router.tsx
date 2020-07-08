/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Redirect, Route, Switch } from "react-router";
import AppBar from "../components/AppBar/AppBar";
import { TweetsFeedScreen } from "./Tweets/TweetsFeedScreen";
import { AccountsListScreen } from "./Accounts/AccountsListScreen";
import { AccountsDetailsScreen } from "./Accounts/AccountsDetailsScreen";
import { AccountsNewScreen } from "./Accounts/AccountsNewScreen";
import {WelcomeView} from "../containers/Accounts/WelcomeView";

export const Router: React.FC = () => {

  return (
    <>
      <AppBar />
      <Switch>
        <Route
          exact
          path="/accounts"
          component={AccountsListScreen}
        />
        <Route
          exact
          path="/accounts/new"
          component={AccountsNewScreen}
        />
        <Route
          exact
          path="/accounts/:id"
          component={AccountsDetailsScreen}
        />
        <Route
          exact
          path="/feed"
          component={TweetsFeedScreen}
        />
        <Route
            exact
            path="/help"
            component={WelcomeView}
        />
        <Route path={"*"}>
          <Redirect to={"/feed"} />
        </Route>
      </Switch>
    </>
  );
};
