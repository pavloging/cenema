const Market = () => {
  return (
    <div className="market">
      <div className="market__container">
        <div className="market__card">
          <div className="market__box">
            <div className="market__content">
              <div className="market__icon">
                <i className="bi bi-battery"></i>
              </div>
              <h3 className="market__title">Basic</h3>
              <h4 className="market__price">
                <sup className="market__price-dollar">$</sup>25
              </h4>
              <ul className="market__items-list">
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;25 Top Films
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Add favorite
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Online movies
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-minus"></i>
                  &nbsp;Live Support
                </li>
              </ul>
              <a className="market__link" href="/market" rel="noreferrer">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="market__card">
          <div className="market__box">
            <div className="market__content">
              <div className="market__icon">
                <i className="bi bi-battery-half"></i>
              </div>
              <h3 className="market__title">Standart</h3>
              <h4 className="market__price">
                <sup className="market__price-dollar">$</sup>50
              </h4>
              <ul className="market__items-list">
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;50 Top Films
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Add favorite
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Online movies
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-minus"></i>
                  &nbsp;Live Support
                </li>
              </ul>
              <a className="market__link" href="/market" rel="noreferrer">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="market__card">
          <div className="market__box">
            <div className="market__content">
              <div className="market__icon">
                <i className="market__bi-battery-charging bi bi-battery-charging"></i>
              </div>
              <h3 className="market__title">Premium</h3>
              <h4 className="market__price">
                <sup className="market__price-dollar">$</sup>100
              </h4>
              <ul className="market__items-list">
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;95 Top Films
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Add favorite
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Online movies
                </li>
                <li className="market__item">
                  <i className="bi bi-patch-check"></i>
                  &nbsp;Live Support
                </li>
              </ul>
              <a className="market__link" href="/market" rel="noreferrer">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
