import { useState } from 'react';

const Profile = () => {
  const [date, setDate] = useState(localStorage.getItem('date'));
  const handleData = ({ target }) => {
    localStorage.setItem(target.id, target.value);
    if (target.id === 'date') {
      setDate(target.value);
    }
  };
  return (
    <div className="profile vh-100 d-flex justify-content-center align-items-center flex-column text-muted">
      <h2>Profile</h2>
      {localStorage?.getItem('email') !== null ? (
        <div className="profile__info">
          <div className="profile__container">
            <h3>Name: </h3>
            <input
              className="profile__input"
              id="name"
              type="text"
              placeholder={localStorage.getItem('name')}
              onChange={(e) => handleData(e)}
            />
          </div>

          <div className="profile__container">
            <h3>Surname: </h3>
            <input
              className="profile__input"
              id="surname"
              type="text"
              placeholder={localStorage.getItem('surname')}
              onChange={(e) => handleData(e)}
            />
          </div>

          <div className="profile__container">
            <h3>Email: </h3>
            <input
              className="profile__input"
              id="email"
              type="text"
              placeholder={localStorage.getItem('email')}
              onChange={(e) => handleData(e)}
            />
          </div>

          <div className="profile__container">
            <h3>Gender: </h3>
            <input
              className="profile__input"
              id="gender"
              type="text"
              placeholder={localStorage.getItem('gender')}
              onChange={(e) => handleData(e)}
            />
          </div>

          <div className="profile__container">
            <h3>Date: </h3>
            <input
              className="profile__input"
              id="date"
              type="date"
              value={date}
              onChange={(e) => handleData(e)}
            />
          </div>
        </div>
      ) : (
        <h2>Unavailable, please login</h2>
      )}
    </div>
  );
};

export default Profile;
