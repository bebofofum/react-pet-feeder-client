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
import PetFeedingsShowContainer from './containers/PetFeedingsShowContainer'
import NewFeedingContainer from './containers/NewFeedingContainer'

import OwnersContainer from './containers/OwnersContainer'
import OwnersFormContainer from './containers/OwnersFormContainer'

import NavBar from './components/NavBar';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import ProtectedRoute from './components/ProtectedRoute'
import withAuth from './components/auth/withAuth'



function App() {

  return (
    <div className="App">

     <Router>
       <NavBar />

       <Switch>
          <Route 
            exact path="/">
             <PetsContainer />
          </Route>
          <Route 
            exact path="/pets/new" 
            render={(routerProps) => <PetsFormContainer 
            anotherProp={"additional props like this"} {...routerProps}/>} />
          <Route 
            exact path="/pets/:pet_id/feedings/new" 
            render={(routerProps) => <NewFeedingContainer 
            someOwnerProp={"how do I get this?"} {...routerProps}/>} />
          <Route 
            exact path="/owners/"> 
              <OwnersContainer />
          </Route>
          <Route 
            exact path="/pets/:pet_id" 
            render={(routerProps) => <PetFeedingsShowContainer {...routerProps} />} /> 
          <Route 
            exact path="/owners/new" 
            render={(routerProps) => <OwnersFormContainer {...routerProps}/>} />
          <Route 
            exact path="/signup" component={Signup} />
          <Route 
            exact path="/login" component={Login} />
          <Route 
            exact path="/protected_route" component={withAuth(ProtectedRoute)} />

       </Switch>
     </Router>
    </div>
  );
}

export default App;
