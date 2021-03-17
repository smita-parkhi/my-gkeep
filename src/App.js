import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Base_layout from './BaseLayout/BaseLayout.component';
//import './App.css';
//import Navbar from './Navbar/Navbar.jsx';
import Notes from './ActivePages/Notes';
import Archive from './Archive/Archive';
import SearchResult from './SearcgResult/SearchResult'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Base_layout> 
          <Route exact path='/' component={Notes}></Route>
          <Route exact path='/archive' component={Archive}></Route>
          <Route exact path='/search' component={SearchResult}></Route>

        </Base_layout>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

