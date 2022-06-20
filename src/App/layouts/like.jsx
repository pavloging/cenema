import { Link } from 'react-router-dom';
import LikeSvg from '../components/likeSvg';

const Like = () => {
  const likedKey = [];
  for (let i = 0; i < localStorage.length; i++) {
    likedKey.push(localStorage.key(i));
  }
  const liked = likedKey.map((el) => {
    return JSON.parse(localStorage.getItem(el));
  });
  return (
    <>
      <div className="films">
        <div className="films-list d-flex flex-wrap justify-content-center">
          {liked.length !== 0 ? (
            liked.map((el) => (
              <div
                key={el.imdbID + 1}
                className="card m-3"
                style={{ width: '18rem' }}
              >
                <img src={el.Poster} className="card-img-top" alt="Poster" />
                <div className="card-body">
                  <h5 className="card-title">{el.Title}</h5>
                  <p className="card-text">{el.Genre}</p>
                  <Link
                    rel="noreferrer"
                    to={'/films/' + el.imdbID}
                    className="btn btn-primary"
                  >
                    Watch now
                  </Link>
                  <LikeSvg film={el} />
                </div>
              </div>
            ))
          ) : (
            <h4 className="not-favorite">Nothing to favorite :-(</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Like;
