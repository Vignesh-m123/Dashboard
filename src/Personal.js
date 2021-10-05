import React from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'

const Personal=() =>{
   const history=useHistory();
   const action = ()=>{
      history.push('/language');
    }
    const action1 = ()=>{
      history.push('/');

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
        <legend className="text-center text-light display-5">PERSONAL SECOND CONTACT</legend>        
        <label className="display-5 text-light align-left">
        First Name
        </label>
        <input  type="text" className="form-control " 
        placeholder="Enter the First name"/>
        <br/>
        <label className="display-5 text-light left-align">
        Short name
        </label>
        <input  type="text" className=" form-control" 
        placeholder="Enter the First name"/>
        </div>
        <div className="col"><label className="display-5 text-light  center-align">
        <br/> <br/>Last name
        </label>
        <input  type="text" className="form-control " 
        placeholder="Enter the Last name"/>
        <br/>
        <label className="display-5 text-light  center-align">
        DOB
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
        <br/><br/> <button type="button" onClick={action1}  className="btn btn-secondary btn-lg right-align">Previous</button>
        </div>


        <div className=" col align-items-center">
        <br/><br/>
        <br/><br/><label className="display-5 text-light center-align ">
        Cell Phone
        </label>
        <input  type="tel"  maxlength={10} className="form-control "/>
        <br/>
</div>
        
        <div className="col align-items-end">
        <br/><br/><br/><br/>

        <label className="display-5 col text-light center-align ">
        Work Phone
        </label>
        <input  type="tel" maxlength={10} maxlength={10} className="form-control "/>
        <br/>
        <div  className="alin">     
        {/**<button type="button"  className="btn btn-success align-right">N</button>
     **/}<br/><br/><br/><br/><button type="button"  onClick={action} className="btn btn-primary btn-lg">Next</button>
        </div>
        </div>

        </div>
        </div>
        </form>   
        </div>  <br/><br/><hr  style={{
            color: '#DBDAF6',
            backgroundColor:'#DBDAF6',
            height: .5,
            borderColor : '#DBDAF6'
        }}/>
        </div>
     )
 }
 export default Personal;