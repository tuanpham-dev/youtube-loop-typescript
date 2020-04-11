import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App/App'
import './sass/global.scss'
import { State } from './store/types';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash.throttle'

const state: State = loadState()

const initialState: State = {
  videos: [],
  playingVideo: null,
  ...state
}

const store = configureStore(initialState)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
