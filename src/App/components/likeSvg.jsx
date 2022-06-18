import { useState } from 'react';

const LikeSvg = ({ film }) => {
  const [myLike, setMyLike] = useState();

  const onFavoriteLikeAdd = () => {
    localStorage.setItem('obj-' + film.imdbID, JSON.stringify(film));
    JSON.parse(localStorage.getItem('obj-' + film.imdbID));
    setMyLike(true);
  };
  const onFavoriteLikeRemove = () => {
    localStorage.removeItem('obj-' + film.imdbID);
    setMyLike(false);
  };
  return (
    <>
      {myLike === true ||
      JSON.parse(localStorage.getItem('obj-' + film.imdbID)) ? (
        <i
          className="bi bi-heart-fill bi-heart-id"
          onClick={onFavoriteLikeRemove}
        ></i>
      ) : (
        <i className="bi bi-heart" onClick={onFavoriteLikeAdd}></i>
      )}
    </>
  );
};

export default LikeSvg;
