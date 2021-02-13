/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

import { SplashScreen } from "./screens/SplashScreen";

import actions from "./store/actions";
import { RootState } from "./store";

import { Router } from "./screens/Router";
import { JoinScreen } from "./screens/JoinScreen/JoinScreen";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(actions.app.getApp());
  })

  const appStatus = useSelector((state: RootState) => state.app.status);

  switch (appStatus) {
    case "NEW":
      return <JoinScreen />;

    case "READY":
      return <Router />;
  }

  return <SplashScreen />;
};

export default App;
