import React from 'react';
import { render } from 'react-dom';

export default class AddDialog extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="addDialog">
        <input type="text" onChange={this.changeText} value={this.state.value} />
      </div>
    );
  }
}
