/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React from "react";
import { useAccounts } from "../../store/accounts/hook";
import {ContainerVCenter, FeedContainerTitle} from "../../theme";
import { FeedWidget } from "../../components/FeedWidget";
import {ShowTweetsSwitch} from "../../components/ShowTweetsSwitch";

export function FeedScreen(): React.ReactElement {
  const accounts = useAccounts();

  const accountsId = accounts.map((a) => a.id);

  return (
    <ContainerVCenter>
      <FeedContainerTitle>
        <h1>Feed</h1>
        <ShowTweetsSwitch/>
      </FeedContainerTitle>
      {accountsId.length === 0 ? (
        "Please, add account first"
      ) : (
        <FeedWidget accounts={accountsId} />
      )}
    </ContainerVCenter>
  );
}
