import React from 'react';
import styled from 'styled-components';
import { WarningIcon, InformationIcon, NoteIcon, TipIcon } from './svg';
import { colours } from './css/tokens';

const StyledWrapper = styled.div`
	border: 1px solid ${(props: { activeBg: string }) => props.activeBg};
	border-radius: 8px;
	color: ${colours.S1000};
	background: white;
	display: grid;
	grid-template-columns: 60px 1fr;
	font-size: 16px;
	font-family: 'Graphik LCG Web';
	min-height: 90px;
	position: relative;
	margin: 40px auto;
`;

const StyledSide = styled.div`
	margin: auto;
`;

const StyledText = styled.div`
	padding: 24px;
`;

const StyledLabel = styled.div`
	font-size: 18px;
	line-height: 24px;
	margin: 0px 0px 8px 0px;
	font-weight: 500;
`;

interface Props {
	children: string;
	header?: string;
	type?: string;
}

const Information = ({ children, header, type = 'information' }: Props): JSX.Element => {
	const bgMap = {
		information: colours.information,
		tip: colours.tip,
		note: colours.note,
		warning: colours.warning,
	};
	const headerLabel = header || type;
	const activeBg = bgMap[type];

	return (
		<StyledWrapper activeBg={activeBg}>
			<div style={{ background: activeBg, display: 'flex' }}>
				<StyledSide>
					{type === 'tip' && <TipIcon />}
					{type === 'information' && <InformationIcon />}
					{type === 'note' && <NoteIcon />}
					{type === 'warning' && <WarningIcon />}
				</StyledSide>
			</div>
			<StyledText>
				<StyledLabel>{headerLabel.charAt(0).toUpperCase() + headerLabel.slice(1)}</StyledLabel>
				{children}
			</StyledText>
		</StyledWrapper>
	);
};

export default Information;
