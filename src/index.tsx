import { GlobalStyle } from './GlobalStyle';
import  App  from './App';
import react from 'react';
import ReactDOM from 'react-dom';
import { Card, CardContent } from '@sberdevices/plasma-ui';


ReactDOM.render(
    <>
        <App />
        <GlobalStyle />
    </>,
    document.getElementById('root'),
);
