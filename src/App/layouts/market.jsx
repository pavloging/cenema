import { useState } from 'react';
const Market = () => {
  const [payment, setPayment] = useState();
  const [val, setVal] = useState('');

  //Bank
  const getBank = () => {
    let logo;
    if (val[0] === '3') {
      logo = '/images/payment/bank/ru-rosbank-big-original.svg';
    }
    if (val === '4276' || val === '4279') {
      logo = '/images/payment/bank/ru-sberbank-big-inverted.svg';
    }
    return logo;
  };

  const getColor = () => {
    if (val === '4276' || val === '4279') {
      return { background: ' #1a9f29' };
    }
  };

  const hiddenBank = () => {
    let brand;
    if (val === '4276' || val === '4279') {
      return (brand = 'binking__form-bank-logo');
    }
    if (true) {
      // eslint-disable-next-line no-unused-vars
      return (brand = 'binking__form-bank-logo binking__hide');
    }
  };

  //Brand
  const getBrand = () => {
    let logo;
    if (val[0] === '3') {
      logo = '/images/payment/brand/american-express-original.svg';
    }
    if (val[0] === '4') {
      logo = '/images/payment/brand/visa-original.svg';
    }
    if (val[0] === '5') {
      logo = '/images/payment/brand/mastercard-original.svg';
    }
    return logo;
  };

  const hiddenBrand = () => {
    let brand;
    if (val[0] === '3' || val[0] === '4' || val[0] === '5') {
      return (brand = 'binking__form-brand-logo');
    }
    if (true) {
      // eslint-disable-next-line no-unused-vars
      return (brand = 'binking__form-brand-logo binking__hide');
    }
  };

  const getVal = (text) => {
    //spaces
    if (text.length > 4) {
      text = `${text.slice(0, 4)} ${text.slice(4)}`;
    }
    if (text.length > 9) {
      text = `${text.slice(0, 9)} ${text.slice(9)}`;
    }
    if (text.length > 14) {
      text = `${text.slice(0, 14)} ${text.slice(14)}`;
    }
    return text;
  };

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
              <p className="market__link" onClick={() => setPayment(25)}>
                Order Now
              </p>
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
              <p className="market__link" onClick={() => setPayment(50)}>
                Order Now
              </p>
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
              <p className="market__link" onClick={() => setPayment(100)}>
                Order Now
              </p>
            </div>
          </div>
        </div>
      </div>
      {typeof payment === 'number' ? (
        <div className="payment">
          <div className="binking">
            <form className="binking__form">
              <h2 className="binking__title">
                Введите данные карты для оплаты
              </h2>
              <h2 className="binking__title">Сумма составит: {payment}$</h2>
              <div className="binking__panels">
                <div
                  className="binking__panel binking__front-panel"
                  style={getColor()}
                >
                  <img src={getBank()} className={hiddenBank()} alt="" />
                  <img src={getBrand()} className={hiddenBrand()} alt="" />
                  <div className="binking__front-fields">
                    <input
                      name="cardnumber"
                      autoComplete="cc-number"
                      inputMode="numeric"
                      pattern="[0-9 ]*"
                      className="binking__field binking__number-field"
                      type="text"
                      value={getVal(val)}
                      onChange={(e) =>
                        setVal(e.target.value.replace(/ */g, ''))
                      }
                      maxLength="19"
                      placeholder="0000 0000 0000 0000"
                    />
                    <label className="binking__label binking__date-label">
                      Valid thru
                    </label>
                    <input
                      name="ccmonth"
                      autoComplete="cc-exp-month"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="binking__field binking__month-field binking__date-field"
                      type="text"
                      maxLength="2"
                      placeholder="MM"
                    />
                    <input
                      name="ccyear"
                      autoComplete="cc-exp-year"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="binking__field binking__year-field binking__date-field"
                      type="text"
                      maxLength="2"
                      placeholder="YY"
                    />
                  </div>
                </div>
                <div
                  className="binking__panel binking__back-panel"
                  style={getColor()}
                >
                  <input
                    name="cvc"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    className="binking__field binking__code-field"
                    maxLength="3"
                    type="password"
                  />
                  <label className="binking__label binking__code-label">
                    Safety code
                  </label>
                </div>
              </div>
              <label className="binking__save-card">
                <input
                  className="binking__save-card-checkbox"
                  name="save"
                  type="checkbox"
                />
                <span>Сохранить карту для последующих платежей</span>
              </label>
              <div className="binking__form-bottom">
                <p className="binking__error binking__hide"></p>
                <button
                  className="binking__submit-button binking__button"
                  type="button"
                >
                  Оплатить
                </button>
              </div>
            </form>
            <div className="binking__success binking__hide">
              <h2 className="binking__title">Оплата произведена успешно</h2>
              <button
                className="binking__reset-button binking__button"
                type="submit"
              >
                Вернуться к форме оплаты
              </button>
            </div>
          </div>
          <i className="bi bi-x-octagon" onClick={() => setPayment('')}></i>
        </div>
      ) : null}
    </div>
  );
};

export default Market;
