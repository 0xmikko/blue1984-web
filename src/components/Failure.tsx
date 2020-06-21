/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from 'react';

interface FailureProps {
  error: string;
}

const FailureView: React.FC<FailureProps> = ({error}) => (
  <div>

          {error}
  </div>
);

export default FailureView;
