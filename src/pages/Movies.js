
import React from 'react';
import MovieCard from '../component/MovieCard';
class Movies extends React.Component {

constructor(props){
    super(props);
    this.state={
        movies:[]
    }
this.getMoviesList = this.getMoviesList.bind(this);
}
componentDidMount(){
    this.getMoviesList();
}

getMoviesList(){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "__cfduid=d3652caa8d3964864df433ef79a2c5e251607172560; PHPSESSID=b0f7lusvk1s4rrlreilndnimrm");

var raw = "{\n\"username\" : \"admin\",\n\"password\" : \"admin\"\n}";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://yts.mx/api/v2/list_movies.json?limit&=2", requestOptions)
  .then(response => response.text())
  .then((result) => {
      const moviel= JSON.parse(result);
      console.log(moviel);
      this.setState({
          movies: moviel.data.movies
      })
  })
  .catch(error => console.log('error', error));
}
render(){
  return (
    <div className="container"> 
        <h1>Movies</h1>
        <hr/>
        <div className="movieslist">
            <div className="row">
                {
                    this.state.movies.map((movie)=>{
                            return <MovieCard id={movie.id} bgImg={movie.large_cover_image} title={movie.title_english}/>
            
                    })
                }
                
            </div>
        </div>


    </div>
  );
}
}
export default Movies;
