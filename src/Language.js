import React from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'
import './index.css'
import Personal from './Personal' 
import partner from './Partner'
const Language=() =>{
    const history = useHistory();   
    const action1 = ()=>{
        history.push('/personal');
    }
    const action = ()=>{
        history.push('/');
  
      }     
    return(
        <div className="container">
        <br/><br/>
        <hr  style={{
            color: 'white',
            backgroundColor: 'white',
            height: .5,
            borderColor : 'white'}}/>
        <div className="row">
        <div className=" align-items-start col  ">
        <legend className="text-center text-light display-5">PREFERRED LANGUAGE</legend>        
        <br/>
        <label className="display-5 text-light align-left">
        Select Language </label>

      <select name="Language" className="col">
      <option value="english">English</option>
      <option value="tamil">Tamil</option>
      <option value="telugu" >Telugu</option>
      <option value="malayalam">Malayalam</option>
      </select>
      <br/><br/><br/>
      <button type="button" onClick={action}  className="btn btn-secondary btn-lg right-align">Previous</button>
        </div>

        <div className="col">   
        <br/> <br/><br/><br/><br/><br/><br/>  
         <button type="button" onClick={action1}  className="btn btn-success btn-lg right-align">Save & Continue</button>
        </div>
        <div className="col"></div></div>
       <Router><switch> <Route exact path="/"><Personal/></Route></switch></Router></div>
    )
}
export default Language;