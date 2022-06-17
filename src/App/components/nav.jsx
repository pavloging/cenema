import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [active, setActive] = useState('/');
  const handleColor = () => {
    setTimeout(() => {
      if (new URL(window.location.href).pathname.slice(0, 6) === '/films') {
        setActive(new URL(window.location.href).pathname.slice(0, 6));
      } else {
        setActive(new URL(window.location.href).pathname);
      }
    }, 0);
  };
  handleColor();
  return (
    <div className="nav">
      <div className="nav-first">
        <Link to={'/'} onClick={handleColor}>
          <i
            className={
              active === '/'
                ? 'bi-nav-active bi-house-fill'
                : 'bi-nav bi-house-fill'
            }
          ></i>
        </Link>

        <Link to={'/films'} onClick={handleColor}>
          <i
            className={
              active === '/films' ? 'bi-nav-active bi-film' : 'bi-nav bi-film'
            }
          ></i>
        </Link>

        <Link to={'/marcet'} onClick={handleColor}>
          <i
            className={
              active === '/marcet'
                ? 'bi-nav-active bi-basket2-fill'
                : 'bi-nav bi-basket2-fill'
            }
          ></i>
        </Link>

        <Link to={'/like'} onClick={handleColor}>
          <i
            className={
              active === '/like'
                ? 'bi-nav-active bi-heart-fill'
                : 'bi-nav bi-heart-fill'
            }
          ></i>
        </Link>
      </div>

      <div className="nav-last">
        <Link to={'/login'} onClick={handleColor}>
          <i
            className={
              active === '/login'
                ? 'bi-nav-active bi-box-arrow-in-left'
                : 'bi-nav bi-box-arrow-in-left'
            }
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
