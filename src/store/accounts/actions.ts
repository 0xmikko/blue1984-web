/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {ACCOUNTS_PREFIX, endpoint} from './';
import {
  createDataLoaderDetailActions,
  getFullUrl,
  journaledOperation,
  LIST_FAILURE,
  LIST_REQUEST,
  LIST_SUCCESS,
  UPLOAD_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from 'redux-data-connect';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {Action} from 'redux';
import {createAction} from 'redux-api-middleware';
import {updateStatus} from 'dlt-operations';
import {BACKEND_ADDR} from '../../config';

export const addNewAccount = (
  id: string,
  hash: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  id = id.toLowerCase();
  const action = await dispatch(
    journaledOperation(
      createAction({
        endpoint,
        method: 'POST',
        body: JSON.stringify({id}),
        headers: {'Content-Type': 'application/json'},
        types: [
          ACCOUNTS_PREFIX + UPLOAD_REQUEST,
          ACCOUNTS_PREFIX + UPLOAD_SUCCESS,
          ACCOUNTS_PREFIX + UPLOAD_FAILURE,
        ],
      }),
      hash,
    ),
  );

  if (action !== undefined && !action.error) {
    const savedAccounts = await getAccountsFromStorage();
    let accountsList = new Set([action.payload.id, ...savedAccounts]);

    console.log('SAVED', savedAccounts);

    localStorage.setItem(
      'accounts',
      JSON.stringify(Array.from(accountsList.values())),
    );
  }

  dispatch(getList(hash));
};

export const getList = (
  hash: string,
  offset?: number,
  limit?: number,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const accounts = await getAccountsFromStorage();

  const action = await dispatch(
    journaledOperation(
      createAction({
        endpoint: getFullUrl(endpoint + 'list/', {
          host: BACKEND_ADDR,
          params: {
            offset,
            limit,
          },
        }),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({accounts}),
        types: [
          ACCOUNTS_PREFIX + LIST_REQUEST,
          ACCOUNTS_PREFIX + LIST_SUCCESS,
          ACCOUNTS_PREFIX + LIST_FAILURE,
        ],
      }),
      hash,
    ),
  );

  return action;
};

export async function getAccountsFromStorage(): Promise<string[]> {
  let accountsList: string[] = [];
  //localStorage.clear();
  const savedAccountsStr = await localStorage.getItem('accounts');

  if (savedAccountsStr !== null) {
    const savedAccounts: string[] = JSON.parse(savedAccountsStr);
    accountsList = savedAccounts;
  }
  return accountsList;
}

export const getDetails = createDataLoaderDetailActions(
  endpoint + ':id/',
  ACCOUNTS_PREFIX,
);

export const removeAccount = (
  id: string,
  hash: string = '0',
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const savedAccounts = await getAccountsFromStorage();
  const accountsList = savedAccounts.filter((e) => e !== id);
  localStorage.setItem('accounts', JSON.stringify(accountsList));
  dispatch(getList(hash))
  dispatch(updateStatus(hash || '0', 'STATUS.SUCCESS'));
};
