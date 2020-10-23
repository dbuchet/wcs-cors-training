import React, { memo } from "react";
import cn from "clsx";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';
import SyntaxHighlighter from '../components/SyntaxHighlighter';


const Step = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 2. Preflight

\`fetch\` is only allowed on \`same-origin\`. So what happen if I make a call from a different origin?

`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-1-1")`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.get('/step-1-1', (req, res) => {
    res.status(200).send("[GET] Hello World! - Step 1-1")
});`} />
                </div>
            </div>
            <div className={cn(classes.result, 'error')}>
                {`Access to fetch at 'http://localhost:4000/step-1' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`}
            </div>
            <div className={classes.content}>
                <Content md={`Fortunately, we can configure our **back-end** to **allow** external origin, using the header parameter \`Access-Control-Allow-Origin\``} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-1-2")`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.get('/step-1-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // Allow all origins!
    res.status(200).send("[GET] Hello World! - Step 1-2")
});`} />
                </div>
            </div>
            <div className={cn(classes.result, 'success')}>
                {`[GET] Hello World! - Step 1-2`}
            </div>
            <div className={classes.content}>
                <Content md={`\`\`\`alert-warning
# Important!
CORS configuration is defined on **back-end**. Front-end has absolutely no control of CORS configuration!
\`\`\`                
`} />
            </div>
        </div>
    )

}


export default memo(Step)