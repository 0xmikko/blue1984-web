/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import { combineReducers } from "redux";
import accounts from './accounts/reducer'
import operations from './operations/reducer'
import profile from './profile/reducer'
import tweets from "./tweets/reducer";

export default combineReducers({
  accounts,
  operations,
  profile,
  tweets,
});
