import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <Home/>          
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
