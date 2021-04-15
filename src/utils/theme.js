import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const themeObjectDefault = {
	palette: {
		background: {
            default: '#1a1f36',
        },
        text: {
			primary: '#c1c9d2'
		},
		primary: {
			main: '#c1c9d2',
		},
	},
	typography: {
		h1: {
			color: '#fff',
		},
		h2: {
			color: '#fff',
			fontWeight: 200,
		},
		h4: {
			color: '#fff',
			fontWeight: 200,
		},
		h5: {
			color: '#fff',
			fontWeight: 300,
		},
		h6: {
			color: '#f',
			fontWeight: 300,
		},
		body1: {
			fontSize: 14,
		}
	},
	fonts: {
		code: 'Monaco,Menlo,Consolas,Courier New,monospace!important',
		roboto: '"Roboto", "Helvetica", "Arial", sans-serif;',
	},
	bp: {
		mobile: defaultTheme.breakpoints.down('sm'),
		desktop: defaultTheme.breakpoints.up('sm'),
		mediumScreen: defaultTheme.breakpoints.down('lg'),
		smallScreen: '@media screen and (max-width: 1681px)',
		verySmallScreen: '@media screen and (max-width: 1367px)',
	},
	alerts: {
		success: {
			main: '#4caf50',
			light: 'rgb(237, 247, 237)',
			text: 'rgb(30, 70, 32)',
			main50: '#95d097'
		},
		error: {
			main: '#f44336',
			light: 'rgb(253, 236, 234)',
			text: 'rgb(97, 26, 21)',
		},
		info: {
			main: '#2196f3',
			light: 'rgb(232, 244, 253)',
			text: 'rgb(13, 60, 97)'
		},
		warning: {
			main: '#ff9800',
			light: 'rgb(255, 244, 229)',
			text: 'rgb(102, 60, 0)',
		}
	},
};

const theme = createMuiTheme(themeObjectDefault);
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;