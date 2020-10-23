import React, { memo } from 'react';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import nl2br from 'react-nl2br';
import cn from 'clsx';

import SimpleMd from './SimpleMd';

const useStyle = makeStyles(theme => ({

    alert: {
        width: 960,
        '& a':{
            textDecoration: "none",
            fontWeight: "bold",
            color: theme.alerts.info.main,
            '&:hover': {
                textDecoration: "underline",
            }
        },
        '&.MuiAlert-standardSuccess': {
            '& a': {
                color: theme.alerts.success.main
            }
        },
        '&.MuiAlert-standardWarning': {
            '& a': {
                color: theme.alerts.warning.main
            }
        },
        '&.MuiAlert-standardError': {
            '& a': {
                color: theme.alerts.error.main
            }
        },
        "& .MuiAlertTitle-root": {
            fontWeight: "bold",
            fontSize: 16,
        },
    }

}));

const Alert = ({severity, content, title, withBr, md, children, className, ...props}) => {

    const classes = useStyle();

    console.log("title=",title, "content=", content)

    return (
    <MuiAlert severity={severity} className={cn(classes.alert, className)} {...props}>
        { title && <AlertTitle>{ title }</AlertTitle> }
        { withBr && nl2br(content) }
        { md && <SimpleMd source={content} linkTarget="_blank" /> }
        {!withBr && !md && content }
        { !content && children }
    </MuiAlert>
    );
};

export default memo(Alert);