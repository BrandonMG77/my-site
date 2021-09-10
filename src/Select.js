import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import test from './sample/test.json';
import App from './App';






class Select extends React.Component {

    handleChange = (e) => {

        const checkedValue = e.target.value;
      this.props.provinceChecker(checkedValue);

    }

    handleYear = (e) => {

        const checkedValue = e.target.value;
        console.log(checkedValue);
        this.props.yearChecker(checkedValue);

    }


    render() {
       
        return <div className="select">
            <h3>Below you can choose a worker according to his place of living (province) and age (Returns all the workers under that age)</h3>
            <label className="label_province"htmlFor="province">Choose a province</label>
            <select onChange={this.handleChange} className="provinces">
            <option value="Todos">Todos</option>
            <option value="San José">San José</option>
            <option value="Cartago">Cartago</option>
            <option value="Alajuela">Alajuela</option>
            <option value="Heredia">Heredia</option>
            </select>
            <label className="label_age" htmlFor="province" >Choose an age</label>
            <input type="number" placeholder="Returns all the workers below that age" onChange={this.handleYear}></input>
            
        </div>

    }

  }






export default Select;
