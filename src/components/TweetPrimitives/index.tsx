/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import {
  HashTag,
  Mention,
  TweetText,
  TweetToken,
  TweetURL,
} from "../../core/tweet";

export interface TweetTokenComponentProps {
  data: TweetToken;
}

export function TweetTokenComponent({
  data,
}: TweetTokenComponentProps): React.ReactElement {
  if (data instanceof TweetURL) {
    return <a href={data.url}>{data.display_url}</a>;
  }

  if (data instanceof Mention) {
    return <a href={`https://twitter.com/${data.username}`}>@{data.username}{" "}</a>;
  }

  if (data instanceof HashTag) {
    return <a href={`https://twitter.com/hashtag/${data.tag}?src=hashtag_click`}>#{data.tag}{" "}</a>;
  }

  if (data instanceof TweetText) {
    return <span>{data.text}</span>;
  }

  return <></>;
}
