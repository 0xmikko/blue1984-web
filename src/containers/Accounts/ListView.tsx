/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React, {useState} from "react";
import {Button, Table} from "react-bootstrap";
import {Account} from "../../core/accounts";
import {toHumanDate} from "../../utils/formaters";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";

export interface RenderListItemProps {
  data: Account;
  onSelect: (id: string) => void
}

export function RenderListItem({ data, onSelect }: RenderListItemProps) {
  const dispatch = useDispatch();
  const [hash, setHash] = useState("0");
  const onDelete = (id: string) => {
    const newHash = Date.now().toString();
    setHash(newHash);
    dispatch(actions.accounts.removeAccount(id, hash));
  };

  return (
    <tr key={data.id}>
      <td
        className="tx-medium text-left tx-normal"
        onClick={() => onSelect(data.id)}
      >
        {data.username}
        {data.cached ? "" : " [Loading... it could take up to a few minutes]"}
      </td>
      <td
        className="tx-medium text-center tx-normal"
        onClick={() => onSelect(data.id)}
      >
        {data.lastCached ? toHumanDate(data.lastCached) : "-"}
      </td>
      <td
        className="tx-medium text-center tx-normal"
        onClick={() => onSelect(data.id)}
      >
        {data.cached || "-"}
      </td>
      <td
        className="tx-medium text-center tx-normal"
        onClick={() => onSelect(data.id)}
      >
        {data.deleted || "-"}
      </td>
      <td className="tx-medium text-center tx-normal">
        <Button
          className="btn-sm pd-x-15 btn-brand-01 btn-uppercase mg-l-10"
          onClick={() => onDelete(data.id)}
          size={"sm"}
          disabled={data.cached === undefined}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export function RenderListHeader({
  children,
}: React.PropsWithChildren<any>): React.ReactElement {
  return (
    <Table hover={true} style={{marginTop: '20px'}}>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Account</th>

          <th>Last cached</th>
          <th>Total cached</th>
          <th>Total deleted</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
