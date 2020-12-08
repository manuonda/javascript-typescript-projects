import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'
import UserDetail from './views/UserDetail'

function App() {
  return (
     <Router>
       <Route path="/" component={Home}></Route>
       <Route path="/user-detail/:userId">
        <UserDetail></UserDetail> 
       </Route>
     </Router>
    );
}

export default App;
