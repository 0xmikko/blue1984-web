/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FormView } from "../../containers/Accounts/FormView";
import { AccountCreateDTO } from "../../core/accounts";

import actions from "../../store/actions";
import { operationSelector } from "dlt-operations";
import { ContainerTitle, ContainerVCenter } from "../../theme";

export const AccountsNewScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [hash, setHash] = useState("0");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const operation = useSelector(operationSelector(hash));

  const id = "";

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          history.push(`/accounts/${id}`);
          break;

        case "STATUS.FAILURE":
          setHash("0");
          setIsSubmitted(false);
          alert(`Cant submit your operation to server\n${operation.error}`);
      }
    }
  }, [hash, operation]);

  const data: AccountCreateDTO = {
    id: "",
  };
  const onSubmit = (values: AccountCreateDTO) => {
    setIsSubmitted(true);
    const newHash = Date.now().toString();
    setHash(newHash);

    // Emit data
    dispatch(actions.accounts.addNewAccount(values.id, newHash));
  };

  return (
    <ContainerVCenter>
      <ContainerTitle>
        <h1>Add new account</h1>
      </ContainerTitle>
        <FormView data={data} onSubmit={onSubmit} isSubmitted={isSubmitted} />
    </ContainerVCenter>
  );
};
