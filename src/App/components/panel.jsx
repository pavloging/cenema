import { useState } from 'react';
import { Link } from 'react-router-dom';
import GetFilms from '../untils/getFilms.js';

const Panel = () => {
  const [dropDown, setDropDown] = useState(false);
  const [icon, setIcon] = useState(false);
  const [change, setChange] = useState('');
  const getFilms = GetFilms('list')[0];

  return (
    <div className="panel">
      <div className={icon ? 'panel__search active' : 'panel__search'}>
        <div className="panel__icon-github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pavlovsun"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div
          className="panel__icon-search"
          onClick={() => {
            setIcon(!icon);
          }}
        >
          <i className="bi bi-search"></i>
        </div>

        <form className="panel__form" role="search">
          <input
            className={
              icon ? 'input active form-control' : 'input form-control'
            }
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setChange(event.target.value)}
          />
        </form>
      </div>
      <div className="panel__search-hidden-result">
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
      <div
        className="panel__icon-profile"
        onClick={() => setDropDown(!dropDown)}
      >
        <img
          className="panel__icon-profile-img"
          src="/images/mary.jpg"
          alt="Profile-img"
        />
      </div>
      <div className={dropDown ? 'panel__dropdown' : 'panel__none'}>
        <Link className="panel__profile-link" to={'/profile'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-person"></i> Profile
          </p>
        </Link>
        <Link className="panel__profile-link" to={'/settings'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-gear-fill"></i> Settings
          </p>
        </Link>
        <Link className="panel__profile-link" to={'/log-out'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-box-arrow-right"></i> Log-out
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Panel;
