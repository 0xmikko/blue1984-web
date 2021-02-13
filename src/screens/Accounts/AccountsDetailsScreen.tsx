/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { DetailsView } from "../../containers/Accounts/DetailsView";

import actions from "../../store/actions";
import { accountDetailsSelector } from "../../store/accounts";
import { DataDetailsView } from "rn-web-components";
import { ContainerVCenter, FeedContainerTitle } from "../../theme";
import {ShowTweetsSwitch} from "../../components/ShowTweetsSwitch";

interface MatchParams {
  id: string;
}

interface AccountDetailsScreenProps extends RouteComponentProps<MatchParams> {}

export const AccountsDetailsScreen: React.FC<AccountDetailsScreenProps> = ({
  match: {
    params: { id },
  },
}: AccountDetailsScreenProps) => {
  const dispatch = useDispatch();

  const getDetails = (opHash: string) => {
    console.log("GET DETAILS");
    dispatch(actions.accounts.getDetails(id, opHash));
  };

  const data = useSelector(accountDetailsSelector(id));

  return (
    <ContainerVCenter>
      <FeedContainerTitle>
        {" "}
        <h1>{data?.username}</h1>
        <ShowTweetsSwitch/>
      </FeedContainerTitle>
      <DataDetailsView
        data={data}
        getDetails={getDetails}
        renderItem={DetailsView}
      />
    </ContainerVCenter>
  );
};
