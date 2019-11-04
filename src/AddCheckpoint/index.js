import React from 'react';


import { render } from 'react-dom'
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

  send(e) {
    alert('22')
  }

  saveCoord(e) {
    const { lat, lng } = e.latlng;
    alert('222=' + lat)
  }
  render() {
    return (
      <div class="row">
        <div class="col-sm-4">
          <Map center={position} zoom={13} onclick={this.saveCoord}>>
    <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
        </div>

        <div class="col-sm-4">                                                                                                   <p>div</p>
          <div class="card card1"  >
            <fieldset>
            <div class="card-body"  >
              Coordinates unset
          </div>
 
          <div class="card" style={{ backgroundColor: "#00FF80" }}>
            <div class="card-body"  >
              Coordinates set.
            </div>
          </div>




          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" />

            </div>
          </form>
          <button type="button" onClick={this.send} class="btn btn-primary">Save checkpoint1</button>
          </fieldset>
          </div>
        </div>
      </div>
    );
  }
}



