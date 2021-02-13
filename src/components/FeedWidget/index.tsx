/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { TweetCard } from "../TweetCard";
import { DataListView } from "rn-web-components";
import { Form } from "react-bootstrap";
import { appSelector } from "../../store/app";
import { useTweets } from "../../store/tweets/hook";
import { ShowTweetsSwitch } from "../ShowTweetsSwitch";

export interface FeedWidgetProps {
  accounts: Array<string>;
}

export function FeedWidget({ accounts }: FeedWidgetProps): React.ReactElement {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const limit = 50;

  const data = useTweets();
  const { showDeletedTweets } = useSelector(appSelector);

  const getList = (opHash: string) => {
    if (accounts && accounts.length > 0)
      dispatch(actions.tweets.getFeed(accounts, opHash, 0, limit));
  };

  useEffect(() => {
    getList("r");
  }, [accounts, showDeletedTweets]);

  const loadMore = (opHash: string) => {
    dispatch(
      actions.tweets.getFeed(accounts, opHash, offset + limit, limit, true)
    );
    setOffset(offset + limit);
  };

  const noAccountsFound = () => (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
      }}
    >
      No tweets to show
    </div>
  );

  return (
    <DataListView
      data={data}
      getList={getList}
      loadMore={loadMore}
      renderItem={TweetCard}
      noItemsFound={noAccountsFound}
      onSelect={(id) => {}}
    />
  );
}
