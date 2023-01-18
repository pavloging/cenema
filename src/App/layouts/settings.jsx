import { useState } from 'react';

const Settings = () => {
  const [background, setBackground] = useState(false);
  const handleClearFavorite = () => {
    const clearFavorite = Object.keys(localStorage).filter(
      (el) => el.slice(0, 3) === 'obj'
    );
    console.log(clearFavorite);
    clearFavorite.map((el) => {
      return localStorage.removeItem(el);
    });
  };
  const handleChangeBackground = () => {
    setBackground(!background);
    if (background) {
      document.body.style.background = 'linear-gradient(to right top, blue, #91fff6, blue)';
    }
    if (!background) {
      document.body.style.background = 'linear-gradient(to right top, #0000ab, #000f70, #0000bd)';
    }
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column text-muted">
      <h2>Settings</h2>
      <div className="settings__info">
        <div className="settings__container">
          <h3>
            Your tariff:{' '}
            {localStorage?.getItem('tariff') !== null
              ? localStorage.getItem('tariff')
              : 'custom'}
          </h3>
        </div>
        <div className="settings__container">
          <h3>
            Clear favorite films:{' '}
            <button
              className="settings__btn btn"
              onClick={() => handleClearFavorite()}
            >
              Click!
            </button>
          </h3>
        </div>

        <div className="settings__container">
          <h3>
            Сhange background theme:{' '}
            <button
              className="settings__btn btn"
              onClick={() => handleChangeBackground()}
            >
              Click!
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;

//очистить полностью корзину +
//редактировать имя +
//менять тему +
//добавить 25 фильмов
//сделать нормальную страницу с фильмом
