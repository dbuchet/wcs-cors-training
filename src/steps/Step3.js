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
                <Content md={`## 3. Preflight

If we look at the **Network Tab** in our Developer console, we can see that, for previous calls, we have in fact 2 requests sent at each \`fetch\`
\`\`\`shell
http://localhost:4000/step-2-1     OPTIONS     200
http://localhost:4000/step-2-1     GET         ERR_FAILED
\`\`\`

So what are these 2 calls, and what is this \`OPTION\` before my \`GET\`?

\`OPTIONS\` is a **Security check** triggered by your browser, to ensure that you are indeed allowed to request this resource. And this is called \`preflight\`.

Let's see what this \`OPTIONS\` call is returning in headers:

\`\`\`
Allow: GET,HEAD,PUT
Connection: keep-alive
Content-Length: 12
Content-Type: text/html; charset=utf-8
\`\`\`

So, from this \`preflight\` security check, there is no sign of \`Access-Control-Allow-Origin\`, so your origin doesn't seems to be authorized to perform this request, the \`preflight\` failed, so you \`fetch\` failed.

#### How to fix this?

Once again, it'll be on **back-end** side. \`OPTIONS\` is a verb for REST API, so we need to define a \`route\` for this \`OPTIONS\`, which will set the \`Access-Control-Allow-Origin\` and so our \`fetch\` won't be blocked


`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-3-1", {
    method: "get",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.options('/step-3-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send();
});

app.get('/step-3-1', (req, res) => {
    res.status(200).json({result: "[GET] Hello World! Step 3-1"})
});`} />
                </div>
            </div>
            <div className={cn(classes.result, 'error')}>
                {`Access to fetch at 'http://localhost:4000/step-3-1' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.`}
            </div>
            <div className={classes.content}>
                <Content md={`Well, we still have an error, but a completely different one this time!`} />
            </div>
        </div>
    )

}


export default memo(Step)