import { useState } from 'react';
import { Link } from 'react-router-dom';
import GetFilms from '../untils/getFilms.js';
import LikeSvg from '../components/likeSvg.jsx';
import Pagination from '../components/pagination.jsx';
import { paginate } from '../untils/paginate.js';

const Films = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const getFilms = GetFilms('list')[0];
  const pageSize = 10;
  const handlePageChange = (pageIndex) => setCurrentPage(pageIndex);
  const filmCrop = paginate(getFilms, currentPage, pageSize);
  return (
    <>
      <div className="films">
        <div className="films-list d-flex flex-wrap justify-content-center">
          {getFilms[0] !== 'film' ? (
            filmCrop.map((el) => (
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
                    to={'films/' + el.imdbID}
                    className="btn btn-primary"
                  >
                    Watch now
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
        <Pagination
          itemsCount={getFilms.length}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Films;
