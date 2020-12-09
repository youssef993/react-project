import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const style ={
    card:{
        backgroundImage: 'url()',
        backgroundSize: '100% 100%',
        height: '454px'
    }
}
class MovieCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: props.title,
            id: props.id,
            bgImg: props.bgImg


        }
    }




formatMovieCardStyle(){
    return{
        backgroundImage: 'url('+ this.state.bgImg+')',
        backgroundSize: '100% 100%',
        height: '454px'
    }
}







    render(){
        return(
            <div className="col-sm-4">
                <Link to={"/moviedetails/"+ this.state.id}>
                <div className="movie-card" style={this.formatMovieCardStyle()}>
                    
                     
                        <div className="card" style={{backgroundColor:'transparent'}}>
                             <h5 className="card-title tit">{this.state.title}</h5>
                
                        </div>
                    
                </div>
                </Link>
            </div>
        );

    }
}
export default MovieCard;