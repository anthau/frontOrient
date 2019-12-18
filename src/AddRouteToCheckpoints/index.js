import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css'
import $ from "jquery";
import { Fetch } from 'react-data-fetching'

const axios = require('axios');


export default class AddRouteToCheckpoints extends React.Component {

	constructor(props) {

		super(props);


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

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://localhost:8080/oBackEnd/webresources/details",
			"method": "PUT",
			"headers": {
			  "Content-Type": "application/json",
			  "cache-control": "no-cache",
			  "Postman-Token": "1ce1ca17-d91f-40ad-836f-520d0e589b2e"
			},
			"processData": false,
			"data": "{\"checkpointid\" : 1,\"routeID\" : 4}"
		  }
		  
		  $.ajax(settings).done(function (response) {
			console.log(response);
		  });
		alert('sends data forward')

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
								loader={<p>loading </p>} // Replace this with your lovely handcrafted loader
								url="http://192.168.99.100/api/oBackEnd/webresources/generic"
								timeout={5000}
							>
								{({ data }) => data.map(route =>
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

							<Fetch
								loader={<p>loading</p>} // Replace this with your lovely handcrafted loader
								url="http://192.168.99.100/api/oBackEnd/webresources/checkpoint"
								timeout={5000}
							>
								{({ data }) => data.map(checkpoint =>
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
