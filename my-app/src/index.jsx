import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireThree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
            state={state}
            store={store}
          /* eslint-disable-next-line react/jsx-no-bind */
            dispatch={store.dispatch.bind(store)}
          />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
};

rerenderEntireThree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
