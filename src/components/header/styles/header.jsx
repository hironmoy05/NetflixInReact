import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		top left / cover no-repeat;

	@media screen and (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && `background: none;`}
	}
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}
`;

export const Link = styled.p``;

export const ButtonLink = styled(ReachRouterLink)``;

export const Frame = styled.div``;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media screen and (min-width: 1440px) {
        height: 45px;
        width; 167px;
    }
`;
