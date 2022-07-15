import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [burger, setBurger] = useState(false);
  const [active, setActive] = useState('/');
  const handleColor = () => {
    setTimeout(() => {
      if (new URL(window.location.href).pathname.slice(0, 6) === '/films') {
        if (window.screen.width <= 767) setBurger(!burger);
        setActive(new URL(window.location.href).pathname.slice(0, 6));
      } else {
        if (window.screen.width <= 767) setBurger(!burger);
        setActive(new URL(window.location.href).pathname);
      }
    }, 0);
  };

  useEffect(() => {
    handleColor();
  }, []);

  return (
    <div className="nav">
      <div className={burger ? 'nav__section-none' : 'nav__section'}>
        <div className="nav__first-section">
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

          <Link to={'/market'} onClick={handleColor}>
            <i
              className={
                active === '/market'
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

        <div className="nav__last-section">
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
      <div className="nav__burger" onClick={() => setBurger(!burger)}>
        <div className="nav__toggle">
          <input type="checkbox" checked={!burger} />

          <span></span>
          <span></span>
          <span></span>

          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
