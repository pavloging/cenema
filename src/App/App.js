import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Panel from './components/panel.jsx';
import Home from './layouts/home.jsx';
import Film from './layouts/film.jsx';
import Marcet from './layouts/marcet.jsx';
import Like from './layouts/like.jsx';
import LogOut from './layouts/logOut.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Panel />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/film" exact component={Film} />
        <Route path="/marcet" exact component={Marcet} />
        <Route path="/like" exact component={Like} />
        <Route path="/log-out" exact component={LogOut} />
      </Switch>
    </div>
  );
}

export default App;
