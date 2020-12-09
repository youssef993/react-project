
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class MovieDetails extends React.Component {

constructor(props){
    super(props);
    this.state={
        moviedetails:''
    }

    this.getUrlParams = this.getUrlParams.bind(this);

}
componentDidMount(){
    this.getUrlParams();
}
getUrlParams(){
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "__cfduid=d3652caa8d3964864df433ef79a2c5e251607172560; PHPSESSID=b0f7lusvk1s4rrlreilndnimrm");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+id, requestOptions)
  .then(response => response.text())
  .then((result) => {
      const m = JSON.parse(result);
      this.setState({
          moviedetails : m.data.movie,
      })
  })
  .catch(error => console.log('error', error));
}

render(){
  return (
    <div>
        <h1>{this.state.moviedetails.title}</h1>
        

    </div>
  );
}
}
export default MovieDetails;