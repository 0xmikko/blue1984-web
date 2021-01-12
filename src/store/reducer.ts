/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { combineReducers } from "redux";
import accounts from './accounts/reducer'
import app from './app/reducer'
import tweets from "./tweets/reducer";
import {operationReducer} from 'dlt-operations'

export default combineReducers({
  accounts,
  app,
  operations: operationReducer,
  tweets,
});
