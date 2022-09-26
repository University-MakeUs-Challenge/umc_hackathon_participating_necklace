import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import RootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.css';
import { GlobalStyle } from './components/default/styled';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
// const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>,

  document.getElementById('root'),
);
