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
           this.map2= React.createRef();

           this.state = {
      			value: null,
      			routes  :  [ ],
      			maps1  :  [ ],
      			cities  :  [ ]
    		};
    		this.getCities();
	    	     
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
				
				let citiesName=[];
				response.map(term=>citiesName.push(<option value={term} key="1" >{term}</option>) )
				t.setState({ cities  : citiesName});
		
			});
				 			
  }
   filterRoutesMap(e)  {
   		alert("filter map=" + this.map2.current.value)
   		
   		var settings = {
			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic",
 	 		"method": "GET",
  			"headers": {
    			"Content-Type": "application/json",
    			"Accept": "*/*"
  			}}
  			
  			var t=this;
  			var term=[];
			
			$.ajax(settings).done(function (response) {
				let result = response.filter(route => route.city ===t.city1.current.value).filter(route => route.map ===t.map2.current.value);
				alert(JSON.stringify(result ))
				let routesArray=[];
 				let check=[];
				result.map(route=>routesArray.push(<option value={route.id}  >{route.name}</option>));
				t.setState({ routes : routesArray});


 			
			});

   		
   		
   		
    

   
   }
   filterRoutesCity(e)  {
    	alert("poistetaan3=" + "kaupunki="  + this.city1.current.value +  " map="+ this.map2.current.value  + "Reitti="  + this.deleteUusi.current.value )
    this.setState({ routes : []});
      	var settings = {
			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic",
 	 		"method": "GET",
  			"headers": {
    			"Content-Type": "application/json",
    			"Accept": "*/*"
  			}}
  			
  			var t=this;
  			var term=[];
			
			$.ajax(settings).done(function (response) {
				let result = response.filter(route => route.city ===t.city1.current.value);
				//alert(JSON.stringify(new Set(Object.keys(result )))
 				let routesArray=[];
 				let check=[];
				result.map(route=>{
									if(check.indexOf(route.map)<0)
										routesArray.push(<option value={route.map} key="1" >{route.map}</option>)
									check.push(route.map)
								}
							)
				t.setState({ maps1  : routesArray});
			});
    }

  
    deleteRoute1()  {
    	alert("poistetaan401=" + + this.deleteUusi.current.value )
    	
    	var settings = {
  			"async": true,
  			"crossDomain": true,
  			"url": "http://192.168.99.100/api/oBackEnd/webresources/generic/",
  			"method": "DELETE",
  			"headers": {
    			"Content-Type": "application/json",
    			"User-Agent": "PostmanRuntime/7.19.0",
    			"Accept": "*/*",
    			"Cache-Control": "no-cache",
    			"Postman-Token": "279b893d-7faa-4f88-abe5-5c0918d93625,9f057f87-250c-45ee-aa71-7c48f5f69c8c",
    			"Host": "192.168.99.100",
    			"Accept-Encoding": "gzip, deflate",
    			"Content-Length": "8",
    			"Connection": "keep-alive",
    			"cache-control": "no-cache"
  			},
  			"processData": false,
  			"data": "{\"id\":"+  this.deleteUusi.current.value + "}"
} 

$.ajax(settings).done(function (response) {
  console.log(response);
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
           
            <select  onChange={this.filterRoutesCity.bind(this)} ref={ this.city1} class="browser-default custom-select">
        		      <option value="" selected disabled hidden>Select City</option>
        		      {this.state.cities}
  			</select>
  			
  			 <select  ref={ this.map2}  onChange={this.filterRoutesMap.bind(this)} class="browser-default custom-select">
        		    <option value=""  selected disabled hidden>Select Map</option>
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
