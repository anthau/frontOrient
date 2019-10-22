import React from 'react'
import ReactDOM from 'react-dom'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';




class AddRoute extends React.Component {


  constructor(props) {
    super(props);


    this.textInput = React.createRef();

    this.state = {
      value: null,
    };
  }
  
  send(e)  {

  	alert(this.textInput.current.value);
	var data = JSON.stringify({
  		"name": "testssss",
 		 "city": this.textInput.current.value
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
    	alert(this.responseText);
  	}
  });

  xhr.open("PUT", "http://192.168.99.100/api/oBackEnd/webresources/generic");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.18.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "f73441d8-4e76-4279-88bf-b3b41f61c033,f08ded73-7f78-4202-a38f-4649b13fa2af");
  xhr.setRequestHeader("Host", "192.168.99.100");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "38");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);  
}

  
 render() {

    return( 
 	<div>

    <Form>
   <Form.Group controlId="formBasicEmail">
    <Form.Label><b>Route name</b></Form.Label>
    <Form.Control id="name" type="text" placeholder="easy 2"  ref="name"/>
    <Form.Text className="text-muted">
      <b>Add Route</b>
    </Form.Text>
    
        <Form.Label><b>City</b></Form.Label>
    <Form.Control type="text" placeholder="Tampere" ref={this.textInput} />
    <Form.Text className="text-muted">
      <b>Add City</b>
    </Form.Text>

   

    
  </Form.Group>
	    </Form>
	       <Button variant="primary" onClick={this.send.bind(this)} type="submit">
	           Add route
  </Button>

	       </div>

    )
  }
}

export default AddRoute;
