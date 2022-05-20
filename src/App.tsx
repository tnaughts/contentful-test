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
const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
  space: '8gp2519ce6g7', // defaults to 'master' if not set
  accessToken: 'kvm2VUGHVBBgpcJVWrcwihRoHfLLXEKtHs4XbmhOlZs'
})

const App = () => (
  <div props={contentfulClient}>
    <HashRouter>
        <div className="content">
          <Route exact path="/" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </div>
    </HashRouter>
  </div>
);

export default App;
