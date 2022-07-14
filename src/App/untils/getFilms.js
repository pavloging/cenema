import { useState, useEffect } from 'react';
import catalogFilms from './catalogFilms.js';
import index from './randomIndexFilms.js';

const SendFilms = (parameter) => {
  const [film, setFilm] = useState(['film']);
  const youtube = [];
  catalogFilms.map((el) => youtube.push(el.youtube));

  const getAnswer = async () => {
    if (parameter === 'random') {
      const res = await fetch(index.url);
      const json = await res.json();
      setFilm(json);
    }
    if (parameter === 'list') {
      const texts = await Promise.all(
        catalogFilms.map(async (el) => {
          const resp = await fetch(el.url);
          return resp.json();
        })
      );
      setFilm(texts);
    }
  };

  useEffect(() => {
    getAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // film[0].youtube = youtube[0];

  let send;
  parameter === 'random'
    ? (send = [film, index.img, index.youtube])
    : (send = [film, youtube]);
  return send;
};

export default SendFilms;
