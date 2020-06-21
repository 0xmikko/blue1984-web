
/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */


export type DataLoaderListActions<T> = {
  type: string;
  payload?: [T];
  error?: boolean;
};

export type DataLoaderDetailsActions<T> = {
  type: string;
  payload?: T;
  meta: {id: string, hash: string};
  error?: boolean;
};


