import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'
import Map1 from './../Map';

export default class ShowRoutes extends React.Component {
	
	constructor(props) {
		super(props);		
		this.state = {
			marker: '-'
	
		  };
		
		//this.setState({ input: text })
	}

	componentDidMount() {
		alert('lataa')
		var data = JSON.stringify({});
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		var t=this;

		xhr.addEventListener("readystatechange", function () {

			if (this.readyState === 4) {
			        alert("testilataus=" + this.responseText)	
                               let items=JSON.parse(this.responseText);
				t.setState({ marker: items })

				items.map(item=>alert('alkio'))
			}
		});

		xhr.open("GET", "http://192.168.99.100/api/oBackEnd/webresources/checkpoint");
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.setRequestHeader("Accept", "*/*");
		xhr.setRequestHeader("Cache-Control", "no-cache");
	        xhr.setRequestHeader("Host", "192.168.99.100");
		xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
		xhr.setRequestHeader("Content-Length", "27");
		xhr.setRequestHeader("Connection", "keep-alive");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.send(data);
	}

	show(e) {
		alert('mo2i')
	}
	render()  {
		alert('12jesjeswww='  + this.state.marker)
	
		if(this.state.marker==='-')
			return (<p>Test</p>)

		
		return (
			<div class="row">
				<div class="col-sm-4">
					<div>
						<h1>Näytä reitti</h1>
						<Map1  test={this.state.marker}/>	
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

