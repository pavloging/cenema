import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  const [active, setActive] = useState('/');
  const handleColor = () => {
    setTimeout(() => {
      setActive(new URL(window.location.href).pathname);
      console.log(new URL(window.location.href).pathname);
    }, 0);
  };
  return (
    <div className="nav">
      <div className="nav-first">
        <Link to={'/'} onClick={handleColor}>
          <svg
            className={active === '/' ? 'bi-active' : 'bi'}
            viewBox="0 0 16 16"
          >
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
          </svg>
        </Link>

        <Link to={'/film'} onClick={handleColor}>
          <svg
            className={active === '/film' ? 'bi-active' : 'bi'}
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
        </Link>

        <Link to={'/marcet'} onClick={handleColor}>
          <svg
            className={active === '/marcet' ? 'bi-active' : 'bi'}
            viewBox="0 0 16 16"
          >
            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
          </svg>
        </Link>

        <Link to={'/like'} onClick={handleColor}>
          <svg
            className={active === '/like' ? 'bi-active' : 'bi'}
            viewBox="0 0 16 16"
          >
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </Link>
      </div>

      <div className="nav-last">
        <Link to={'/log-out'} onClick={handleColor}>
          <svg
            className={active === '/log-out' ? 'bi-active' : 'bi'}
            viewBox="0 0 16 16"
          >
            <path
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0
                1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1
                0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5
                14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0
                0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0
                0 .708.708l3-3z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
