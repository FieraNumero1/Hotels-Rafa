
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Header key={1} />
      <Switch>
        <Route  path="/search">
          <SearchPage key={2} />
        </Route>
        <Route path="/">
          <Home key={3} />
        </Route>

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
