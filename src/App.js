
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import View from './components/View';
import FormSuscribe from './components/FormSuscribe';

function App() {
  return (
    <Router>
      <Header key={6} />
      <Switch>
        <Route  path="/formSuscribe">
          <FormSuscribe key={1} />
        </Route>
        <Route  path="/search">
          <SearchPage key={2} />
        </Route>
        <Route path="/view">
          <View key={3} />
        </Route>
        <Route path="/">
          <Home key={4} />
        </Route>
      </Switch>
      <Footer key={5} />
    </Router>

  );
}

export default App;
