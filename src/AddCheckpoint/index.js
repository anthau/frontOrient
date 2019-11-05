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
  
   
  lat="-";
  lon="h";

  send(e) {
    alert('22='  + this.lat)
  }

  saveCoord(e) {
    const { lat, lng } = e.latlng;
    this.lat=lat;
    this.lon=lng;

    alert('testi=' + lng);
    this.forceUpdate();
  }
  render() {


    return (
      <div class="row">
        <div class="col-sm-4">
          <Map center={position} zoom={13} onclick={this.saveCoord.bind(this)}>>
           <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>3-4</Popup>
            </Marker>
          </Map>
        </div>

        <div class="col-sm-4"> 
          <fieldset>
            <p>Lat {this.lat}  </p>
            <p>Lon {this.lon}  </p>
            </fieldset>
                                                                                                  
          <div class="card card1"  >

            <div class="card-body"  >
          
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

          </div>
        </div>
      </div>
    );
  }
}



