/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import {Tweet} from "./tweet";

export interface Account {
  id: string;
  bluID: string;
  deleted?: number;
  cached?: number;
  lastCached?: string;

  screenName: string;
  profileImage: string;
  backgroundImage: string;

  name: string;
  bio: string;
  userMentions: string[];
  hashtags: string[];
  urls: [];
  location: string;
  url: string;
  joinDate: string;
  tweetCount: number;

  tweets?: Tweet[];
}

export interface AccountCreateDTO {
  id: string;
}
