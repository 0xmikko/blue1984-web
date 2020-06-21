/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import * as accounts from "./accounts/actions";
import * as profile from "./profile/actions";
import * as tweets from "./tweets/actions";
import * as operations from "./operations/actions";

export default {
  accounts,
  profile,
  operations,
  tweets,
};
