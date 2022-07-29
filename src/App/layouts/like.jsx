import { Link } from 'react-router-dom';
import LikeSvg from '../components/likeSvg';

const Like = () => {
  const likedKey = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) !== 'email' &&
      localStorage.key(i) !== 'password' &&
      localStorage.key(i) !== 'date' &&
      localStorage.key(i) !== 'gender'
    )
      likedKey.push(localStorage.key(i));
  }
  const liked = likedKey.map((el) => {
    return JSON.parse(localStorage.getItem(el));
  });
  return (
    <>
      <div className="films">
        <div className="films__list">
          {liked.length !== 0 ? (
            liked.map((el) => (
              <div key={el.imdbID + 1} className="films__card card">
                <img
                  src={el.Poster}
                  className="films__card-img card-img-top"
                  alt="Poster"
                />
                <div className="films__card-body card-body">
                  <h5 className="films__card-title card-title">{el.Title}</h5>
                  <p className="films__card-text card-text">{el.Genre}</p>
                  <Link
                    rel="noreferrer"
                    to={'/films/' + el.imdbID}
                    className="films__card-btn btn btn-primary"
                  >
                    Watch now
                  </Link>
                  <LikeSvg film={el} />
                </div>
              </div>
            ))
          ) : (
            <h4 className="films__not-favorite">Nothing to favorite :-(</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Like;
