import fetch from 'cross-fetch';

export const SELECT_DBLIST = 'SELECT_DBLIST';
export function selectDblist (dblist) {
  return{
    type: SELECT_DBLIST,
    dblist
  };
}

export const REQUEST_MLIST = 'REQUEST_MLIST';
function requestMList(dblist) {
  return {
    type: REQUEST_MLIST,
    dblist
  };
}

export const RECEIVE_MLIST = 'RECEIVE_MLIST';
function receiveMList(dblist, json, hash) {
  return {
    type: RECEIVE_MLIST,
    dblist,
    hash: hash,
    hash_m: hash + '_m',
    mlist: json,
    receivedAt: Date.now()
  };
}

export const INVALIDATE_MLIST = 'INVALIDATE_MLIST';
export function invalidateMList(dblist) {
  return {
    type: INVALIDATE_MLIST,
    dblist
  };
}

export const SEARCH_MLIST = 'SEARCH_MLIST';
export function searchMList(dblist, json) {
  return {
    type: SEARCH_MLIST,
    dblist,
    hash: 'master',
    mlist: json,
  };
}

function fetchMList(dblist, url, hash) {
  return dispatch => {
    dispatch(requestMList(dblist));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveMList(dblist, json, hash)));
  };
}

function shouldFetchMList(state, dblist) {
  const mlist = state.mlistByDbList[dblist];
  if (!mlist) {
    return true;
  } else if (mlist.isFetching) {
    return false;
  } else {
    return mlist.didInvalidate;
  }
}

export function fetchMListIfNeeded(dblist, url, hash) {
  return (dispatch, getState) => {
    if (shouldFetchMList(getState(), dblist)) {
      return dispatch(fetchMList(dblist, url, hash));
    } else {
      return Promise.resolve();
    }
  };
}
