/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Tweet } from "../../core/tweet";

// @ts-ignore
import { Tweet as TweetComponent } from "react-fake-tweet";
import Linkify from 'react-linkify';
import "react-fake-tweet/dist/index.css";

interface TweetWidgetProps {
  data: Tweet;
}

export const TweetWidget: React.FC<TweetWidgetProps> = ({ data }) => {

    let backColor = "#FFF";
    if (data.wasChanged) backColor = "#b3b37b";
    if (data.wasDeleted) backColor = "#ff5858";

  return (
    <div style={{ marginBottom: "20px" }}>
      <TweetComponent
        config={{
          user: {
            avatar: data.user?.avatar,
            nickname: data.user?.nickname,
            name: data.user?.name,
          },
          text: <Linkify>{data.text}</Linkify>,
          date: data.time,
        }}
        style={{backgroundColor: backColor}}
      />
    </div>
  );
};
