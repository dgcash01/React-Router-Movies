import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import MovieCard from './Movies/MovieCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  
  return (
    <div className="App">
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path='/movies/:id'>
        <Movie />
      </Route>
    </div>
  );
}
export default App;
