import { gql }          from 'apollo-boost';
import * as React       from 'react';
import { Query }        from 'react-apollo';
import {
  Route,
  NavLink,
  HashRouter
}                       from "react-router-dom";

import {Pokemon}        from './components/Pokemon'
import {PokemonList}    from './components/PokemonList'

const App = () => (
  <div>
    <HashRouter>
        <div className="content">
          <Route exact path="/" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </div>
    </HashRouter>
  </div>
);

export default App;
