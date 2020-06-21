/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from 'react';
import {BeatLoader} from 'react-spinners';

export const Loading : React.FC = () => (
  <div style={{width: '100%'}}>
    <BeatLoader />
  </div>
);
