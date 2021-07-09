import { createStore, compose, applyMiddleware} from 'redux';

import websocketMW from './middlewares/websocket';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    websocketMW,
  )
);

const store = createStore(
  reducer,
  enhancers
);

export default store;
