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
import Linkify from "react-linkify";
import "react-fake-tweet/dist/index.css";

interface TweetWidgetProps {
  data: Tweet;
  onSelect: (id: string) => void;
}

export function TweetHeader({children} : React.PropsWithChildren<any> ) {
    return <div>{children}</div>
}

export function TweetWidget({ data }: TweetWidgetProps): React.ReactElement {

  let backColor = "#FFF";
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
          text: (
            <Linkify
              hrefDecorator={(url) => {
                const found = data.urls.filter((e) => url.startsWith(e));
                console.log(found);
                return found.length > 0 ? found[0] : url;
              }}
            >
              {data.text}
            </Linkify>
          ),
          date: data.time,
        }}
        style={{ backgroundColor: backColor }}
      />
    </div>
  );
}
