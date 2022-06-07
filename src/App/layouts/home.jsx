import React, { useState, useEffect } from 'react';

//Random bg
const path = '/images/bg';
const background = [
  {
    youtube: 'https://www.youtube.com/embed/foyufD52aog',
    url: 'https://www.omdbapi.com/?i=tt6139732&apikey=ec63a73c',
    img: `${path}/aladdin.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/MdENmefJRpw',
    url: 'https://www.omdbapi.com/?i=tt0088763&apikey=ec63a73c',
    img: `${path}/back-to-the-future.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/Ify9S7hj480',
    url: 'https://www.omdbapi.com/?i=tt8367814&apikey=ec63a73c',
    img: `${path}/gentlemen.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    url: 'https://www.omdbapi.com/?i=tt0816692&apikey=ec63a73c',
    img: `${path}/interstellar.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/Ga6RYejo6Hk',
    url: 'https://www.omdbapi.com/?i=tt2380307&apikey=ec63a73c',
    img: `${path}/coco.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/LiK2fhOY0nE',
    url: 'https://www.omdbapi.com/?i=tt1677720&apikey=ec63a73c',
    img: `${path}/ready-player-one.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/g4Hbz2jLxvQ',
    url: 'https://www.omdbapi.com/?i=tt4633694&apikey=ec63a73c',
    img: `${path}/spider-man-into-the-spider-verse.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    url: 'https://www.omdbapi.com/?i=tt0468569&apikey=ec63a73c',
    img: `${path}/the-dark-knight.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/doSJxiYp9yo',
    url: 'https://www.omdbapi.com/?i=tt0129167&apikey=ec63a73c',
    img: `${path}/the-iron-giant.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/CZ1CATNbXg0',
    url: 'https://www.omdbapi.com/?i=tt0910970&apikey=ec63a73c',
    img: `${path}/walle.webp`
  }
];
const index = background[Math.floor(Math.random() * 10)];

const Home = () => {
  const [film, setFilm] = useState(['film']);

  const getAnswer = async () => {
    const res = await fetch(index.url);
    const json = await res.json();
    setFilm(json);
  };

  useEffect(() => {
    getAnswer();
  }, []);
  console.log(film);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${index.img})`
      }}
    >
      <div className="menu-card">
        <div className="info">
          <p>&middot; Live</p>
          <h1>{film.Title}</h1>
          <h4>Genre: {film.Genre}</h4>
          <h4>Year: {film.Year}</h4>
          <h4>Rate: {film[0] !== 'film' ? film.Ratings[0].Value : '10/10'}</h4>
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
