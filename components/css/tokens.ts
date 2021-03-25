export const colours = {
	R10: '#FFF8F7',
	R500: '#E8220C',
	R800: '#CC4B3D',
	G20: '#E4F4F0',
	G500: '#00B48F',
	G700: '#009E7E',
	S00: '#FFFFFF',
	S05: '#E6E7EC',
	S10: '#CECFD9',
	S20: '#B6B8C6',
	S90: '#9EA0B4',
	S100: '#8688A0',
	S300: '#6D708E',
	S500: '#55587B',
	S700: '#3D4168',
	S800: '#242955',
	S1000: '#0C1142',
	S1000_hover: '#3D4168',
	Y10: '#FFFFF4',
	Y20: '#FFFFEE',
	Y30: '#FFFFE9',
	Y40: '#FFFFE3',
	Y50: '#FFFFDE',
	Y60: '#FFFFD8',
	Y70: '#FFFFD3',
	Y80: '#FFFFCE',
	Y500: '#F3C25D',
	T10: '#D5F6F8',
	T20: '#C0F2F4',
	T40: '#AAEEF1',
	T60: '#95EAED',
	T80: '#80E5E9',
	T100: '#6BE1E6',
	T200: '#55DDE2',
	T300: '#40D8DF',
	T500: '#3AB9F4',
	B500: '#0082D9',
	P10: '#F5F5FC',
	P600: '#6964B3',
	yellow: '#FAB82B',
	note: '#F3C25D',
	information: '#80E5E9',
	tip: '#70C9B7',
	warning: '#EE6D5F',
	primaryTurqoise: '#2BD4DB',
};

export const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	mobileXL: '600px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1360px',
	desktop: '2560px',
};

const mq = '@media only screen and';

export const device = {
	fromMobileS: `${mq} (min-width: ${size.mobileS})`,
	fromMobileM: `${mq} (min-width: ${size.mobileM})`, // Added mobile M size
	fromMobile: `${mq} (min-width: ${size.mobileL})`,
	fromTablet: `${mq} (min-width: ${size.tablet})`,
	fromLaptop: `${mq} (min-width: ${size.laptop})`,
	fromLaptopL: `${mq} (min-width: ${size.laptopL})`,
	fromDesktop: `${mq} (min-width: ${size.desktop})`,
	toMobileS: `${mq} (max-width: ${size.mobileS})`,
	toMobile: `${mq} (max-width: ${size.mobileL})`,
	toMobileXL: `${mq} (max-width: ${size.mobileXL})`,
	toTablet: `${mq} (max-width: ${size.tablet})`,
	toLaptop: `${mq} (max-width: ${size.laptop})`,
	toLaptopL: `${mq} (max-width: ${size.laptopL})`,
	toDesktop: `${mq} (max-width: ${size.desktop})`,
	fromMobileToTablet: `${mq} (min-width: ${size.mobileXL}) and (max-width: ${size.tablet})`,
};
