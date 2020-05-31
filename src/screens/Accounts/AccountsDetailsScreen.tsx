/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */
import React, {useEffect, useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router";

import { RootState } from "../../store";

import PageHeader from "../../components/PageHeader/PageHeader";
import { Breadcrumb } from "../../components/PageHeader/Breadcrumb";
import { DetailsView } from "../../containers/Accounts/DetailsView";

import actions from "../../store/actions";
import { STATUS } from "../../utils/status";
import { Loading } from "../../components/Loading";
import { getDetailsItem } from "../../store/dataloader";
import { DataScreen } from "../../components/DataLoader/DataScreen";

interface MatchParams {
  id: string;
  tab?: string;
}

interface AccountDetailsScreenProps extends RouteComponentProps<MatchParams> {}

export const AccountsDetailsScreen: React.FC<AccountDetailsScreenProps> = ({
  match: {
    params: { id, tab },
  },
}: AccountDetailsScreenProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [hash, setHash] = useState("0");

  useEffect(() => {
    const newHash = Date.now().toString();
    setHash(newHash);
    dispatch(actions.accounts.getDetails(id, newHash));
  }, [id]);

  const dataItem = useSelector((state: RootState) =>
    getDetailsItem(state.accounts.Details, id)
  );

  const operationStatus = useSelector(
      (state: RootState) => state.operations.data[hash]?.data?.status
  );

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hash !== "0") {
      switch (operationStatus) {
        case STATUS.SUCCESS:
          break;

        case STATUS.FAILURE:
          setHash("0");
          alert("Netwrok error");
      }
    }
  }, [hash, operationStatus]);

  if (!dataItem || !dataItem.data || dataItem.status !== STATUS.SUCCESS) {
    return <Loading />;
  }

  const { data, status } = dataItem;

  const breadcrumbs: Breadcrumb[] = [
    {
      url: "/accounts",
      title: "Accounts",
    },
  ];

  return (
    <div className="content content-fixed">
      <PageHeader
        title={data.id}
        breadcrumbs={breadcrumbs}
      />
      <DataScreen data={data} status={status} component={DetailsView} />
    </div>
  );
};
