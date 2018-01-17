import fetch from 'cross-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(dblist) {
  return {
    type: REQUEST_POSTS,
    dblist
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(dblist, json) {
  return {
    type: RECEIVE_POSTS,
    dblist,
    posts: json,
    receivedAt: Date.now()
  };
}

export const INVALIDATE_DBLIST = 'INVALIDATE_DBLIST';
export function invalidateDblist(dblist) {
  return {
    type: INVALIDATE_DBLIST,
    dblist
  };
}

export const SEARCH_DBLIST = 'SEARCH_DBLIST';
export function searchDblist(dblist, json) {
  return {
    type: SEARCH_DBLIST,
    dblist,
    posts: json,
  };
}

function fetchPosts(dblist) {
  return dispatch => {
    dispatch(requestPosts(dblist));
    return fetch('http://localhost:8000/masterlist')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(dblist, json)));
  };
}

function shouldFetchPosts(state, dblist) {
  const posts = state.postsByDblist[dblist];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(dblist) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), dblist)) {
      return dispatch(fetchPosts(dblist));
    } else {
      return Promise.resolve();
    }
  };
}
