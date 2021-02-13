/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import {
  RenderListHeader,
  RenderListItem,
} from "../../containers/Accounts/ListView";
import actions from "../../store/actions";
import { ToolbarButton } from "../../containers/ToolbarButton";
import { WelcomeView } from "../../containers/Accounts/WelcomeView";
import { accountsListSelector } from "../../store/accounts";
import { DataListView } from "rn-web-components";
import { ContainerTitle, ContainerVCenter } from "../../theme";

export const AccountsListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getList = (opHash: string) =>
    dispatch(actions.accounts.getList(opHash));

  const data = useSelector(accountsListSelector);

  const onSelect = (id: string) => history.push(`/accounts/${id}`);

  const rightToolbar = (
    <ToolbarButton
      title={"+ Account"}
      onClick={() => history.push("/accounts/new")}
    />
  );

  return (
    <ContainerVCenter>
      <ContainerTitle>
        <h1>Accounts</h1>
        {rightToolbar}
      </ContainerTitle>

      <div style={{width: "100%"}}>
        <DataListView
          data={data}
          getList={getList}
          renderHeader={RenderListHeader}
          renderItem={RenderListItem}
          onSelect={onSelect}
          noItemsFound={() => <WelcomeView />}
        />
      </div>
    </ContainerVCenter>
  );
};
