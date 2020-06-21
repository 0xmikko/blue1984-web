/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { Tweet } from "../../core/tweet";
import { TWEETS_PREFIX } from "./";

export default createDataLoaderReducer<Tweet>(TWEETS_PREFIX);
