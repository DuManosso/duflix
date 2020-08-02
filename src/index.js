import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/HomePage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/cadastro/Video';
import CategoriaVideo from './Pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CategoriaVideo} />
      <Route component={() => (<div>ERRO 404</div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);