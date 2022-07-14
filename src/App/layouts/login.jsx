import { useState } from 'react';
import Field from '../components/field.jsx';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [data, setData] = useState({
    email: '',
    password: '',
    date: ''
  });
  const [dataErr, setDataErr] = useState({
    email: 'Email is required',
    password: 'Password is required',
    date: 'Date is required'
  });
  const [agreement, setAgreement] = useState(false);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
    validate(target.name, target.value);
  };

  const handleChangeErr = (name, value) => {
    setDataErr((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const errorsConfig = {
    email: {
      isRequired: 'Email is required',
      isEmail: 'Email entered incorrectly'
    },
    password: {
      isRequired: 'Password is required',
      isCapitalSymbol: 'Password must contain at least one capital letter',
      isContainDigit: 'Password must contain at least one number',
      min: 'Password must be at least 8 characters'
    },
    date: {
      isRequired: 'Email is required'
    }
  };

  const validate = (name, value) => {
    //email
    if (name === 'email') {
      if (value.trim() === '') {
        handleChangeErr(name, (value = errorsConfig.email.isRequired));
        return;
      }
      if (!/^\S+@\S+\.\S+$/g.test(value)) {
        handleChangeErr(name, (value = errorsConfig.email.isEmail));
        return;
      }
      if (true) {
        handleChangeErr(name, (value = ''));
        return;
      }
    }

    //password
    if (name === 'password') {
      if (value.trim() === '') {
        handleChangeErr(name, (value = errorsConfig.password.isRequired));
        return;
      }
      if (!/[A-Z]+/g.test(value)) {
        handleChangeErr(name, (value = errorsConfig.password.isCapitalSymbol));
        return;
      }
      if (!/\d+/g.test(value)) {
        handleChangeErr(name, (value = errorsConfig.password.isContainDigit));
        return;
      }
      if (data.password.length < 8) {
        handleChangeErr(name, (value = errorsConfig.password.min));
        return;
      }
      if (true) {
        handleChangeErr(name, (value = ''));
        return;
      }
    }
    //date
    if (name === 'date') {
      if (value.trim() === '') {
        handleChangeErr(name, (value = errorsConfig.date.isRequired));
        return;
      }
      if (true) {
        handleChangeErr(name, (value = ''));
        return;
      }
    }
    return dataErr;
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__box">
          <h3 className="login__title">{login ? 'Login' : 'Register'}</h3>
          <form>
            <Field
              label="Email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={dataErr.email}
            />
            <Field
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={dataErr.password}
            />
            {login ? (
              <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
                disabled={
                  dataErr.email === '' && dataErr.password === ''
                    ? ''
                    : 'disabled'
                }
              >
                Submit
              </button>
            ) : null}

            {login ? null : (
              <div className="register">
                <div className="data mt-4 mb-3">
                  <p>Your birthday:</p>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleChange}
                  />
                </div>
                <Field
                  label="Your birthday:"
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  error={dataErr.date}
                />

                <div className="login_register-radio mt-4 mb-3">
                  <p className="login_register-paragraf mb-3">
                    Choose your gender:
                  </p>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio1"
                      type="radio"
                      name="radio"
                    />
                    <label htmlFor="register-radio1">Male</label>
                  </div>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio2"
                      type="radio"
                      name="radio"
                    />
                    <label htmlFor="register-radio2">Female</label>
                  </div>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio3"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <label htmlFor="register-radio3">Other</label>
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <label htmlFor="checkbox">
                    <input
                      type="checkbox"
                      className="me-2"
                      id="checkbox"
                      onClick={() => setAgreement(!agreement)}
                    />
                    Confirm international agreement
                  </label>
                  <p>
                    You may not use our service without confirming the license
                    agreement
                  </p>
                </div>
                <button
                  className="btn btn-primary w-100 mx-auto"
                  type="submit"
                  disabled={
                    dataErr.email === '' &&
                    dataErr.password === '' &&
                    dataErr.date === '' &&
                    agreement
                      ? ''
                      : 'disabled'
                  }
                >
                  Submit
                </button>
              </div>
            )}

            <div className="login__sing-up d-flex mt-3">
              <p className="login__dont-account mb-0">Dont have account?</p>
              &ensp;
              <p
                onClick={() => setLogin(!login)}
                className="login__sing-paragraf mb-0"
              >
                {login ? 'Sign Up' : 'Sign In'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
