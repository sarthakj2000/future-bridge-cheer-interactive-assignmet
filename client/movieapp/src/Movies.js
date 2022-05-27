import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
const Movies = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get('/get_movies').then((res) => {
      console.log(res.data.movies);
      setState(res.data.movies);
    });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'cursive', color: 'blue' }}>
        Movies
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridRowGap: '5px',
        }}>
        {/* {state.map((movie) => ( */}
        {console.log(state)}
        {state.map((item) => {
          return (
            <MovieCard name={item.name} rating={item.rating} date={item.date} />
          );
        })}

        {/* ))} */}
      </div>
    </>
  );
};

export default Movies;
