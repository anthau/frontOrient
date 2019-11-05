import React from 'react';


import { render } from 'react-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 
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

  send(e) {


    confirmAlert({
      title: 'info',
      message: 'Tiedot lähetetty',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
      
      ]
    });

    this.selected = "card card2"
    var data = JSON.stringify({
      "lat": this.lat,
      "lon": this.lon,
      "name": this.name.current.value
    });

    this.lat = "-";
    this.lon = "-";



    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
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

  saveCoord(e) {
    const { lat, lng } = e.latlng;
    this.lat = lat;
    this.lon = lng;
    this.markers.push(<Marker key="1" position={position}><Popup>3-4</Popup></Marker>)

    alert('testi=' + lng);
    this.selected = "card card1"
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
            {this.markers}

          </Map>
        </div>

        <div class="col-sm-4">
          <div style={{marginTop:"80px"}}>
            <div class={this.selected}  >

              <div class="card-body">

                <p class="card-text"> coordinates are set  </p>

              </div>
            </div>
            <fieldset>
              <p>Lat {this.lat}  </p>
              <p>Lon {this.lon}  </p>
            </fieldset>



            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" ref={this.name} />
              </div>
            </form>
            <button type="button" onClick={this.send.bind(this)} class="btn btn-primary">Save checkpoint1</button>
          </div>
        </div>
      </div>


    );
  }
}



