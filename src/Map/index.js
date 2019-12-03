

import React from 'react';
import { Map, CircleMarker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './../App.css';
import L from 'leaflet';

import TextPath from 'react-leaflet-textpath';

delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class Map1  extends React.Component   {

    constructor(props) {
	super(props);
	let text=[];
        let  point_x=0;
        let  point_y=0;
	try  {
            point_x =this.props.test[0].lat;
	    point_y=this.props.test[0].lon;
        } catch(e)  {
        } 
	
	alert(JSON.stringify(this.props.test))
	this.props.test.map(point=>  {      
	    text.push(
                    <div key={1}>
		    <TextPath
                positions={[[point.lat -  0.0005 , point.lon-0.0015] , [point.lat - 0.0005, point.lon + 0.0015]]} 
                text={point.name}
                center
                Below
                offset={10}
                key={1}
                    /><CircleMarker  key={1} center={[point.lat, point.lon]}/>
		    </div>
            );
            return 2;
	    
	})
             
	this.props.test.slice(1).map(point2=> 
				     { alert('uusi');text.push(
					     <div key={1}>
					     <TextPath
					 positions={[[point_x , point_y] , [point2.lat, point2.lon ]]}
					 text=""
					 center
					 Below
					 offset={10}
					 key={1}
					     />
					     </div> 
				     );
				       point_x=point2.lat;
				       point_y=point2.lon; 
				       return 2; 
				     }
				    );

   
	this.state = {points: text};
    }	
	
    render()  {
	const position = [0, 0]
	return(
		<div>

      		<Map    center={position}
	    opacity={0.5}  zoom={13} >
          	<TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          	/>
		<div>
		{this.state.points}
	    </div>
          	
            </Map>
		
	    </div>
	)
    }
}
