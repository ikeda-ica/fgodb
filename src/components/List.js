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
              <li>{this.strSkillKv(row.saber_skill, 2)}</li>
              <li>{this.strSkillKv(row.saber_skill, 3)}</li>
              <li>{this.strSkillKv(row.saber_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.archer}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.archer_skill, 2)}</li>
              <li>{this.strSkillKv(row.archer_skill, 3)}</li>
              <li>{this.strSkillKv(row.archer_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.lancer}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.lancer_skill, 2)}</li>
              <li>{this.strSkillKv(row.lancer_skill, 3)}</li>
              <li>{this.strSkillKv(row.lancer_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.rider}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.rider_skill, 2)}</li>
              <li>{this.strSkillKv(row.rider_skill, 3)}</li>
              <li>{this.strSkillKv(row.rider_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.caster}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.caster_skill, 2)}</li>
              <li>{this.strSkillKv(row.caster_skill, 3)}</li>
              <li>{this.strSkillKv(row.caster_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.assassin}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.assassin_skill, 2)}</li>
              <li>{this.strSkillKv(row.assassin_skill, 3)}</li>
              <li>{this.strSkillKv(row.assassin_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.berserker}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.berserker_skill, 2)}</li>
              <li>{this.strSkillKv(row.berserker_skill, 3)}</li>
              <li>{this.strSkillKv(row.berserker_skill, 4)}</li>
            </ul>
          </td>
          <td>
            <p className="sName">{row.extra}</p>
            <ul className="sSkill">
              <li>{this.strSkillKv(row.extra_skill, 2)}</li>
              <li>{this.strSkillKv(row.extra_skill, 3)}</li>
              <li>{this.strSkillKv(row.extra_skill, 4)}</li>
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
