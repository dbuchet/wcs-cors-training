import React, { memo, useCallback, useState } from "react";
import { Button } from "@material-ui/core";
import cn from 'clsx';
import { useGlobalStyle } from "../utils/styles";

const Request = ({onClick, label, result, error, success}) => {

    const classes = useGlobalStyle();
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);


    const _onClick = useCallback(() => {
        setLoading(true);
        onClick();
        setTimeout(() => {
            setShowResult(true);
            setLoading(false);
        }, 350);

    }, [onClick]);

    return (
        <div className={cn(classes.result, showResult && error && 'error', showResult && success && 'success', !showResult && 'center')}>
            {showResult && result}
            {!showResult && (
                <Button
                    onClick={_onClick}
                    disabled={loading}
                    variant='outlined'
                >
                    {label || "Fetch API"}
                </Button>
            )}
        </div>
    );

}

export default memo(Request)