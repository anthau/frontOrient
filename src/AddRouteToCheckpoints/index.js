import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css'

import { Fetch } from 'react-data-fetching'

const axios = require('axios');


export default class AddRouteToCheckpoints extends React.Component {

	constructor(props) {

		super(props);

		function response1(response) {
		
		}
		axios.get('http://192.168.99.100/api/oBackEnd/webresources/generic', {
			params: {
				ID: 12345
			}
		}).then(function (response) {
	
		}
		)

		this.state = {
			brand: 'test',
			routes: [],
			checkpoint: []
		};
	}

	componentDidMount() {
	
	}

	saveData(e) {
	

	}

	handleResponse(e) {
	
	}
	render() {
		
		return (
			<div>

				< div class="row" >
					<div class="col-sm-3">
						<h3> Modify page </h3>
						<h3> Select route </h3>
						<select class="browser-default custom-select">
							<option selected>Select route </option>

							<Fetch
								loader={<p>lataa</p>} // Replace this with your lovely handcrafted loader
								url="http://192.168.99.100/api/oBackEnd/webresources/generic"
								timeout={5000}
							>
								{({ data }) => data.map( route=>
									<option value={route.id}>{route.name}</option>
									
								)}
							</Fetch>
						
						</select>
					</div>
				</div >

				<h3>Add checkpoint</h3>
				<div class="row">
					<div class="col-sm-3">
						<select class="browser-default custom-select">
							<option selected>Select checkpoint from route</option>
							<option value="1">One</option>
							<Fetch
								loader={<p>lataa</p>} // Replace this with your lovely handcrafted loader
								url="http://192.168.99.100/api/oBackEnd/webresources/checkpoint"
								timeout={5000}
							>
								{({ data }) => data.map( checkpoint=>
									<option value={checkpoint.name}>{checkpoint.name} </option>
									
								)}
							</Fetch>
						</select>

						<Button onClick={this.saveData} variant="primary" type="submit">Add checkpoint to route</Button>
					</div>
				</div>
			</div>

		);
	}
}
