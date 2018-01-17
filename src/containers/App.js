import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDblist, fetchPostsIfNeeded, invalidateDblist, searchDblist } from '../actions';
import ServantList from '../components/index';

class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      value: '',
      slist: this.props.posts
    };
  }

  changeText(e) {
    const { dispatch, selectedDblist } = this.props;
    const slist_fil = [];
    const slist = this.props.slist;
    for(const i in slist){
      const str = JSON.stringify(slist[i]);
      console.log(str.includes(e.target.value));
      if(str.includes(e.target.value)){
        slist_fil.push(slist[i]);
      }
    }
    dispatch(searchDblist(selectedDblist, slist_fil));
    this.setState({
      value: e.target.value
    });
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.changeText} value={this.state.value} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      slist: this.props.posts
    };
  }

  componentDidMount() {
    const { dispatch, selectedDblist } = this.props;
    dispatch(fetchPostsIfNeeded(selectedDblist));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDblist !== this.props.selectedDblist) {
      const { dispatch, selectedDblist } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedDblist));
    }
  }

  render() {
    return(
      <div>
        <SearchBox slist={this.props.master} dispatch={this.props.dispatch} selectedDblist={this.props.selectedDblist} />
        <ServantList slist={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDblist, postsByDblist } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
    master: master
  } = postsByDblist[selectedDblist] || {
    isFetching: true,
    items: []
  };

  return {
    selectedDblist,
    posts,
    master,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
