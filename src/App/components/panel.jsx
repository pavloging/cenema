import { useState } from 'react';
import { Link } from 'react-router-dom';
import GetFilms from '../untils/getFilms.js';

const Panel = () => {
  const [dropDown, setDropDown] = useState(false);
  const [icon, setIcon] = useState(false);
  const [change, setChange] = useState('');
  const getFilms = GetFilms('list')[0];
  const hangleIcon = () => setIcon(!icon);
  const hangleDropDown = () => setDropDown(!dropDown);

  return (
    <div className="panel">
      <div className={icon ? 'search active' : 'search'}>
        <div className="icon-github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pavlovsun"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div className="icon" onClick={hangleIcon}>
          <i className="bi bi-search"></i>
        </div>

        <form className="d-flex" role="search">
          <input
            className={
              icon
                ? 'input active form-control me-2'
                : 'input form-control me-2'
            }
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setChange(event.target.value)}
          />
        </form>
      </div>
      <div className="searchRes">
        {1 < getFilms.length
          ? getFilms.map((el) => {
              return el.Title.toLowerCase().trim() ===
                change.toLowerCase().trim() ? (
                <Link to={'/films/' + el.imdbID} key={el.imdbID + 1}>
                  <div>
                    <img src={el.Poster} alt="" /> <p>{el.Title}</p>
                  </div>
                </Link>
              ) : null;
            })
          : null}
      </div>
      <div className="risycle" onClick={hangleDropDown}>
        <img src="/images/mary.jpg" alt="Profile-img" />
      </div>
      <div className={dropDown ? 'dropdown' : 'none'}>
        <Link to={'/profile'}>
          <p>
            <i className="bi bi-person"></i> Profile
          </p>
        </Link>
        <Link to={'/settings'}>
          <p>
            <i className="bi bi-gear-fill"></i> Settings
          </p>
        </Link>
        <Link to={'/log-out'}>
          <p>
            <i className="bi bi-box-arrow-right"></i> Log-out
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Panel;
