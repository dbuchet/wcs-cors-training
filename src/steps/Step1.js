import React, { memo, useCallback } from "react";

import { useGlobalStyle } from "../utils/styles";
import fetch from "../utils/fetch";

import Content from '../components/Content';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Request from "../components/Request";


const Step = () => {

    const classes = useGlobalStyle();

    const _trigger1 = useCallback(() => {
        fetch("http://localhost:4000/step-1-1");
    }, []);

    const _trigger2 = useCallback(() => {
        fetch("http://localhost:4000/step-1-2");
    }, []);

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 1. Access-Control-Allow-Origin

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
            <Request
                onClick={_trigger1}
                result={`Access to fetch at 'http://localhost:4000/step-1-1' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`}
                error
            />
            <div className={classes.content}>
                <Content md={`CORS uses HTTP Headers, so let's look at response headers

\`\`\`
Connection: keep-alive
Content-Length: 29
Content-Type: text/html; charset=utf-8
\`\`\`

As you can see, no sign of the requested \`Access-Control-Allow-Origin\`, as explained in the JS error.

Fortunately, we can configure our **back-end** to define this header, and so **allow** external origin.`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-1-2")`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.get('/step-1-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("[GET] Hello World! - Step 1-2")
});`} />
                </div>
            </div>
            <Request
                onClick={_trigger2}
                result={`[GET] Hello World! - Step 1-2`}
                success
            />
            <div className={classes.content}>
                <Content md={`\`\`\`alert-warning
# Important!
CORS configuration is defined on **back-end**. Front-end has absolutely no control of CORS configuration!
\`\`\`

Let's now look at response headers:
\`\`\`
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 29
Content-Type: text/html; charset=utf-8
\`\`\`

Yes! \`Access-Control-Allow-Origin\` is well defined (and as a wildcard), so my request worked!

### What is an "opaque response"?
> Oh wait! What is this line in first error we got? \`set the request's mode to 'no-cors' to fetch the resource with CORS disabled\`. If we can disable CORS what do we have to care?

Well you obviously **cannot** disable CORS. You can request a \`no-cors\` response, but you'll get an \`opaque\` reponse. Which means you'll only be able, in JS, to access the response \`headers\`, but not reponse \`body\`. So if you only need to have access to headers, you can indeed send a \`no-cors\` request. Well, that never happens.
`} />
            </div>
        </div>
    )

}


export default memo(Step)