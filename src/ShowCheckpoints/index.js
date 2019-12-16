import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'
import Map1 from './../Map';
import { Fetch } from 'react-data-fetching'
/**Todoo. Käännö karttadata kartan ymmärtämmän muotoon- */
/**integroi kartta */
const axios = require('axios');
const uniqid = require('uniqid');

class Test1 extends React.Component {
	data = {};
	constructor(props) {
		super(props);
		this.state = {
			x: this.props.url
		}
	}

	render() {
		alert(JSON.stringify(this.props))
		return (<p>i</p>)
	}
}

class MapData extends React.Component {
	data = {};
	constructor(props) {
		super(props);
		this.state = {
			x: this.props.url
		}
	}


	render() {

		return (<Fetch
			loader={<p>loader</p>} // Replace this with your lovely handcrafted loader
			url={this.props.url}
			timeout={5000}
		>
			{({ data }) => (<Map1 key={uniqid()}  route={this.props.route} Checkpoints={data}  />) }
		</Fetch>)
		return;
	}

}

/**Reads data from  url and reurhns  */
class ShowRoutes1 extends React.Component {
	data = {};
	constructor(props) {
		super(props);
		this.state = {
			data1: '-',
			didUpdate: false

		};

		alert('init2')


	}




}

export default class ShowRoutes extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			marker: 'w',
			chooseRoute: 1
		};
	}

	componentDidMount() {


	}

	show(e) {
		this.setState({ chooseRoute: e.target.value })
	}

	render() {

		if (this.state.marker === '-')
			return (<p>Loading .... </p>)

		let routeID = this.state.chooseRoute
		let mouse = {}
		const url1 = "http://192.168.99.100/api/oBackEnd/webresources/details/" + this.state.chooseRoute;
		var t = this;
		var x = 2;
		var y = 3;

		return (
			<div class="row">
				<div class="col-sm-4">
					<div>
						<h1> tes12</h1>
						<MapData url={url1} key={uniqid()} route={this.state.chooseRoute} render={(data) => <div>{
						
						alert('tappara 12on!=' + data)}

							<p> uusi1{url1}</p></div>
						}
						/>

						<select ref={this.routeRef} onChange={this.show.bind(this)}>
							<option value="1"> helppo kolmonen</option>
							<option value="2"> vaikea viitonen</option>

						</select>

					</div>
				</div>
			</div>

		)
	}
}

