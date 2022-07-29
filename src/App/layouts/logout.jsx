import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    if (localStorage?.email) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('date');
      localStorage.removeItem('gender');

      localStorage.removeItem('name');
      localStorage.removeItem('fullname');
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
