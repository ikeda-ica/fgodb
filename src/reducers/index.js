import { combineReducers } from 'redux';
import {
  SELECT_DBLIST,
  INVALIDATE_DBLIST,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SEARCH_DBLIST
} from '../actions';

function selectedDblist(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_DBLIST:
    return action.dblist;
  default:
    return state;
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    master: []
  },
  action
) {
  switch (action.type) {
  case INVALIDATE_DBLIST:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_POSTS:
  console.log(action.posts);
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      master: action.posts,
      lastUpdated: action.receivedAt
    });
  case SEARCH_DBLIST:
    console.log(action.posts);
    return Object.assign({}, state, {
      items: action.posts,
    });
  default:
    return state;
  }
}

function postsByDblist(state = {}, action) {
  switch (action.type) {
  case INVALIDATE_DBLIST:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
  case SEARCH_DBLIST:
    return Object.assign({}, state, {
      [action.dblist]: posts(state[action.dblist], action)
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  postsByDblist,
  selectedDblist
});

export default rootReducer;
