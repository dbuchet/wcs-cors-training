import { makeStyles } from "@material-ui/core";

export const useGlobalStyle = makeStyles(theme => ({
    body: {
        display: 'flex',
        flexDirection: 'column',
        padding: 32,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        [theme.bp.mobile]: {
            paddingLeft: 16,
            paddingRight: 16,
        }
    },
    step: {
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        display: "flex",
        width: 960,
        [theme.bp.mobile]: {
            width: '100%'
        }
    },
    codes: {
        marginTop: 16,
        width: 1250,
        display: 'flex',
        [theme.bp.mobile]: {
            width: '100%',
            flexDirection: 'column',
        }
    },
    code: {
        width: '50%',
        minWidth: '50%',
        paddingLeft: 16,
        paddingRight: 16,
        [theme.bp.mobile]: {
            width: '100%',
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    result: {
        marginTop: 16,
        marginBottom: 48,
        padding: 8,
        backgroundColor: '#2a2f45',
        border: "1px solid #3c4257",
        borderRadius: 5,
        fontFamily: theme.fonts.code,
        fontSize: 14,
        width: 960,
        '&.error': {
            color: theme.alerts.error.main,
            borderColor: theme.alerts.error.main,
        },
        '&.success': {
            borderColor: theme.alerts.success.main,
        },
        '&.center': {
            textAlign: 'center'
        },
        [theme.bp.mobile]: {
            width: '100%'
        }
    }
}))