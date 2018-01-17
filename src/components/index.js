import React from 'react';
import { render } from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slist: this.props.slist
    };
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps !== this.props ) {
      this.setState({
        slist: this.props.slist
      });
    }
  }

  render(){
    let list = this.props.slist.map((row) => {
      return(
        <tr key={row.key_id}>
          <td>{row.master_id}</td>
          <td>{row.name}</td>
          <td>{row.saber}</td>
          <td>{row.archer}</td>
          <td>{row.lancer}</td>
          <td>{row.rider}</td>
          <td>{row.caster}</td>
          <td>{row.assassin}</td>
          <td>{row.berserker}</td>
          <td>{row.extra}</td>
          <td>{row.comment}</td>
        </tr>
      );
    });

    return(
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Saber</th>
          <th>Archer</th>
          <th>Lancer</th>
          <th>Rider</th>
          <th>Caster</th>
          <th>Assassin</th>
          <th>Berserker</th>
          <th>Extra</th>
          <th>Comment</th>
        </tr>
        {list}
      </tbody>
    );
  }
}

export default class ServantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slist: []
    };
  }

  render(){
    return(
      <div>
        <table>
          <List slist={this.props.slist} />
        </table>
      </div>
    );
  }
}
