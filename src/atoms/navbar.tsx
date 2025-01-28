import {FunctionComponent} from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/esm/Navbar";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import {Link, NavLink} from "react-router-dom";
import {path} from "../routes/path";

interface NavbarProps {}

const NavbarComponent: FunctionComponent<NavbarProps> = () => {
	return (
		<>
			{[false].map((expand) => (
				<Navbar
					key={expand.toString()}
					expand={expand}
					className='mb-3 sticky-top'
					data-bs-theme='dark'
				>
					<Container fluid>
						<Navbar.Brand href='/'>M.Anis Portfolio</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement='start'
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									Portfolio
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body data-bs-theme='dark'>
								<Nav className='justify-content-end flex-grow-1 pe-3'>
									<NavLink to='/'>Home</NavLink>
									<NavDropdown
										title='HTML | CSS Landing Pages '
										id={`offcanvasNavbarDropdown-expand-${expand}`}
									>
										{/* 1 */}
										<NavDropdown.Item>
											<Link to={path.future}>The Future</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 2 */}
										<NavDropdown.Item>
											<Link to={path.hereAndNow}>Here And Now</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 3 */}
										<NavDropdown.Item>
											<Link to={path.freeConsultaion}>
												Free Consultaion
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 4 */}
										<NavDropdown.Item>
											<Link to={path.leadingForward}>
												Leading you Forward
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 5 */}
										<NavDropdown.Item>
											<Link to={path.morningCoffe}>
												Morning Coffe
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 6 */}
										<NavDropdown.Item>
											<Link to={path.aroundTheWorld}>
												Around The World
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 7 */}
										<NavDropdown.Item>
											<Link to={path.thinkOutsideTheBox}>
												Think Outside The Box
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 8 */}
										<NavDropdown.Item>
											<Link to={path.achtucture}>Achtucture</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 9 */}
										<NavDropdown.Item>
											<Link to={path.fasion}>Fasion</Link>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 10 */}
										<NavDropdown.Item>
											<Link to={path.landingPage}>
												Landing Page
											</Link>
										</NavDropdown.Item>
									</NavDropdown>
									<NavDropdown.Divider />
									{/* JavaScript Bootstrap */}
									<NavDropdown
										title='JavaScript Bootstrap'
										id={`offcanvasNavbarDropdown-expand-${expand}`}
									>
										{/* 1 */}
										<NavDropdown.Item>
											<NavLink to={path.calculator}>
												Js Calculator
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 2 */}
										<NavDropdown.Item>
											<NavLink to={path.fluppyBird}>
												Js Flappy Bird game
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 3 */}
										<NavDropdown.Item>
											<NavLink to={path.productsCart}>
												Js Products Cart oop
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 4 */}
										<NavDropdown.Item>
											<NavLink to={path.myAccount}>
												Js My Account oop
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 5 */}
										<NavDropdown.Item>
											<NavLink to={path.ultimateTikTakToi}>
												Js Ultimata Tic Tac Toe
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 6 */}
										<NavDropdown.Item>
											<NavLink to={path.snake}>Js Snake</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 7 */}
										<NavDropdown.Item>
											<NavLink to={path.manageU}>
												Js ManageU
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 8 */}
										<NavDropdown.Item>
											<NavLink to={path.flags}>
												Js Flags API
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 9 */}
										<NavDropdown.Item>
											<NavLink to={path.marketApi}>
												Js market Api
											</NavLink>
										</NavDropdown.Item>
										<NavDropdown.Divider />

										{/* 10 */}
										<NavDropdown.Item>
											<NavLink to={path.weather}>
												Js Weather Api
											</NavLink>
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default NavbarComponent;
