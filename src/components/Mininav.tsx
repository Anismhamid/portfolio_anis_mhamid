import {FunctionComponent} from "react";
import {Link, useLocation} from "react-router-dom";
import {path} from "../routes/path";

interface MininavProps {}

const Mininav: FunctionComponent<MininavProps> = () => {
	const isActive = (path: string) => location.pathname === path;
	const location = useLocation();
	return (
		<div className=''>
			<nav className='navbard-brand'>
				<ul className='nav nav-tabs border-danger'>
					<li className='nav-item'>
						<Link
							className={` text-light ${
								isActive(path.home) ? "border-danger" : ""
							} nav-link`}
							aria-current='page'
							to={path.home}
						>
							HOME
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							className={`${
								isActive(path.htmlCss) ? "text-light border-danger" : ""
							} nav-link `}
							aria-current='page'
							to={path.htmlCss}
						>
							HTML | CSS
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							className={`${
								isActive(path.javaScriptBootstrap)
									? "text-light border-danger"
									: ""
							} nav-link`}
							to={path.javaScriptBootstrap}
						>
							JavaScript
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							className={`${
								isActive(path.react) ? "text-light border-danger" : ""
							} nav-link`}
							to={path.react}
						>
							React
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							className={`${
								isActive(path.python) ? "text-light border-danger" : ""
							} nav-link`}
							to={path.python}
						>
							Python
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Mininav;
