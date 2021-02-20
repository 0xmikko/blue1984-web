/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React, {useMemo} from "react";
import {HashTag, Mention, Tweet, TweetText, TweetToken, TweetURL,} from "../../core/tweet";

// @ts-ignore
import {Tweet as TweetComponent} from "react-fake-tweet";
import "react-fake-tweet/dist/index.css";
import {TweetImg} from "./styles";
import {TweetTokenComponent} from "../TweetPrimitives";

interface TweetWidgetProps {
  data: Tweet;
  onSelect: (id: string) => void;
}

export function TweetHeader({ children }: React.PropsWithChildren<any>) {
  return <div>{children}</div>;
}

function renderTweet(data: Tweet): React.ReactElement {
  const tokens: Array<TweetToken> = [];
  data.entities?.hashtags?.forEach((e) =>
    tokens.push(new HashTag(e.start, e.end, e.tag))
  );
  data.entities?.urls?.forEach((e) => {
    tokens.push(
      new TweetURL(e.start, e.end, e.url, e.expanded_url, e.display_url)
    );
  });
  data.entities?.mentions?.forEach((e) => {
    tokens.push(new Mention(e.start, e.end, e.username));
  });

  if (tokens.length === 0) {
    return <>{data.text}</>;
  }

  tokens.sort((a, b) => (a.start > b.start ? 1 : -1));

  console.log(data.entities?.urls);

  const resultTokens = [...tokens] || [];
  for (let i = 0; i < tokens.length - 1; i++) {
    const currentEnd = tokens[i].end + 1;
    const nextStart = tokens[i + 1].start;
    if (currentEnd < nextStart) {
      resultTokens.push(new TweetText(currentEnd - 1, nextStart, data.text));
    }
  }

  if (tokens[0].start !== 0) {
    resultTokens.push(new TweetText(0, tokens[0].start, data.text));
  }

  if (tokens[tokens.length - 1].end < data.text.length - 1) {
    resultTokens.push(
      new TweetText(tokens[tokens.length - 1].end, data.text.length, data.text)
    );
  }

  resultTokens.sort((a, b) => (a.start > b.start ? 1 : -1));

  console.log("RR", resultTokens);

  return (
    <>
      {resultTokens.map((a) => (
        <TweetTokenComponent data={a} key={data.id + a.start.toString()} />
      ))}
    </>
  );
}

export function TweetCard({ data }: TweetWidgetProps): React.ReactElement {
  let backColor = "#FFF";
  if (data.wasDeleted) backColor = "#ff5858";

  const renderedTweet = useMemo(() => renderTweet(data), [data]);

  const tweetText =
    data.media?.length > 0 ? (
      <>
        {renderedTweet}
        <br />
        <TweetImg src={data.media[0].url} width={"100%"} />
      </>
    ) : (
      renderedTweet
    );

  return (
    <div style={{ marginBottom: "20px" }}>
      <TweetComponent
        config={{
          user: {
            avatar: data.author?.profile_image_url || "",
            nickname: data.author?.username || "",
            name: data.author?.name || "",
          },
          text: tweetText,
          // (
          //   <Linkify
          //     hrefDecorator={(url) => {
          //       const found = data.urls.filter((e) => url.startsWith(e));
          //       console.log(found);
          //       return found.length > 0 ? found[0] : url;
          //     }}
          //   >
          //     {data.text}
          //   </Linkify>
          // ),
          date: data.created_at,
        }}
        style={{ backgroundColor: backColor }}
      />
    </div>
  );
}
