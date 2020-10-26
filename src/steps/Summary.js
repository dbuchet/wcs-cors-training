import React, { memo } from "react";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';

const md = `## Summary

- CORS is an HTTP **security** to prevent an unauthorized origin from requesting resources
- CORS rules are defined on **back-end** side
- All \`Access-Control-Request-*\` query headers must match a \`Access-Control-Allow-*\` header from response
- Using a proxy is only for developement mode and **MUST NOT be used on production**

## Go further

- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
- https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
- https://blog.container-solutions.com/a-guide-to-solving-those-mystifying-cors-issues

`

const Step = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={md} />
            </div>
        </div>
    )

}


export default memo(Step)