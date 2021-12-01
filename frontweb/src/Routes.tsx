import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movie />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
