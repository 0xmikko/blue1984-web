/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Account } from "../../core/accounts";
import { Card } from "react-bootstrap";
import { LoadingView } from "rn-web-components";

interface InfoWidgetProps {
  data: Account;
}

export function InfoWidget({ data }: InfoWidgetProps): React.ReactElement {
  if (data === undefined) return <LoadingView />;

  return (
    <Card>
      <Card.Header
        className="card-header"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <h6 className="mg-b-0">Info</h6>
      </Card.Header>
      <Card.Body className="pd-20">
        <div className="table-responsive">
          Account: {data.id}
          <br />
          Tweets cached: {data.cached || "-"}
          <br />
          Tweets deleted: {data.deleted || "-"}
        </div>
      </Card.Body>
    </Card>
  );
}
