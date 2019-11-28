import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './../App.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

const position = [51.505, -0.09]

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class AddCheckpoint extends React.Component {
    lat = "-";
    lon = "-";
    name = React.createRef();
    selected = "card card2"
    markers = [];
    
    sendData() {
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	this.selected = "card card2"
	let data = JSON.stringify({
	    "lat": this.lat,
	    "lon": this.lon,
	    "name": this.name.current.value
	});
	this.lat = "-";
	this.lon = "-";
	
	xhr.addEventListener("readystatechange", function () {
	    if (this.readyState === 4) {
		alert(this.responseText);
	    }
	});
	
	xhr.open("PUT", "http://192.168.99.100/api/oBackEnd/webresources/checkpoint");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "*/*");
	xhr.setRequestHeader("Cache-Control", "no-cache");
	xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
	xhr.setRequestHeader("Content-Length", "34");
	xhr.setRequestHeader("Connection", "keep-alive");
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.send(data);
	this.forceUpdate();
  }
    
    send(e) {
	
	
    confirmAlert({
	title: 'Checkpoint name=' + this.name.current.value,
	message: 'Do you want to send messages? ',
	
	buttons: [
        {
            label: 'Send 1data',
            onClick: () => {
		
            this.sendData();
		alert('Data saved')
          }
        },
	    
        {
            label: "cancel",
            onClick: () => alert('Save cancelled')
        },
	    
	]
    });
	

	

  }
    setCheckpoint(e) {


	confirmAlert({
	    
	    title: 'Checkpoint name=' + this.name.current.value,
	    message: 'Do sent you want to send messages? ',
	    customUI: ({ title, message, onClose }) => 
		
		<div  style={{width:300, marginTop: "-80px",position : "absolute", left : 10, top: 60 }}>
		<Map center={position} zoom={13} onclick={this.saveCoord.bind(this)}>>
		<TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
		/>
		{this.markers}
	    
            </Map>
		<button type="button" onClick={this.send.bind(this)} class="btn btn-primary">Close map</button>
		</div>,
	    
	    buttons: [
          {
              label: 'Send1data',
              onClick: () => {
		  
            this.sendData();
		  alert('Data saved')
              }
        },
		
		{
		    label: "cancel",
		    onClick: () => alert('Save cancelled')
		},
		
	    ]
	});

  }
    
    saveCoord(e) {
	alert('setdata')
	const { lat, lng } = e.latlng;
	this.lat = lat;
	this.lon = lng;
	this.markers.push(<Marker key="1" position={position}><Popup>3-4</Popup></Marker>)
	this.selected = "card card1"
	this.forceUpdate();
    }
    render() {


	return (
		<div class="row">
		<div class="col-sm-4"></div>
		<div style={{ marginTop: "80px",marginLeft: "20px" , position : "fixed", left : 10 }}>
		
            <div class={this.selected}  >
		<div class="card-body">
                <p class="card-text"> Coordinates are set  </p>
		</div>
		</div>
		
            <fieldset>
		<p> Coordinates,which are set</p>
		<p>Lat1 {parseFloat(this.lat).toFixed(3)}  </p>
		<p>Lon  {parseFloat(this.lon).toFixed(3)}  </p>
		</fieldset>
		
		<form>
		<div class="form-group">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" ref={this.name} />
		</div>
		</form>
		<button type="button" onClick={this.send.bind(this)} class="btn btn-primary">Save checkpoint1</button>
		
		&nbsp; <button type="button" onClick={this.setCheckpoint.bind(this)} class="btn btn-primary">Set Checkpoint</button>
		</div>
		
            </div>
     
	);
    }
}



