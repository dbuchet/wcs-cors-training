import React, { memo, useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import Markdown from 'react-markdown';
import cn from 'clsx';
import nl2br from 'react-nl2br';

const useStyle = makeStyles({
    root: {
        '& p': {
            margin: 0,
            padding: 0,
            marginBottom: 5,
        },
        '& h1': {
            marginTop: 0,
        },
        '& h2': {
            marginTop: 0,
        },
        '& h3': {
            marginTop: 0,
        }
    }
})

const SimpleMarkdown = ({source, className, ...props}) => {
    const classes = useStyle();

    const renderers = useMemo(() => ({
        text: ({value}) => {
            return nl2br(value);
        },
    }), []);

    return <Markdown
        className={cn(classes.root, className)}
        source={source || ""}
        renderers={renderers}
        {...props}
    />
};

export default memo(SimpleMarkdown);