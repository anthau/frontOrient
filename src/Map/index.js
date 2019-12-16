
import React from 'react';
import { Map, CircleMarker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './../App.css';
import L from 'leaflet';
import TextPath from 'react-leaflet-textpath';
import Fetch from 'react-fetch'

delete L.Icon.Default.prototype._getIconUrl;

class TestComponent extends React.Component {
	render() {
		alert('jes' + JSON.stringify(this.props))
		return (<p>Test</p>)
	}
}
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
class ShowRoutes1 extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		alert("data=" + this.props.data1)
		return (


			<Fetch url={this.props.data1}>
				<TestComponent />
			</Fetch>

		);
	}


}

class DrawMapLines extends React.Component {
	point_x = 0;
	point_y = 0;

	constructor(props) {
		super(props);

	}

	render() {

		const pointData = this.props.data;
	
		try {
			let lat=pointData[0][4]
			let lon=pointData[0][5]
			let count = 1;
			return (
				pointData.slice(1).map(point =>
					<TextPath
						positions={[[lat, lon], [point[4], point[5]]]}
						center

						offset={10}

					>  {
						lat=point[4],
						lon=point[5] 
					 } 
					 </TextPath>

				)
			)
		} catch (e) {

			return (<div></div>)
		}


	}
}

class DrawMapCircles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let key = 100;
		const uniqid = require('uniqid');
		return (this.props.data.map(point =>
			<div>
				<TextPath
					positions={[[point[4] - 0.0005, point[5] - 0.0015], [point[4] - 0.0005, point[5] + 0.0015]]}
					text={point[6]}
					center
					Below
					offset={10}
				/>




			</div>));


	}
}



export default class Map1 extends React.Component {
	point_x = 0;
	point_y = 0;

	constructor(props) {
		super(props);
		let text = [];


		try {
			this.point_x = this.props.test[0].lat;
			this.point_y = this.props.test[0].lon;
		} catch (e) {
		}

		this.state = { points: text };
	}

	render() {
		const data1 = this.props.Checkpoints;
		alert('valinta=' + JSON.stringify(data1))

		let items1 = [];
		try {
			data1.map(point => items1.push(<CircleMarker key={1} center={[point[4], point[5]]} />))
		} catch (e) {

		}


		const position = [this.point_x, this.point_y]
		let t = this;
		try {
			return (
				<div>

					<Map center={position} opacity={0.5} zoom={6} >
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						/>
						{items1}
						<DrawMapLines data={data1} />
					</Map>
				</div >
			)
		} catch (e) {

		}
	}
}
