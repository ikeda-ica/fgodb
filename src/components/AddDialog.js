import React from 'react';
import { render } from 'react-dom';
import { fetchMListIfNeeded, fetchMList } from '../actions';

export default class AddDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      saber: '',
      saber_skill1: '1',
      saber_skill2: '1',
      saber_skill3: '1',
      archer: '',
      archer_skill1: '1',
      archer_skill2: '1',
      archer_skill3: '1',
      lancer: '',
      lancer_skill1: '1',
      lancer_skill2: '1',
      lancer_skill3: '1',
      rider: '',
      rider_skill1: '1',
      rider_skill2: '1',
      rider_skill3: '1',
      caster: '',
      caster_skill1: '1',
      caster_skill2: '1',
      caster_skill3: '1',
      assassin: '',
      assassin_skill1: '1',
      assassin_skill2: '1',
      assassin_skill3: '1',
      berserker: '',
      berserker_skill1: '1',
      berserker_skill2: '1',
      berserker_skill3: '1',
      extra: '',
      extra_skill1: '1',
      extra_skill2: '1',
      extra_skill3: '1',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target.name;
    this.setState({
      [target]: event.target.value
    });
  }

  handleSubmit(event) {
    const { dispatch, selectedDbList, master_m } = this.props;
    const obj = this.state;
    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    /*
    const m_id = this.props.master_m.filter((arr) => {
      return arr.master_id == obj.id;
    });
    if(m_id.length > 0){
      fetch('/update', {method, headers, body})
        .then((res) => {
          res.json();
        })
        .then((json) => {
          dispatch(fetchMList(selectedDbList, '/masterlist', 'master'));
          console.log('Done');
        })
        .catch(console.error);
    }else{
    */
    fetch('/add', {method, headers, body})
      .then((res) => {
        res.json();
      })
      .then((json) => {
        dispatch(fetchMList(selectedDbList, '/masterlist', 'master'));
        console.log('Done');
      })
      .catch(console.error);
    /*
    }
    */
    event.preventDefault();
  }

  render(){
    return(
      <div className="addDialog">
        <table>
          <tbody>
            <tr>
              <td><input type="text" name="id" onChange={this.handleChange} /></td>
              <td><input type="text" name="name" onChange={this.handleChange} /></td>
              <td>
                <p className="sName"><input type="text" name="saber" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="saber_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="saber_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="saber_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="archer" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="archer_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="archer_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="archer_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="lancer" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="lancer_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="lancer_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="lancer_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="rider" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="rider_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="rider_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="rider_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="caster" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="caster_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="caster_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="caster_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="assassin" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="assassin_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="assassin_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="assassin_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="berserker" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="berserker_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="berserker_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="berserker_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td>
                <p className="sName"><input type="text" name="extra" onChange={this.handleChange} /></p>
                <ul className="sSkill">
                  <li><input type="text" name="extra_skill1" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="extra_skill2" onChange={this.handleChange} className="skillLv" /></li>
                  <li><input type="text" name="extra_skill3" onChange={this.handleChange} className="skillLv" /></li>
                </ul>
              </td>
              <td><input type="text" name="id" onChange={this.handleChange} /></td>
            </tr>
          </tbody>
        </table>

        <input type="button" value="Add / Update" onClick={this.handleSubmit} />
      </div>
    );
  }
}
