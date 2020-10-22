import React, { memo } from 'react';
import { Prism as PrismSyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';

const SyntaxHighlighter = ({language, value}) => {

    if (!value || value === "") return null;

    return (
        <PrismSyntaxHighlighter language={language} style={theme} showLineNumbers>
            {value}
        </PrismSyntaxHighlighter>
    )

};

export default memo(SyntaxHighlighter);