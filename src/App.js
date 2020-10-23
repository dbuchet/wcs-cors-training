import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { useGlobalStyle } from './utils/styles';


/* STEPS */
import Intro from './steps/Intro';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

const App = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.body}>
            <CssBaseline />
            <Intro />
            <Step1 />
            <Step2 />
        </div>
    );
}

export default App;
