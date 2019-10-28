import React from 'react'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import './../App.css'

class DeleteRoute extends React.Component {



  constructor(props) {
      super(props);
 
           this.textInput = React.createRef();
           this.state = {
      			value: null,
      			routes  :  [ ]
    		};
           
     
  }
  
    deleteRoute1()  {
    	alert('je2s=' + this.textInput.current.value)
    	
      	var settings = {
			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic",
 	 		"method": "GET",
  			"headers": {
    			"Content-Type": "application/json",
    			"Accept": "*/*"
  			}}
  			var t=this;

			$.ajax(settings).done(function (response) {
				 const result = response.filter(route => route.city == "Tampere");
				 let routesArray=[];
				 result.map(route=>routesArray.push(	    <option value="1" key="1" >easy 1</option>))
				
			
				 t.setState({ routes  : routesArray});
				 alert(JSON.stringify(result ));
			});
    }
   render()  {
   
 
      return (
          <div class="row">

          <div class="col-sm-4">
			<p> Row1</p>
          </div>
           <div class="col-sm-4">
           <p>Filter Route by </p>
           
            <select  onChange={this.deleteRoute1.bind(this)} ref={ this.textInput } class="browser-default custom-select">
        		      <option value="" selected disabled hidden>Select City</option>
        		      <option value="Tampere" >Tampere</option>
  			</select>
  			
  			 <select   class="browser-default custom-select">
        		    <option value="" selected disabled hidden>Select Map</option>
        		   <option value="1" >Kauppi</option>
  			</select>
  			
  		     <select   class="browser-default custom-select">
        		    <option value="" selected disabled hidden>Route</option>
        		    {this.state.routes}
        		
  			</select>


  				
  	       <Button variant="danger"  onClick={this.deleteRoute1.bind(this)} type="submit">
	           Delete route
  		</Button>

			<p> Row2</p>
			
          </div>

          </div>
         
      
      )
   }
}
export default DeleteRoute;
