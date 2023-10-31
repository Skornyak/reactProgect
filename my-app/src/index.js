import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs  = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Victor'}
];

let messages  = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Thanks, a u?'},
    {id: 4, message: 'Thanks, a u?'}
];

let posts  = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'It\'s my first post', likesCount: 13},
    {id: 4, message: 'It\'s my first post', likesCount: 22},
    {id: 5, message: 'It\'s my first post', likesCount: 77},
    {id: 6, message: 'It\'s my first post', likesCount: 54},
    {id: 7, message: 'It\'s my first post', likesCount: 32},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
