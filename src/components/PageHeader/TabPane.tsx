/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from 'react';
import {useHistory} from 'react-router';

interface TabPaneProps {
  hash: string;
}

export const TabPane: React.FC<TabPaneProps> = (
  {hash, children}
) => {
  const history = useHistory();
  const show = hash === history.location.hash ? 'active show' : '';
  console.log(children);
  return  ( <div className="tab-content">
      <div id={hash} className={'tab-pane fade ' + show}>
        {children}
      </div>
    </div>
  );
};
