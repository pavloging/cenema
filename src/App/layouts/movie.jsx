const Movie = ({ film, youtube }) => {
  return (
    <div className="movie">
      <div className="movie__container">
        <div className="movie__poster">
          <h1 className="movie__title">{film.Title}</h1>
          <img className="movie__img" src={film.Poster} alt="" />
        </div>
        <div className="movie__description">
          <h4>Year: {film.Year}</h4>
          <h4>Released: {film.Released}</h4>
          <h4>Runtime: {film.Runtime}</h4>
          <h4>Genre: {film.Genre}</h4>
          <h4>Actors: {film.Actors}</h4>
          <h4>Rate: {film.imdbRating}</h4>
          <h5>Plot: {film.Plot}</h5>
        </div>
      </div>
      <iframe
        className="movie__iframe"
        width="100%"
        height="900px"
        src={youtube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Movie;
