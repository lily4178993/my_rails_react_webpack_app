import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    const appRoot = ReactDOM.createRoot(root);
    appRoot.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});
