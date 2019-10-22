



import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Welcome from  './Welcome'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import App from './App'
import * as serviceWorker from './serviceWorker';


/* class Welcome extends React.Component {


  constructor(props) {
    super(props);


fetch('http://192.168.99.100/api/oBackEnd/webresources/generic'    , {method: "PUT"}).then(function(response) {
	alert("test=" +JSON.stringify(response));
});

    this.state = {
      value: null,
    };
  }

 render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
} */

function About() {
return (
<h1>Jes</h1>
)
}
function Ex() {
return (
  <Router>
    <div>
      <Route path="/test" component={Welcome} />
    </div>
    <div>
      <Route path="/about" component={About} />
    </div>
  </Router>

)

}


class Routing extends React.Component {


  constructor(props) {
    super(props);
}
 render()  {
 
  return(
<Router>
 <Switch>
          <Route path="/">
            <ex />
          </Route>
        </Switch>
    </Router>
)
}
}



ReactDOM.render(<Ex />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
