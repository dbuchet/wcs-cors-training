// ![image](https://storage.googleapis.com/quest_editor_uploads/gn4CVOq7AYC6WYcSn3w0Bp1GkOsuCvBy.png)
import React, { memo } from "react";

import { useGlobalStyle } from "../utils/styles";

import Content from '../components/Content';


const Step = () => {

    const classes = useGlobalStyle();

    return (
        <div className={classes.step}>
            <div className={classes.content}>
                <Content md={`## 5. Do CORS exists from server-side calls?

Cut a long story short: **NO**

Why that? Because it's easy for a server to create a IP-rate limit policy, so a server making multiple calls to another server can be easily blacklisted. Which is not the case from a front-end.

> Ok so... If I want my call to always work, I just have to develop a small API which will make calls for my front-end, and voila!

Yes, it's possible, and convenient when developping, as many distant APIs do not Allow \`localhost\`. But this **MUST NOT** be shipped to production, for two main reasons:

### Request time!
Front-end call makes a "bounce" to your proxy, extending the response time.

![image](https://storage.googleapis.com/quest_editor_uploads/gn4CVOq7AYC6WYcSn3w0Bp1GkOsuCvBy.png)

### Security!
If all front-end calls go thru your proxy, if you have many concurrent front-end applications calling your proxy, you might be DDoS or blacklisted from distant API.

![image](https://storage.googleapis.com/quest_editor_uploads/73cJnagfIZf9670mfsMIK4atNSEDXdjr.jpg)

If the API server blacklists your Proxy server, all your front-end apps will be down.
`}
                />
            </div>
        </div>
    )

}


export default memo(Step)