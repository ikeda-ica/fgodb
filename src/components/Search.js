import React from 'react';
import { render } from 'react-dom';
import { searchMList } from '../actions';

export default class Search extends React.Component {
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
