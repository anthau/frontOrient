import React from 'react'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './../App.css'

class DeleteRoute extends React.Component {



  constructor(props) {
      super(props);
 
           this.textInput = React.createRef();
           this.deleteUusi= React.createRef();
           this.city1= React.createRef();

           this.state = {
      			value: null,
      			routes  :  [ ],
      			maps1  :  [ ],
      			cities  :  [ ]
    		};
    		this.getCities();
    		this.getMaps();
           
     
  }
  componentDidMount()  {

  
  
  }
  
   getMaps()   {
  		

     	var settings = {
			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic/Maps",
 	 		"method": "GET",
  			"headers": {
    			"Content-Type": "application/json",
    			"Accept": "*/*"
  			}}
  			
  			var t=this;

			$.ajax(settings).done(function (response) {
				
				let maps=[];
				response.map(term=>maps.push(<option value={term} key="1" >{term}</option>) )
		        t.setState({ maps1  : maps});
		
				 /*const result = response.filter(route => route.city === "Tampere");
				 let routesArray=[];
				 result.map(route=>routesArray.push(<option value={route.id} key="1" >{route.name}</option>))
				 t.setState({ routes  : routesArray});
				 */
			});
				 			

  }

  getCities()   {
  		

     	var settings = {
			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic/cities",
 	 		"method": "GET",
  			"headers": {
    			"Content-Type": "application/json",
    			"Accept": "*/*"
  			}}
  			
  			var t=this;

			$.ajax(settings).done(function (response) {
				alert(response[1])
				let citiesName=[];
				response.map(term=>citiesName.push(<option value={term} key="1" >{term}</option>) )
				 t.setState({ cities  : citiesName});
		
				 /*const result = response.filter(route => route.city === "Tampere");
				 let routesArray=[];
				 result.map(route=>routesArray.push(<option value={route.id} key="1" >{route.name}</option>))
				 t.setState({ routes  : routesArray});
				 */
			});
				 			

  }
  
    deleteRoute1()  {
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
				 const result = response.filter(route => route.city ===t.city1.current.value);
				 let routesArray=[];
				 result.map(route=>routesArray.push(<option value={route.id} key="1" >{route.name}</option>))
				 t.setState({ routes  : routesArray});
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
           
            <select  onChange={this.deleteRoute1.bind(this)} ref={ this.city1} class="browser-default custom-select">
        		      <option value="" selected disabled hidden>Select City</option>
        		      {this.state.cities}
  			</select>
  			
  			 <select   class="browser-default custom-select">
        		    <option value="" selected disabled hidden>Select Map</option>
        		    {this.state.maps1}
        		   </select>
  			
  		     <select   class="browser-default custom-select"  ref={ this.deleteUusi} >
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
