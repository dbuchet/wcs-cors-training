import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import "fontsource-roboto";

import theme from './utils/theme';


import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
