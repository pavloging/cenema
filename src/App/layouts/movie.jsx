const Movie = ({ film, youtube }) => {
  return (
    <div className="movie">
      <h1 className="movie__title">{film.Title}</h1>
      <img src={film.Poster} alt="" />
      <h4>Year: {film.Year}</h4>
      <h4>Released: {film.Released}</h4>
      <h4>Runtime: {film.Runtime}</h4>
      <h4>Genre: {film.Genre}</h4>
      <h4>Actors: {film.Actors}</h4>
      <h4>Rate: {film.imdbRating}</h4>
      <h5>Plot: {film.Plot}</h5>
      <iframe
        width="90%"
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
