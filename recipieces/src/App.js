//dependency 'npm install react-async'
import { Link } from 'react-router-dom';

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
//the chips for genres stuff
import Chip from '@material-ui/core/Chip';
//for routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//addMovie.js
import {AddMovie} from './addMovie.js';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//npm install @material-ui/icons




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/addMovie">
              {/* TODO: add movie form component here*/}
              {AddMovie()}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Assalam Alaikum</h1>
        {/*inside HTML so need to use curly brackets for JS*/}
        <Async promiseFn={getMovies}> 
          <Async.Loading>Loading...</Async.Loading>
          <Async.Fulfilled>
            {data => {
              return(
                <ul>
                  <div className="container">
                  {data.books.map((movie, index) => (//'movies' -> 'books'
                    <MovieCard 
                    key={index}
                    title={movie.title}
                    yearReleased={movie.yearReleased}
                    imageURL={movie.imageURL}
                    genres={movie.genres}
                    />
                  ))}
                  </div>
                </ul>
              )}}
          </Async.Fulfilled>
          <Async.Rejected>Error!</Async.Rejected>
        </Async>
        <Link to="/addMovie">
          <Fab color="primary" aria-label="add" 
          style={{positon: 'fixed', right: 0, bottom: 0, margin: 30}}>
            <AddIcon />
          </Fab> 
        </Link>
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
            <div>
              {props.genres.map((genre, index) => (
                <Chip key={index} label={genre} style={{margin: 5}}/>
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
export default App;

