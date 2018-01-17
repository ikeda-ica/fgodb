import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDbList, fetchMListIfNeeded, searchMList } from '../actions';
import ServantList from '../components/index';

class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      value: '',
      master_m: this.props.master_m
    };
  }

  changeText(e) {
    const { dispatch, selectedDbList } = this.props;
    const mlist_fil = [];
    const master_m = this.props.master_m;
    for(const i in master_m){
      const str = JSON.stringify(master_m[i]);
      if(str.includes(e.target.value)){
        mlist_fil.push(master_m[i]);
      }
    }
    dispatch(searchMList(selectedDbList, mlist_fil));
    this.setState({
      value: e.target.value
    });
  }

  render(){
    return(
      <div className="searchBox">
        <input type="text" onChange={this.changeText} value={this.state.value} />
      </div>
    );
  }
}

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
        <SearchBox master_m={this.props.master_m} dispatch={this.props.dispatch} selectedDbList={this.props.selectedDbList} />
        <ServantList master={this.props.master} />
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
