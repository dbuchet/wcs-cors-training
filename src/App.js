import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { useGlobalStyle } from './utils/styles';

/* STEPS */
import Intro from './steps/Intro';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Summary from './steps/Summary';

const App = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.body}>
            <CssBaseline />
            <Intro />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Summary />
        </div>
    );
}

export default App;
