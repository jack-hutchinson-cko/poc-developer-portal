const size = {
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

const device = {
	fromMobileS: `${mq} (min-width: ${size.mobileS})`,
	fromMobileM: `${mq} (min-width: ${size.mobileM})`,
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

export { device, size };
