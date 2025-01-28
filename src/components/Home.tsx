import {FunctionComponent} from "react";
import Mininav from "./Mininav";
import {e, h, m, o} from "../FontAwesome/icons";
import {Link} from "react-router-dom";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	const openInNewTab = (url: string) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	return (
		<>
			<header>
				<h1 className='text-center'>
					{h}
					{o}
					{m}
					{e}
				</h1>
				<Mininav />
			</header>
			<main>
				<div className='container mt-5'>
					<div className=' image-circle'>
						<img className='img-fluid' src='/teameWorks.jpg' alt='' />
					</div>

					<div className='skills-shadow'>
						<h1 className='text-success'>Full Stack Web Developmer</h1>
						<table className=' table table-striped text-danger table-dark'>
							<thead>
								<tr>
									<th className=' text-success'>Front End</th>
									<th>Back End</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/img-HTML.png"
											}
											alt='HTML'
										/>
										HTML 5
									</td>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/database.png"
											}
											alt='SQL'
										/>
										SQL
									</td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/img-CSS.png"
											}
											alt='CSS3'
										/>
										CSS 3
									</td>
									<td>MongoDb</td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src='https://anismhamid.github.io/anis-mhamid-project/img/powerImages/img-SASS.png'
											alt='SASS'
										/>
										SASS
									</td>
									<td>
										<img
											style={{height: "50px"}}
											src={"http://localhost:5173/NodeJs.png"}
											alt='Node js'
										/>
										Node.js
									</td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/img-Bootstrap.png"
											}
											alt='Bootstrap'
										/>
										Bootstrap
									</td>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
											}
											alt='Express'
										/>
										Express
									</td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/javascript-series.jpg"
											}
											alt='JavaScript'
										/>
										JavaScript
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/typescript.png"
											}
											alt='TypeScript'
										/>
										TypeScript
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<img
											style={{height: "50px"}}
											src={
												"https://anismhamid.github.io/anis-mhamid-project/img/powerImages/logo.svg"
											}
											alt='React'
										/>
										React
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='text-center text-light border w-50 m-auto p-3 rounded-5'>
						<h2>CV</h2>
						<a
							href={"Anis-Mhamid-CV.docx"}
							className='m-auto btn btn-outline-info'
							download
						>
							CV Download
						</a>
						<h5
							className=' mt-4 btn btn-outline-light d-block rounded-5'
							onClick={() => openInNewTab("https://github.com/Anismhamid")}
						>
							My GitHub
						</h5>
					</div>
					<h2 className='text-light mt-5'>
						skilled web developer with a strong foundation in both frontend
						and backend development, passionate about building dynamic,
						scalable, and user-friendly applications. With a focus on
						delivering high-quality solutions, I bring a comprehensive skill
						set that allows me to take on complex projects from start to
						finish
					</h2>
					<p className='text-light lead my-5'>
						Frontend Development <br />
						Proficient in HTML5, CSS3, JavaScript, TypeScript, JSX, TSX,
						React.js, Bootstrap, and React-Bootstrap
					</p>
					<p className='text-light lead my-5'>
						Experienced in creating responsive, interactive, and accessible
						web interfaces that prioritize user engagement and experience
					</p>
					<p className=' text-light lead my-5'>
						Backend Development <br />
						Skilled in Node.js and API development to build robust, scalable
						backend systems.
					</p>
					<p className=' text-light lead my-5'>
						Proficient in working with WordPress to develop custom themes and
						plugins for dynamic websites.
					</p>
					<p className=' text-light lead my-5'>
						Database Management Expertise in MariaDB, MySQL, and MongoDB for
						efficient database design, implementation, and management.
					</p>
					<p className=' text-light lead my-5'>
						Experience in integrating databases with applications to ensure
						seamless data handling and storage.
					</p>
					<p className=' text-light lead my-5'>
						Project Management Full project management experience, overseeing
						development from concept to deployment, ensuring timely and
						efficient delivery.
					</p>
					<p className=' text-light lead my-5'>
						Strong communication skills with a commitment to regular updates
						and collaboration with clients to meet project goals.
					</p>
					<p className=' text-light lead my-5'>
						Advanced Technologies Expertise in SASS (SCSS) for advanced
						styling, optimizing web design and performance.
					</p>
					<p className=' text-light lead my-5'>
						Comfortable working with various development tools and frameworks
						to enhance application functionality and manage state efficiently.
					</p>
				</div>
			</main>
		</>
	);
};

export default Home;
