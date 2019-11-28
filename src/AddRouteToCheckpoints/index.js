import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './../App.css'


export default class AddRouteToCheckpoints extends React.Component {
   render()  {
       return ( <div>
		<h3> Modify page </h3>

		<h6>Add checkpoint</h6>

		<h6>Remove checkpoint</h6>

		<Button variant="primary"  type="submit">Add Checkpoint to Route</Button>
		</div>);
   }
}
