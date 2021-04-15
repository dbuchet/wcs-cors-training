import React, { memo, useCallback } from "react";

import { useGlobalStyle } from "../utils/styles";
import fetch from "../utils/fetch";

import Content from '../components/Content';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Request from "../components/Request";


const Step = () => {

    const classes = useGlobalStyle();

    const _trigger1 = useCallback(() => {
        fetch("http://localhost:4000/step-3-1", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }, []);

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 3. Preflight

If we look at the **Network Tab** in our Developer console, we can see that, for previous calls, we have in fact 2 requests sent at each \`fetch\`
\`\`\`shell
http://localhost:4000/step-2-1     OPTIONS     200
http://localhost:4000/step-2-1     GET         ERR_FAILED
\`\`\`

\`\`\`alert-info
# Pay attention!
\`GET\` request is a JS error, not an HTTP error code. Which means this error code does not come from a 4xx or 5xx API status code
\`\`\`

So what are these 2 calls, and what is this \`OPTIONS\` before my \`GET\`?

\`OPTIONS\` is a **Security check** triggered by your browser, to ensure that you are indeed allowed to request this resource. And this is called \`preflight\`.

![image](https://storage.googleapis.com/quest_editor_uploads/BwusUPP9rbKcHbQkbSK67LS03WUuBuiJ.png)

How \`OPTIONS\` works? Like other method, so let's see what headers are returned from this call:

\`\`\`
Allow: GET,HEAD,PUT
Connection: keep-alive
Content-Length: 12
Content-Type: text/html; charset=utf-8
\`\`\`

So, from this \`preflight\` security check, there is no sign of \`Access-Control-Allow-Origin\`, so your origin doesn't seems to be authorized to perform this request. The \`preflight\` failed, so you \`fetch\` failed.

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
            <Request
                onClick={_trigger1}
                result={`Access to fetch at 'http://localhost:4000/step-3-1' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.`}
                error
            />
            <div className={classes.content}>
                <Content md={`Oh! Still an error! So let's inspect our response headers
\`\`\`          
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 0
\`\`\`

We do have our \`Access-Control-Allow-Origin\` so problem does not comes from here. Well, we just have to read at JS Error \`Request header field content-type is not allowed by Access-Control-Allow-Headers\` to figure out it's a new error. Let's understand why, and fix this one!`} />
            </div>
        </div>
    )

}


export default memo(Step)