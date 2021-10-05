import React from 'react';
import {BrowserRouter, Routes, Route, withRouter, useHistory} from 'react-router-dom'

const Partner=() =>{

    const history =useHistory();
   
   const action = ()=>{
      history.push('/personal');
    }
     return(
        <div className="whole">
        <div className="form-group form container">
        <br/>
        <br/>
        <form >
        <div className="">
        <div className="section1 row">
        <div className=" align-items-start col  ">
        <legend className="text-center text-light display-5">Partner Details</legend>        
        <label className="display-5 text-light align-left">
        Partner First name
        </label>
        <input  type="text" className="form-control " 
        placeholder="Enter the First name"/>
        <br/>
        <label className="display-5 text-light left-align">
        Partner Short name
        </label>
        <input  type="text" className=" form-control" 
        placeholder="Enter the First name"/>
        </div>
        <div className="col"><label className="display-5 text-light  center-align">
        <br/> <br/>Partner Last name
        </label>
        <input  type="text" className="form-control " 
        placeholder="Enter the Last name"/>
        <br/>
        <label className="display-5 text-light  center-align">
        Partner DOB
        </label>
        <input  type="date" className="form-control "/>
        
       </div>
       <div className="col"></div>
       </div>

       <div className="section2 row">
       <div className="col">
       <br/><legend className="text-center  text-light display-5">Contact Partner</legend>
        <br/>
        <label className="display-5 text-light center-align">
        Home Phone</label> 
        <input  type="tel" maxlength={10} className=" form-control" 
        placeholder="Enter the First name"/><br/>
        <label className="display-5 text-light center-align">
        Email</label>
        <input  type="email" className=" form-control" 
        placeholder="Enter the Mail ID"/>
        
        </div>


        <div className=" col align-items-center">
        <br/><br/>
        <br/><br/><label className="display-5 text-light center-align ">
        Cell Phone
        </label>
        <input  type="tel" maxlength={10} className="form-control "/>
        <br/>
        <label className="display-5 text-light center-align ">
        Fax
        </label>
        <input  type="email" className="form-control " required/> 
        </div>

        
        <div className="col align-items-end">
        <br/><br/><br/><br/>

        <label className="display-5 col text-light center-align ">
        Work Phone
        </label>
        <input  type="tel" maxlength={10} className="form-control "/>
        <br/>
        <label className="display-5 text-light center-align ">
        Website
        </label>
        <input  type="text" className="form-control "  required/>
        </div>

        </div>
        </div>
        </form></div>

        <button type="button"  onClick={action} 
         className="btn btn-primary btn-lg right-align" >Next</button>
        
        <hr  style={{
          color: 'white',
          backgroundColor: 'white',
          height: .5,
          borderColor : '#white'
      }}/>
    
        </div>
     
     )
 }
 export default Partner;