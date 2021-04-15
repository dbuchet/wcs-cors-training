import React, { memo, useCallback } from "react";

import { useGlobalStyle } from "../utils/styles";
import fetch from "../utils/fetch";

import Content from '../components/Content';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Request from "../components/Request";


const Step = () => {

    const classes = useGlobalStyle();

    const _trigger1 = useCallback(() => {
        fetch("http://localhost:4000/step-4-1", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            },
        }, true)
    }, []);

    const _trigger2 = useCallback(() => {
        fetch("http://localhost:4000/step-4-2", {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }, []);

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 4. Request headers & Access-Control-*

Let's look at our request headers:

\`\`\`
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
Access-Control-Request-Headers: content-type
Access-Control-Request-Method: GET
Connection: keep-alive
Host: localhost:4000
Origin: http://localhost:3000
Referer: http://localhost:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-site
\`\`\`

Many informations are sent, and they may vary depending on your browser, os, frameworks,... but there are important Headers, the \`Access-Control-Request-*\`. So here, \`Access-Control-Request-Headers\` & \`Access-Control-Request-Method\`

Every \`Access-Control-Request-*\` from Front-End **must** match the corresponding \`Access-Control-Allow-*\` from \`preflight\` response headers. 

So if a \`Request\` does not have its matching \`Allow\` in \`preflight\` response, preflight will fail! And so will your call.

Theses pairs are called the \`Access-Control-*\`

And as we've seen in previous response headers, we have no sign of \`Access-Control-Allow-Headers\` & \`Access-Control-Allow-Method\`, so \`preflight\` fails.

Once again, how to fix this? On your back-end by explicitly authorizing these request headers
`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-4-1", {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
})`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.options('/step-4-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});

app.get('/step-4-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({result: "[GET] Hello World! Step 4-1"})
});`} />
                </div>
            </div>
            <Request
                onClick={_trigger1}
                result={`{ result: "[GET] Hello World! - Step 4-1" }`}
                success
            />
            <div className={classes.content}>
                <Content md={`It works! Let's look what the \`OPTIONS\` response headers look like now:
\`\`\`
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Method: GET,OPTIONS
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 0
\`\`\`

And there, you can indeed see that all our \`Access-Control-Request-*\` from request headers, now match a \`Access-Control-Allow-*\` from response headers.

\`\`\`alert-info
# Remember
There are many \`Access-Control-*\` which can be sent by request headers. They **must** all be allowed by \`OPTIONS\` reponse headers to pass \`preflight\` checks. And obvisouly be also allowed by method response headers
\`\`\`

So now, what if I send a \`PUT\` request with same \`Access-Control-Allow-*\` defined in \`OPTIONS\`?

`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-4-2", {
    method: "put",
    headers: {
        'Content-Type': 'application/json'
    }
})`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.options('/step-4-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});

app.put('/step-4-2', (req, res) => {
    res.status(200).json({result: "[PUT] Hello World! Step 4-2"})
});`} />
                </div>
            </div>
            <Request
                onClick={_trigger2}
                result={`Access to fetch at 'http://localhost:4000/step-4-2' from origin 'http://localhost:3000' has been blocked by CORS policy: Method PUT is not allowed by Access-Control-Allow-Methods in preflight response.`}
                error
            />
            <div className={classes.content}>
                <Content md={`
Obviously, this doesn't work as my \`PUT\` is not defined in \`Access-Control-Allow-Method\`. So if you want to make your route available, you'll have to specify it \`res.set('Access-Control-Allow-Method', 'GET,PUT,OPTIONS');\`

That's how you can control, endpoint by endpoint, what are the authorized origins, headers and methods.
`}
                />
            </div>
        </div>
    )

}


export default memo(Step)