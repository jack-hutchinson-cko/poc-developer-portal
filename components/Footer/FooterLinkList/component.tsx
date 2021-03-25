import React, { useState } from 'react';
import { Chevron } from '../../svg';
import {
	Container,
	SolutionsLinksContainer,
	LinksContainer,
	ColMainWrapper,
	ColWrapper,
	FooterTitle,
	FooterLink,
	LinkText,
	StyledIcon,
} from './styles';

const FooterLinkList = ({ links = [] }) => {
	const [showSolutions, setSolutions] = useState<boolean>(false);
	const [showCompany, setCompany] = useState<boolean>(false);
	const [showInsights, setInsights] = useState<boolean>(false);
	const [showResources, setResources] = useState<boolean>(false);

	const setFuncs = [
		() => setCompany(!showCompany),
		() => setInsights(!showInsights),
		() => setResources(!showResources),
	];
	const showStatements = [showCompany, showInsights, showResources];

	return (
		<Container>
			{links?.map((link, i) => {
				if (i === 0) {
					return (
						<SolutionsLinksContainer key={i} onClick={() => setSolutions(!showSolutions)}>
							<FooterTitle>
								{link.primary.title[0].text}
								<StyledIcon>
									<Chevron />
								</StyledIcon>
							</FooterTitle>
							<ColMainWrapper>
								<ColWrapper isDisplayed={showSolutions}>
									{link.items.slice(0, link.items.length / 2 + 1).map((item, i) => (
										<FooterLink href={item.link_href[0].text} labelHere={item.link_name[0].text === 'Careers'} key={i}>
											<LinkText> {item.link_name[0].text} </LinkText>
										</FooterLink>
									))}
								</ColWrapper>

								<ColWrapper isDisplayed={showSolutions}>
									{link.items.slice(link.items.length / 2 + 1, link.items.length).map((item, i) => (
										<FooterLink href={item.link_href[0].text} labelHere={item.link_name[0].text === 'Careers'} key={i}>
											<LinkText> {item.link_name[0].text} </LinkText>
										</FooterLink>
									))}
								</ColWrapper>
							</ColMainWrapper>
						</SolutionsLinksContainer>
					);
				} else {
					return (
						<LinksContainer key={i} onClick={setFuncs[i - 1]}>
							<FooterTitle>
								{link.primary.title[0].text}
								<StyledIcon>
									<Chevron />
								</StyledIcon>
							</FooterTitle>
							<ColWrapper isDisplayed={showStatements[i - 1]}>
								{link.items.map((item, i) => (
									<FooterLink href={item.link_href[0].text} labelHere={item.link_name[0].text === 'Careers'} key={i}>
										<LinkText> {item.link_name[0].text} </LinkText>
									</FooterLink>
								))}
							</ColWrapper>
						</LinksContainer>
					);
				}
			})}
		</Container>
	);
};

export default FooterLinkList;
