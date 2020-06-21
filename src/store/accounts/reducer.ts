/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { Account } from "../../core/accounts";
import { ACCOUNTS_PREFIX } from "./";

export default createDataLoaderReducer<Account>(ACCOUNTS_PREFIX);
