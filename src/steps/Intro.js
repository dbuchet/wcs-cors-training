import React, { memo } from "react";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';

const md = `# What is CORS? (Oh baby, don't hurt me)

- **C**ross-**O**rigin **R**esource **S**haring is a mechanism that use **HTTP headers** to tell if an application is allowed to access selected resources from a different origin
- \`XMLHttpRequest\` & \`Fetch API\` uses a \`same-origin\` policy which means, by default, you can only access resource on **same origin**

![image](https://storage.googleapis.com/quest_editor_uploads/pVzeCkApvStoyOKylNjN1VHwt7Y5yGgA.jpg)

## So why?
CORS are an HTTP security to avoid unauthorized domains to request resources on your domain.

## Let's dive into!

For all future exemple, we'll use a back-end server written in Node, and a JS front-end application.

Front-End url is \`localhost:3000\` and Back-End url is \`localhost:4000\`, which are **two different origins due to port**

All \`fetch\` can be sent direcly via the developer console, and you can monitor the \`HTTP Headers\` exchanged with back-end in the **Network Tab**

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