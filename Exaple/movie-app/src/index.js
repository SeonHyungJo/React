import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 아이디가 root인 아이를 app에 연결해주는 것
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
