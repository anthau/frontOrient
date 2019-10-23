



import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Welcome from  './Welcome'
import AddRoute from  './AddRoute'
import About from  './About'


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


function Ex() {
return (
  <Router>
    <div>
      <Route path="/test" component={Welcome} />
    </div>
    <div>
      <Route path="/about" component={About} />
    </div>


    <div>
      <Route path="/AddRoute" component={AddRoute} />
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
