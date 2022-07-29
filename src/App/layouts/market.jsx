import { useState } from 'react';
const Market = () => {
  const [payment, setPayment] = useState();
  const [val, setVal] = useState('');
  const [date, setDate] = useState({ ccmonth: '', ccyear: '' });
  const [cvv, setCvv] = useState('');
  const [toast, setToast] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const cber_default = val.slice(0, 4) === '4276';
  const cber_rare = val.slice(0, 4) === '4279';

  //Bank
  const getBank = () => {
    let logo;
    if (val[0] === '3') {
      logo = '/images/payment/bank/ru-rosbank-big-original.svg';
    }
    if (cber_default || cber_rare) {
      logo = '/images/payment/bank/ru-sberbank-big-inverted.svg';
    }
    return logo;
  };

  const getColor = () => {
    if (cber_default || cber_rare) {
      return { background: ' #1a9f29' };
    }
  };

  const hiddenBank = () => {
    let brand;
    if (cber_default || cber_rare) {
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

  //Data
  const handleChange = ({ target }) => {
    setDate((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  //Ready
  const readyCard = () => {
    setVal('4276701025132434');
    setDate({ ccmonth: '12', ccyear: '30' });
    setCvv('412');
  };

  //Timer
  const getTime = () => {
    setTimeout(setSeconds, 1000, seconds + 1);
    return seconds;
  };

  //Validate register account
  const handleSetPayment = (count) => {
    if (
      localStorage?.getItem('email') !== null &&
      localStorage?.getItem('password') !== null
    ) {
      setPayment(count);
    } else {
      alert('You are not authorized');
    }
  };

  //set tariff
  const handleToast = () => {
    let tariff = 'Basic';
    if (payment === 50) {
      tariff = 'Standart';
    }
    if (payment === 100) {
      tariff = 'Premium';
    }
    localStorage.setItem('tariff', tariff);
    setToast(!toast);
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
              <p className="market__link" onClick={() => handleSetPayment(25)}>
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
              <p className="market__link" onClick={() => handleSetPayment(50)}>
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
              <p className="market__link" onClick={() => handleSetPayment(100)}>
                Order Now
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Payment  */}
      {typeof payment === 'number' && (
        <div className="payment">
          <div className="binking">
            <form className="binking__form">
              <h2 className="binking__title">Enter card details for payment</h2>
              <h2 className="binking__title">Amount of money</h2>
              <h1 className="binking__price">
                <sup className="market__price-dollar">$</sup>
                {payment}
              </h1>

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
                      maxLength="19"
                      placeholder="0000 0000 0000 0000"
                      value={getVal(val)}
                      onChange={(e) =>
                        setVal(e.target.value.replace(/ */g, ''))
                      }
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
                      value={date.ccmonth}
                      onChange={handleChange}
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
                      value={date.ccyear}
                      onChange={handleChange}
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
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  <label className="binking__label binking__code-label">
                    Safety code
                  </label>
                </div>
              </div>
              <label className="binking__save-card">
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: '#1a9f29' }}
                  onClick={() => readyCard()}
                  type="button"
                >
                  Use the card details of the previous buyer
                </button>
              </label>
              <div className="binking__form-bottom">
                <p className="binking__error binking__hide"></p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleToast}
                  disabled={
                    val.length === 16 &&
                    cvv.length === 3 &&
                    date.ccmonth.length === 2 &&
                    date.ccyear.length === 2
                      ? false
                      : true
                  }
                >
                  Pay
                </button>
              </div>
            </form>
            {toast && (
              <div className="payment__toast">
                <div className="payment__menu">
                  <div className="payment__menu-top">
                    <h5 className="payment__menu-title">Внимание</h5>
                  </div>
                  <div className="payment__time">
                    <small>{getTime() + 's ago'}</small>
                  </div>
                  <div
                    className="payment__menu-close"
                    onClick={() => setToast(!toast)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </div>
                </div>
                <div className="payment__message">
                  <p className="payment__paragraf">Оплата прошла успешно!</p>
                </div>
              </div>
            )}
            <i className="bi bi-x-octagon" onClick={() => setPayment('')}></i>
          </div>
        </div>
      )}
    </div>
  );
};
export default Market;
