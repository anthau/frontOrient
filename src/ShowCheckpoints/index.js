import React from 'react'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css'
import Map1 from './../Map';

export default class ShowRoutes extends React.Component {
	
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		var data = JSON.stringify({});
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				alert(this.responseText);
			}
		});

		xhr.open("GET", "http://192.168.99.100/api/oBackEnd/webresources/generic");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
		xhr.setRequestHeader("Accept", "*/*");
		xhr.setRequestHeader("Cache-Control", "no-cache");
		xhr.setRequestHeader("Postman-Token", "b549e640-7eb8-43d1-ae0f-a8e86aeafe32,1d038556-5fd6-494e-a550-f08bcb19240f");
		xhr.setRequestHeader("Host", "192.168.99.100");
		xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
		xhr.setRequestHeader("Content-Length", "27");
		xhr.setRequestHeader("Connection", "keep-alive");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.send(data);
	}

	show(e) {
		alert('moi')
	}
	render() {

		return (
			<div class="row">
				<div class="col-sm-4">
					<div>
						<h1>Näytä reitti</h1>
						<Map1/>	
						<select class="form-control" id="sel1">
							<option hidden >1Choose route1</option>
							<option>1</option>
							<option>2</option>

						</select>

						<button type="button" onClick={this.show} class="btn btn-primary">Show rutes </button>
					</div>
				</div>
			</div>

		)
	}
}

