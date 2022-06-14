import React from 'react';
import { Link } from 'react-router-dom';
import GetFilms from '../untils/getFilms.js';
import LikeSvg from '../components/likeSvg.jsx';
const Films = () => {
  const getFilms = GetFilms('list');
  return (
    <>
      <div className="films">
        <div className="films-list d-flex flex-wrap justify-content-center">
          {getFilms[0] !== 'film' ? (
            getFilms.map((el) => (
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
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Films;
