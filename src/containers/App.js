import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMListIfNeeded } from '../actions';
import List from '../components/List';
import Search from '../components/Search';


class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { dispatch, selectedDbList } = this.props;
    dispatch(fetchMListIfNeeded(selectedDbList, 'http://localhost:8000/masterlist', 'master'));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDbList !== this.props.selectedDbList) {
      const { dispatch, selectedDbList } = nextProps;
      dispatch(fetchMListIfNeeded(selectedDbList, 'http://localhost:8000/masterlist', 'master'));
    }
  }

  render() {
    return(
      <div>
        <Search master_m={this.props.master_m} dispatch={this.props.dispatch} selectedDbList={this.props.selectedDbList} />
        <List master={this.props.master} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDbList, mlistByDbList } = state;
  const {
    isFetching,
    lastUpdated,
    master: master,
    master_m: master_m
  } = mlistByDbList[selectedDbList] || {
    isFetching: true,
    master: []
  };

  return {
    selectedDbList,
    master,
    master_m,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
