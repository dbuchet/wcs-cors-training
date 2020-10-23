import React, { memo } from "react";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';

const md = `# What is CORS? (Oh baby, don't hurt me)

- **C**ross-**O**rigin **R**esource **S**haring is a mechanism that use **HTTP headers** to tell if an application is allowed to access selected resources from a different origin
- \`XMLHttpRequest\` & \`Fetch API\` uses a \`same-origin\` policy which means, by default, you can only access resource on **same origin**

![image](https://storage.googleapis.com/quest_editor_uploads/pVzeCkApvStoyOKylNjN1VHwt7Y5yGgA.jpg)

For all future exemple, I have a front-end running with React, which will make calls to a back-end written in Node

Front-End url is \`localhost:3000\`, Back-End url is \`localhost:4000\`, which are **two different origins due to port**

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