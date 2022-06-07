import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layouts/home.jsx';
import Page from './layouts/page.jsx';
import Nav from './components/nav.jsx';
import Panel from './components/panel.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Panel />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page" exact component={Page} />
      </Switch>
    </div>
  );
}

export default App;
