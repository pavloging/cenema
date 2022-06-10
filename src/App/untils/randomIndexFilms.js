//Random bg
const path = '/images/bg';
const randomFilms = [
  {
    youtube: 'https://www.youtube.com/embed/foyufD52aog',
    url: 'https://www.omdbapi.com/?i=tt6139732&apikey=ec63a73c',
    img: `${path}/aladdin.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/MdENmefJRpw',
    url: 'https://www.omdbapi.com/?i=tt0088763&apikey=ec63a73c',
    img: `${path}/back-to-the-future.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/Ify9S7hj480',
    url: 'https://www.omdbapi.com/?i=tt8367814&apikey=ec63a73c',
    img: `${path}/gentlemen.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    url: 'https://www.omdbapi.com/?i=tt0816692&apikey=ec63a73c',
    img: `${path}/interstellar.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/Ga6RYejo6Hk',
    url: 'https://www.omdbapi.com/?i=tt2380307&apikey=ec63a73c',
    img: `${path}/coco.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/LiK2fhOY0nE',
    url: 'https://www.omdbapi.com/?i=tt1677720&apikey=ec63a73c',
    img: `${path}/ready-player-one.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/g4Hbz2jLxvQ',
    url: 'https://www.omdbapi.com/?i=tt4633694&apikey=ec63a73c',
    img: `${path}/spider-man-into-the-spider-verse.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    url: 'https://www.omdbapi.com/?i=tt0468569&apikey=ec63a73c',
    img: `${path}/the-dark-knight.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/doSJxiYp9yo',
    url: 'https://www.omdbapi.com/?i=tt0129167&apikey=ec63a73c',
    img: `${path}/the-iron-giant.webp`
  },
  {
    youtube: 'https://www.youtube.com/embed/CZ1CATNbXg0',
    url: 'https://www.omdbapi.com/?i=tt0910970&apikey=ec63a73c',
    img: `${path}/walle.webp`
  }
];
const index = randomFilms[Math.floor(Math.random() * randomFilms.length)];

export default index;
