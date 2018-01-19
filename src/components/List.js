import React from 'react';
import { render } from 'react-dom';

class Listin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mlist: this.props.master
    };
  }

  strSkillKv(param, i){
    const skill = parseInt('0x' + param.substr(i, 1));
    return skill;
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps !== this.props ) {
      this.setState({
        mlist: this.props.master
      });
    }
  }

  render(){
    let list = this.props.master.map((row) => {
      return(
        <tr key={row.key_id}>
          <td>{row.master_id}</td>
          <td>{row.name}</td>
          <td>
            <p className="sName">{row.saber}</p>
            <ul className="sSkill">
              <li>{row.saber_skill1}</li>
              <li>{row.saber_skill2}</li>
              <li>{row.saber_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.archer}</p>
            <ul className="sSkill">
              <li>{row.archer_skill1}</li>
              <li>{row.archer_skill2}</li>
              <li>{row.archer_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.lancer}</p>
            <ul className="sSkill">
              <li>{row.lancer_skill1}</li>
              <li>{row.lancer_skill2}</li>
              <li>{row.lancer_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.rider}</p>
            <ul className="sSkill">
              <li>{row.rider_skill1}</li>
              <li>{row.rider_skill2}</li>
              <li>{row.rider_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.caster}</p>
            <ul className="sSkill">
              <li>{row.caster_skill1}</li>
              <li>{row.caster_skill2}</li>
              <li>{row.caster_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.assassin}</p>
            <ul className="sSkill">
              <li>{row.assassin_skill1}</li>
              <li>{row.assassin_skill2}</li>
              <li>{row.assassin_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.berserker}</p>
            <ul className="sSkill">
              <li>{row.berserker_skill1}</li>
              <li>{row.berserker_skill2}</li>
              <li>{row.berserker_skill3}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.extra}</p>
            <ul className="sSkill">
              <li>{row.extra_skill1}</li>
              <li>{row.extra_skill2}</li>
              <li>{row.extra_skill3}</li>
            </ul>
          </td>
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

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      master: []
    };
  }

  render(){
    return(
      <div className="list">
        <table>
          <Listin master={this.props.master} />
        </table>
      </div>
    );
  }
}
