import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//router
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import loginReducer from './redux/reducer/login'
//store

//reducer

const store = createStore(loginReducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Provider store={store}>
            <App />
 </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



