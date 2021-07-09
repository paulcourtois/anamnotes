// On importe les dépendances de React, react redux pour notre store global et react router pour les routes
import React from 'react';
import { render } from 'react-dom';
import { Provider as StoreProvider} from 'react-redux';
// import {BrowserRouter as Router} from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store'

// on crée le socket de communication
store.dispatch({type: 'INIT_SOCKET'});

const rootReactElement = <StoreProvider store= {store}>
    <App />
</StoreProvider>;

const target = document.getElementById('root');

render(rootReactElement, target);
