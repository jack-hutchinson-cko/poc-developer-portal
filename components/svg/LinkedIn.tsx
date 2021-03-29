import React from 'react';

const svgProps = {
	clipPath: 'url(#clip0)',
};

export const LinkedIn = (props): JSX.Element => (
	<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<g {...svgProps}>
			<path
				d="M3.32024 1.73529C3.33101 2.18571 3.16324 2.62212 2.85351 2.94933C2.54379 3.27654 2.11724 3.468 1.6669 3.48195C1.44276 3.47676 1.22184 3.42746 1.01676 3.33686C0.811678 3.24626 0.626458 3.11614 0.471682 2.95393C0.316905 2.79173 0.195606 2.60061 0.114713 2.39151C0.0338208 2.18241 -0.00507935 1.95942 0.000235494 1.73529C-0.00507198 1.5118 0.0339257 1.28947 0.114979 1.08113C0.196032 0.872792 0.317536 0.682563 0.472481 0.52142C0.627426 0.360277 0.812745 0.231409 1.01775 0.142251C1.22275 0.0530937 1.44338 0.0054106 1.6669 0.00195312C1.88929 0.00714437 2.10848 0.0561035 2.31194 0.146033C2.51541 0.235963 2.69916 0.365101 2.8527 0.526068C3.00623 0.687036 3.12655 0.876678 3.20677 1.08416C3.287 1.29164 3.32555 1.5129 3.32024 1.73529ZM3.32024 4.86862H0.000235494V16.002H3.33357L3.32024 4.86862ZM8.65357 4.86862H5.33357V16.002H8.65357V10.162C8.65357 6.90862 12.6536 6.64195 12.6536 10.162V16.002H16.0002V8.94862C16.0939 8.05305 15.8826 7.15208 15.4006 6.39149C14.9186 5.63091 14.1941 5.0552 13.3442 4.75753C12.4944 4.45986 11.569 4.45764 10.7178 4.75122C9.86651 5.04481 9.13922 5.61702 8.65357 6.37529V4.86862Z"
				fill="var(--logo-icon-fill)"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="16" height="16" fill="white" transform="translate(0 0.00195312)" />
			</clipPath>
		</defs>
	</svg>
);
