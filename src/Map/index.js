
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Map, Marker, CircleMarker,Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './../App.css';
import L from 'leaflet';

import TextPath from 'react-leaflet-textpath';

delete L.Icon.Default.prototype._getIconUrl;

const position = [51.505, -0.09]

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class Map1  extends React.Component   {

	constructor(props) {
		super(props);

		let text=[];
		
		this.props.test.map(point=>      text.push(
			<div key={1}>
                        <TextPath
                         positions={[[point.lat -  0.001 , point.lon-0.0015] , [point.lat - 0.001, point.lon + 0.0015]]} 
                         text={point.name}
                         center
                         Below
                         offset={10}
                        key={1}
                        /><CircleMarker  key={1} center={[point.lat, point.lon]}/>
			</div>
                ))


		this.state = {points: text};

	}	
	
	render()  {
		alert('moi3='  + this.props.test)

		const position = [0, 0]

		const coord = [30, 10]
		var latlng1 = L.latLng(50.5, 30.5);
	   	return(
			<div>

      				<Map    center={position}
			  		opacity={0.5}  zoom={13} >
          					<TileLayer
            					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          					/>
						{this.state.points}
				  <CircleMarker center={[10,10]}/>
				  <CircleMarker center={[30,120]}/>
          	
        		</Map>

		</div>
		)
	}
}
