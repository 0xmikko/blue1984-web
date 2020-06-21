/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from 'react';
import {Link} from 'react-router-dom';

interface AppBarElementProps {
  title: string;
  to: string;
}

export const AppBarElement: React.FC<AppBarElementProps> = ({
  title,
  to,
}: AppBarElementProps) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        <i data-feather="archive" /> {title}
      </Link>
    </li>
  );
};
