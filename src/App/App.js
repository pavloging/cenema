import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Panel from './components/panel.jsx';
import Home from './layouts/home.jsx';
import Films from './layouts/films.jsx';
import Market from './layouts/market.jsx';
import Like from './layouts/like.jsx';
import Login from './layouts/login.jsx';
import Movie from './layouts/movie.jsx';
import NoPage from './layouts/noPage.jsx';
import GetFilms from './untils/getFilms.js';

function App() {
  const [getFilms, getYoutube] = GetFilms('list');
  return (
    <div>
      <Nav />
      <Panel />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/films" exact component={Films} />
        <Route path="/market" exact component={Market} />
        <Route path="/like" exact component={Like} />
        <Route path="/login" exact component={Login} />
        {getFilms.map((el, index) => (
          <Route
            key={el.imdbID + 1}
            path={'/films/' + el.imdbID}
            render={() => <Movie film={el} youtube={getYoutube[index]} />}
          />
        ))}

        <Route path="/" component={NoPage} />
      </Switch>
    </div>
  );
}

export default App;
