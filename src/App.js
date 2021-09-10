import logo from './logo.svg';
import './App.css';
import react  from 'react';
import React, {Component} from 'react';
import test from './sample/test.json';
import Select from './Select';
import Render from './Render';
let year = "";

class App extends React.Component {

  state ={
    realInfo:test,
    boxesYear: test,
    boxes:test,
    province:"xx"
    

  }

  provinceChecker = (e) => {
    console.log(typeof e);
    //console.log(typeof this.state.boxes[0].province);
    if (e === "Todos") {
    
      this.setState({
        boxes: test,
        boxesYear: test
      })

    } else {const newRender = this.state.realInfo.filter(
      // OJITOOOO NO ME FUNCIONABA EL FILTER POR EL !== YA QUE EL ID QUE YO LE PASABA
      //DESDE TASKS ERA UN STRING Y EL ID DEL ARRAY ORIGINAL ERA UN NUMBER
      newProvinces => newProvinces.province === e     
      );
      console.log(newRender);
      this.setState({
        boxes: newRender,
        boxesYear: newRender
      })
  
    }
    
  }

  yearChecker = (e) => {
    
    console.log( e);
    //console.log( this.state.boxes[0].year);
    if (e == "") {

      this.setState({
        boxes: this.state.realInfo
      })

    } else {const newRender = this.state.boxesYear.filter(
      // OJITOOOO NO ME FUNCIONABA EL FILTER POR EL !== YA QUE EL ID QUE YO LE PASABA
      //DESDE TASKS ERA UN STRING Y EL ID DEL ARRAY ORIGINAL ERA UN NUMBER
      newProvinces => newProvinces.year <= e     
      );
      console.log(newRender);
      this.setState({
        boxes: newRender
      })}
    

      
      
  }

  render() {
    
    return <div className="background">
       <Select provinceChecker={this.provinceChecker} yearChecker={this.yearChecker}/>
    <Render info={this.state}/>
   
    </div>
   


  

  }


  }






export default App;
