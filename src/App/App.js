import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Panel from './components/panel.jsx';
import Home from './layouts/home.jsx';
import Films from './layouts/films.jsx';
import Marcet from './layouts/marcet.jsx';
import Like from './layouts/like.jsx';
import LogOut from './layouts/logOut.jsx';
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
        <Route path="/marcet" exact component={Marcet} />
        <Route path="/like" exact component={Like} />
        <Route path="/log-out" exact component={LogOut} />
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
