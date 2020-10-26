// ![image](https://storage.googleapis.com/quest_editor_uploads/gn4CVOq7AYC6WYcSn3w0Bp1GkOsuCvBy.png)
import React, { memo } from "react";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';


const Step = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 5. Do CORS exists front back-end env?

Cut a long story short: **NO**
Why that? Well for now
`}
                />
            </div>
        </div>
    )

}


export default memo(Step)