import React, { useState, useEffect } from 'react';
import Index from '../untils/index.js';

const Home = () => {
  const [film, setFilm] = useState(['film']);

  const getAnswer = async () => {
    const res = await fetch(Index.url);
    const json = await res.json();
    setFilm(json);
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Index.img})`
      }}
    >
      <div className="menu-card">
        <div className="info">
          <p>&middot; Live</p>
          <h1>{film.Title}</h1>
          <h4>Genre: {film.Genre}</h4>
          <h4>Year: {film.Year}</h4>
          <h4>Rate: {film[0] !== 'film' ? film.Ratings[0].Value : ''}</h4>
          <h4>Time: {film.Runtime}</h4>

          <h5>{film.Plot}</h5>
          <a target="_blank" rel="noreferrer" href={Index.youtube}>
            Watch now
          </a>
        </div>
      </div>
      <div className="movies">
        <div className="lable">
          <h1>Live mov</h1>
          <div>
            <div className="light-lamp">
              <img
                className="lamp"
                src="/images/lamp/lamp.png"
                alt="lamp-img"
              />
            </div>
            <img className="i" src="/images/lamp/i.png" alt="lamp-img" />
          </div>

          <h1>es</h1>
        </div>
        <div className="poster">
          <img src="/images/mov/movie.avif" alt="movie-img" />
          <img src="/images/mov/movie1.avif" alt="movie-img" />
          <img src="/images/mov/movie2.avif" alt="movie-img" />
          <img src="/images/mov/movie3.avif" alt="movie-img" />
          <img src="/images/mov/movie4.avif" alt="movie-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
<>

</>
*/
