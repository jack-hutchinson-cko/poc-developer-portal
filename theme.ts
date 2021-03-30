import { lighten } from 'polished';
import { size } from './components/css/tokens';

export const theme = {
	breakpoints: {
		xs: 0,
		small: size.mobileXL,
		medium: size.laptop,
		large: size.laptopL,
	},
	colors: {
		primary: {
			main: '#0C1142',
		},
		http: {
			get: '#009E7E',
			post: '#3AB9F4',
			put: '#b77ba1',
			options: '#b77ba1',
			patch: '#F3C25D',
			delete: '#EE6D5F',
			basic: '#E6E7EC',
			link: '#0C1142',
			head: 'white',
		},
	},
	navbar: {
		main: '#8688A0',
	},
	sidebar: {
		backgroundColor: 'white',
		activeBgColor: 'white',
		width: '360px',
		textColor: '#0C1142',
		textColorSecondary: '#3D4168',
		activeTextColor: '#0C1142',
		separatorLineColor: '#E6E7EC',
		separatorLabelColor: '#E6E7EC',
		caretColor: '#8688A0',
		fontFamily: '"Graphik LCG Web", sans-serif',
		fontSize: '16px',
		offsetLeft: 8,
		spacing: {
			unit: 10,
			paddingHorizontal: 16,
			paddingVertical: 8,
		},
	},
	typography: {
		fontSize: '16px',
		lineHeight: '1.5em',
		fontWeightRegular: '400',
		fontWeightBold: '600',
		fontWeightLight: '300',
		fontFamily: '"Graphik LCG Web", sans-serif',
		headings: {
			fontFamily: '"Graphik LCG Web", sans-serif',
			fontWeight: '600',
		},
		heading1: {
			fontSize: '38px',
			fontWeight: '500',
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			capitalize: false,
		},
		heading2: {
			fontSize: '32px',
			fontWeight: '500',
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			capitalize: false,
		},
		heading3: {
			fontSize: '24px',
			fontWeight: '500',
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			capitalize: false,
			margin: 0,
		},
		code: {
			fontSize: '14px',
			fontFamily: 'Courier, monospace',
			fontWeight: ({ typography }) => typography.fontWeightRegular,
			color: '#0C1142',
			backgroundColor: '#E6E7EC',
			wrap: false,
		},
		pre: {
			border: '1px solid #E6E7EC',
			borderRadius: '8px',
		},
		links: {
			color: ({ colors }) => colors.primary.main,
			visited: ({ typography }) => typography.links.color,
			hover: ({ typography }) => lighten(0.2, typography.links.color),
		},
	},
	rightPanel: {
		backgroundColor: '#E6E7EC',
		width: '40%',
		textColor: '#0C1142',
	},
	schema: {
		nestedBackground: 'white',
	},
	codeBlock: {
		backgroundColor: ({ rightPanel }) => rightPanel.backgroundColor,
		tokens: {},
		textColor: '#0C1142',
	},
};
