import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import test from './sample/test.json';
import App from './App';
import Select from './Select';






class Render extends React.Component {

    render(){
        const renderBoxes = this.props;
        console.log(renderBoxes.info.boxes);

        return <div>
   
        {renderBoxes.info.boxes.map(e => <div className="box" key={e.id}>
      
        <p className="province"> {e.province}</p>
        <p className="year"> {e.year}</p>
        <p className="description"> {e.description}</p>
        
          </div>)}
       
          </div>

    }
   
  }



export default Render;

/*
 const boxesRender = this.props.boxes;

    console.log(boxesRender);
 
   
*/