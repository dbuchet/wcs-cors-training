import React, { memo, useMemo } from 'react';
import { makeStyles, Checkbox } from '@material-ui/core';
import Markdown from 'react-markdown';
import nl2br from 'react-nl2br';

import { getMarkdownTitleAndContent } from '../utils/markdown';

import Alert from './Alert';
import SyntaxHighlighter from './SyntaxHighlighter';


const MARGIN = 16;
const useStyle = makeStyles(theme => ({
    root: {
        fontSize: 16,
        lineHeight: '26px',
        '& ul, ol': {
            margin: 0,
            padding: 0,
            '& a': {
                textDecoration: 'none',
                color: theme.main,
                fontWeight: 'bold',
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
            '& li': {
                marginLeft: 30
            }
        },
        '& h1': {
            fontSize: 26,
            marginTop: 56,
        },
        '& h2': {
            fontSize: 24
        },
        '& h3': {
            color: theme.main,
            fontSize: 22
        },
        '& h4': {
            fontSize: 20
        },
        '& h5': {
            fontSize: 18
        },
        '& h6': {
            fontSize: 16

        },
        '& p': {
            '& code': {
                color: "#E5688F",
                padding: 1,
                backgroundColor: theme.backgroundColor,
                border: "1px solid #D4D4D4",
                borderRadius: 3,
                fontFamily: theme.fonts.code,
                fontSize: 12,
            },
            '& a': {
                textDecoration: 'none',
                color: theme.main,
                fontWeight: 'bold',
                '&:hover': {
                    textDecoration: 'underline',
                }
            }
        },
        '& pre': {
            backgroundColor: theme.backgroundColor,
            border: "1px solid #D4D4D4",
            padding: 10,
            borderRadius: 3,
            whiteSpace: "break-spaces",
            '& code': {
                fontFamily: theme.fonts.code,
            }
        },
        "& blockquote": {
            borderLeft: '5px solid #D4D4D4',
            margin: 0,
            padding: 0,
            paddingLeft: 20,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: MARGIN,
            marginBottom: MARGIN,
            "& p": {
                margin: 0,
                marginTop: MARGIN/2,
                marginBottom: MARGIN/2,
                padding: 0,
            }
        },
        '& table': {
            marginTop: MARGIN,
            marginBottom: MARGIN,
            borderSpacing: 0,
            width: '100%',
            tableLayout: 'fixed',
            '& td, th': {
                padding: 8,
                paddingLeft: 12,
                paddingRight: 12,
                textAlign: 'left',
                border: '1px solid #D4D4D4',
                borderTop: 0,
                borderRight: 0,
                maxWidth: '50%',
                '&:last-child': {
                    borderRight: '1px solid #D4D4D4',
                }
            },
            '& th': {
                borderTop: '1px solid #D4D4D4',
                borderBottom: '3px solid #D4D4D4',
                backgroundColor: theme.backgroundColor,
            },
            '& tr:nth-child(even) td': {
                backgroundColor: theme.backgroundColor,
            },
            [theme.bp.mobile]: {
                maxWidth: '100%',
                width: 'fit-content',
                overflowX: 'auto',
                display: 'block',
            }
        },
        '& hr': {
            border: 0,
            height: 1,
            width: '100%',
            backgroundColor: theme.borderColor,
            position: 'relative',
            marginTop: (MARGIN + 10),
            marginBottom: (MARGIN + 10),
        },
        [theme.bp.mobile]: {
            maxWidth: 'calc(100vw - 32px)',
        }
    },
    iframe: {
        marginTop: MARGIN,
        marginBottom: MARGIN,
        width: '100%',
        border: 0,
    },
    img: {
        textAlign: 'center',
        '& img': {
            maxWidth: '100%',
        }
    },
    alert: {
        marginTop: MARGIN,
        marginBottom: MARGIN,
    },
    liNoStyle: {
        listStyle: 'none',
        marginLeft: '0px !important',
    },
    checkbox: {
        padding: 3,
        paddingRight: 8,
        '&.Mui-checked': {
            color: `${theme.main} !important`,
        }
    }
}));

const QuestContent = ({source, iFrameHeight}) => {

    const classes = useStyle();

    const renderers = useMemo(() => ({
        code: ({language, value}) => {

            // DEFAULT
            if (!language || language === "" || language === "shell") return <pre><code>{value}</code></pre>;

            // ALERTS
            if (language.startsWith('alert-')) {
                const [, severity] = language.split('-');
                if (!["error", "warning", "info", "success"].includes(severity)) return null;

                return (
                    <Alert
                        className={classes.alert}
                        severity={severity}
                        {...getMarkdownTitleAndContent(value)}
                        md
                    />
                );
            }

            return <SyntaxHighlighter language={language} value={value} />
        },
        image: ({src, alt}) => (<div className={classes.img}>
            <img src={src} alt={alt || ""} />
        </div>),
        paragraph: ({children}) => {
            if (children && children[0] && children.length === 1 && children[0].props && children[0].props.src) return children;
            return <p>{children}</p>;
        },
        text: ({value}) => {
            return nl2br(value);
        },
        listItem: ({children, checked}) => {
            if (checked === true || checked === false) return <li className={classes.liNoStyle}><Checkbox defaultChecked={checked} color="secondary" disabled className={classes.checkbox} />{children}</li>
            return <li>{children}</li>
        }
    }), [classes]);

    return (
        <Markdown
            className={classes.root}
            source={source}
            linkTarget="_blank"
            renderers={renderers}
        />
    );
};

export default memo(QuestContent);