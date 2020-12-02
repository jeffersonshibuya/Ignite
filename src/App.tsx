import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import GamesList from './pages/GamesList';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <GamesList />
      </Route>
      <GlobalStyle />
    </div>
  );
}

export default App;
