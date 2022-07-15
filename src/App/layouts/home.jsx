import { Link } from 'react-router-dom';
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
      <div className="home__info">
        <p className="home__paragraph">&middot; Live</p>
        <h1 className="home__film-title">{film.Title}</h1>
        <h3 className="home__child-title">Genre: {film.Genre}</h3>
        <h3 className="home__child-title">Year: {film.Year}</h3>
        <h3 className="home__child-title">
          Rate: {film[0] !== 'film' ? film.Ratings[0].Value : ''}
        </h3>
        <h3 className="home__child-title">Time: {film.Runtime}</h3>

        <h4 className="home__description-title">{film.Plot}</h4>
        <a
          className="home__link"
          target="_blank"
          rel="noreferrer"
          href={index.youtube}
        >
          Watch now
        </a>
      </div>
      <div className="home__movies">
        <div className="home__mov-title">
          <h1>Live mov</h1>
          <ul className="home__list">
            <li>
              <img
                className="home__item-lamp"
                src="/images/lamp/lamp.png"
                alt="lamp-img"
              />
            </li>
            <li>
              <img
                className="home__item-i"
                src="/images/lamp/i.png"
                alt="lamp-img"
              />
            </li>
          </ul>
          <h1>es</h1>
        </div>
        <div className="home__poster">
          <Link to={'/films/tt1677720'}>
            <img src="/images/mov/movie.webp" alt="movie-img" />
          </Link>
          <Link to={'/films/tt4633694'}>
            <img src="/images/mov/movie2.webp" alt="movie-img" />
          </Link>
          <Link to={'/films/tt0120338'}>
            <img src="/images/mov/movie3.webp" alt="movie-img" />
          </Link>
          <Link to={'/films/tt0068646'}>
            <img src="/images/mov/movie4.webp" alt="movie-img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
