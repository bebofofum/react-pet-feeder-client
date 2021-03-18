import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import PetsContainer from './containers/PetsContainer'
import PetsFormContainer from './containers/PetsFormContainer'
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App">

     <Router>
       <NavBar />

       <Switch>
          <Route exact path="/">
            <PetsContainer />
          </Route>
          <Route exact path="/pets/new" render={(routerProps) => <PetsFormContainer anotherProp={"additional props like this"} {...routerProps}/>}>
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
