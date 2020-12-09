import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
class App extends React.Component {

constructor(props){
  super(props);

}


render(){
  return (
    <Router>
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">TorMovies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/movies">Movies</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies" component={Movies} exact></Route>
          <Route path="/" component={Movies} exact></Route>
          <Route path="/moviedetails/:id" component={MovieDetails} exact></Route>           
          
        </Switch>
     
   
</div>
</Router>
  );
}
}
export default App;
