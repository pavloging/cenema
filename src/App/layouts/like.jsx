import React from 'react';
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
  console.log(liked.length !== 0);
  return (
    <>
      <div className="films">
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ margin: '0 12%' }}
        >
          {liked.length !== 0 ? (
            liked.map((el) => (
              <div
                key={el.imdbID + 1}
                className="card m-3"
                style={{ width: '18rem' }}
              >
                <img src={el.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.Title}</h5>
                  <p className="card-text">{el.Genre}</p>
                  <Link
                    rel="noreferrer"
                    to={el.Title}
                    className="btn btn-primary"
                  >
                    Go somewhere
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
