import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    if (localStorage?.email) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('data');
      localStorage.removeItem('gender');
    }
  }, []);

  const styleH1 =
    'vh-100 d-flex justify-content-center align-items-center text-muted';
  return (
    <>
      {localStorage?.email ? (
        <h1 className={styleH1}>You have successfully exited!</h1>
      ) : (
        <h1 className={styleH1}>You are not registred :-/</h1>
      )}
    </>
  );
};

export default Logout;
