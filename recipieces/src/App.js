//dependency 'npm install react-async'
import React from 'react';
import Async from 'react-async';
import './App.css';
import {getMovies} from  './services/movieService.js';
//if it's a function then we do curly brackets around it - {getMovies}
//if it's a 'default export' back there, then can leave without brackets

//dependency 'npm install @material-ui/core'
//https://material-ui.com/components/cards/ -> the media (lizard) card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assalam Alaikum</h1>
        {/*inside HTML so need to use curly brackets for JS*/}
        <Async promiseFn={getMovies}> 
          <Async.Loading>Loading...</Async.Loading>
          <Async.Fulfilled>
            {data => {
              return(
                <ul>
                  {data.movies.map((movie, index) => (
                    <MovieCard 
                    key={index}
                    title={movie.title}
                    yearReleased={movie.yearReleased}
                    imageURL={movie.imageURL}
                    genres={movie.genres}

                    
                    />
                  ))}
                </ul>
              )}}
          </Async.Fulfilled>
          <Async.Rejected>Error!</Async.Rejected>
          
        </Async>
      </header>
    </div>
  );
}

function MovieCard(props){
  return (

      <Card style={{width: 225, margin: 20}}> {/*inline styling here */}
        <CardActionArea>
          <CardMedia
            style={{height: 400}}
            image={props.imageURL}//"/static/images/cards/contemplative-reptile.jpg"
            title={props.title}//"Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title} ({props.yearReleased})
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
export default App;
