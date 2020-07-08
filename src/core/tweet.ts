/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */


interface User {
    avatar: string,
    nickname: string,
    name: string,
}

export interface Tweet {
  id: string;
  user?: User;
  screenName: string;
  text: string;
  time: string;
  isPinned: boolean;
  isReplyTo: boolean;
  isRetweet: boolean;
  urls: string[];
  hashtags: string[];
  images: string[];
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  wasChanged: boolean;
  wasDeleted: boolean;
}


