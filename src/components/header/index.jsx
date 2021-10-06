import { Link as ReachRouterLink } from 'react-router-dom';
import {
	Background,
	Container,
	Logo,
	ButtonLink,
	Frame,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

// Header.Container = function HeaderContainer({ children, ...restProps }) {
// 	return <Container {...restProps}>{children}</Container>;
// };

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachRouterLink to={to}>
			<Logo {...restProps} />
		</ReachRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
