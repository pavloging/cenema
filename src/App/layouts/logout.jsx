import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    if (localStorage?.getItem('email') !== null) {
      const clearLocalStorage = Object.keys(localStorage).filter(
        (el) => el.slice(0, 3) !== 'obj'
      );
      clearLocalStorage.map((el) => {
        return localStorage.removeItem(el);
      });
    }
  }, []);

  const styleH1 =
    'vh-100 d-flex justify-content-center align-items-center text-muted';
  return (
    <>
      {localStorage?.email ? (
        <h2 className={styleH1}>You have successfully exited!</h2>
      ) : (
        <h2 className={styleH1}>You are not registered :-/</h2>
      )}
    </>
  );
};

export default Logout;
