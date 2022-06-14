import React from 'react';
import GetFilms from '../untils/getFilms.js';

const Home = () => {
  const getFilm = GetFilms('random');
  const [film, index] = [getFilm[0], { img: getFilm[1], youtube: getFilm[2] }];
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${index.img})`
      }}
    >
      <div className="menu-info">
        <div className="info">
          <p>&middot; Live</p>
          <h1>{film.Title}</h1>
          <h4>Genre: {film.Genre}</h4>
          <h4>Year: {film.Year}</h4>
          <h4>Rate: {film[0] !== 'film' ? film.Ratings[0].Value : ''}</h4>
          <h4>Time: {film.Runtime}</h4>

          <h5>{film.Plot}</h5>
          <a target="_blank" rel="noreferrer" href={index.youtube}>
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
          <img src="/images/mov/movie.webp" alt="movie-img" />
          <img src="/images/mov/movie1.webp" alt="movie-img" />
          <img src="/images/mov/movie2.webp" alt="movie-img" />
          <img src="/images/mov/movie3.webp" alt="movie-img" />
          <img src="/images/mov/movie4.webp" alt="movie-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
