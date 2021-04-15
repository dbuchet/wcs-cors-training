import React, { memo, useCallback } from "react";

import { useGlobalStyle } from "../utils/styles";
import fetch from "../utils/fetch";

import Content from '../components/Content';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Request from "../components/Request";

const Step = () => {

    const classes = useGlobalStyle();

    const _trigger1 = useCallback(() => {
        fetch("http://localhost:4000/step-2-1", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }, []);

    const _trigger2 = useCallback(() => {
        fetch("http://localhost:4000/step-2-1", {
            method: "put",
        })
    }, []);

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 2. "Complex" requests

"Simple" request are \`GET\` and \`POST\` requests with no additional headers added to request. If we trigger a "Simple" request, everything goes well.
But what if we need to add an header to a request, or we want to perform a \`PUT\` or \`DELETE\`?

Let's try to:
- Make a \`GET\` request with a \`Content-Type\` header
- Make a \`PUT\` request

`} />
            </div>
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-2-1", {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
})`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.get('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({result: "[GET] Hello World! Step 2-1"})
});`} />
                </div>
            </div>
            <Request
                onClick={_trigger1}
                result={`Access to fetch at 'http://localhost:4000/step-2-1' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`}
                error
            />
            <div className={classes.codes}>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Front-End
fetch("http://localhost:4000/step-2-1", {
    method: "put",
})`} />
                </div>
                <div className={classes.code}>
                    <SyntaxHighlighter value={`// Back-End
app.put('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({result: "[PUT] Hello World! Step 2-1"})
});`} />
                </div>
            </div>
            <Request
                onClick={_trigger2}
                result={`Access to fetch at 'http://localhost:4000/step-2-1' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`}
                error
            />
            <div className={classes.content}>
                <Content md={`So, why that?! I have my \`Access-Control-Allow-Origin\` well defined!
                
Let's look closer to the error message. They look identical to previous one at first sight, but they are not! And an important information is in these ones \`Response to preflight request doesn't pass access control check\`

Preflight? Control check? What is that?`} />
            </div>
        </div>
    )

}


export default memo(Step)