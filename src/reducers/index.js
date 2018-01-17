import { combineReducers } from 'redux';
import {
  SELECT_DBLIST,
  INVALIDATE_MLIST,
  REQUEST_MLIST,
  RECEIVE_MLIST,
  SEARCH_MLIST
} from '../actions';

function selectedDbList(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_DBLIST:
    return action.dblist;
  default:
    return state;
  }
}

function mlist(
  state = {
    isFetching: false,
    didInvalidate: false,
    master: []
  },
  action
) {
  switch (action.type) {
  case INVALIDATE_MLIST:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case REQUEST_MLIST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_MLIST:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      [action.hash]: action.mlist,
      [action.hash_m]: action.mlist,
      lastUpdated: action.receivedAt
    });
  case SEARCH_MLIST:
    return Object.assign({}, state, {
      [action.hash]: action.mlist,
    });
  default:
    return state;
  }
}

function mlistByDbList(state = {}, action) {
  switch (action.type) {
  case INVALIDATE_MLIST:
  case RECEIVE_MLIST:
  case REQUEST_MLIST:
  case SEARCH_MLIST:
    return Object.assign({}, state, {
      [action.dblist]: mlist(state[action.dblist], action)
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  mlistByDbList,
  selectedDbList
});

export default rootReducer;
