/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";

import { Account } from "../../core/accounts";
import { FeedWidget } from "../../components/FeedWidget";

interface AccountDetailsProps {
  data: Account;
}

export function DetailsView({ data }: AccountDetailsProps): React.ReactElement {
  const { id } = data;
  return <FeedWidget accounts={[id]} />;
}
