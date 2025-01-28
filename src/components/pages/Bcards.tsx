import {FunctionComponent} from "react";
import Backbutton from "../../atoms/Backbuton";
import Skills from "../../services/Skills";
import {skillsImages} from "../../services/skillsImages";
import {a, b, c, d, r, s} from "../../FontAwesome/icons";
import Mininav from "../Mininav";

interface BcardsProps {}

const Bcards: FunctionComponent<BcardsProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.javaScript, alt: "JavaScript Logo"},
		{src: skillsImages.typeScript, alt: "TypeScript Logo"},
		{src: skillsImages.react, alt: "React Logo"},
	];

	return (
		<>
			<header>
				<h1 className='text-center'>
					{b}
					{c}
					{a}
					{r}
					{d}
					{s}
				</h1>
				<Mininav />
			</header>

			<main>
				<Backbutton />
				<Skills>
					<>
						{skillsList.map((skill, index) => (
							<img
								key={index}
								className='img-fluid skills-shadow rounded-4'
								src={skill.src}
								alt={skill.alt}
								style={{width: "3rem", marginLeft: "10px"}}
							/>
						))}
					</>
				</Skills>

				<div className='row m-auto'>
					<div className='col-md-6 my-5 p-4'>
						<img
							className='img-thumbnail thumbnail'
							src='/Bcards.png'
							alt='Bcards Pc responsive'
						/>
					</div>

					<div className='col-md-6 my-5 p-4'>
						<img
							className='img-fluid'
							src='/BcardsTablet.png'
							alt='Bcards tablet responsive'
						/>
					</div>

					<div className='col-md-8 m-auto'>
						<span className='lead fs-5 p-4 text-light'>
							<h2>Overview</h2>
							<p>
								bCards allows users to manage their digital business
								cards, edit profiles, and access different features
								depending on their roles. The app supports the following
								user roles:
							</p>

							<ul>
								<li>
									<strong>Unregistered User</strong>: A user who is not
									registered or logged in.
								</li>
								<li>
									<strong>Registered User</strong>: A user who is
									registered and logged in but does not have a business
									account.
								</li>
								<li>
									<strong>Registered Business User</strong>: A user who
									is registered and logged in with a business account.
								</li>
								<li>
									<strong>Admin User</strong>: A user with administrator
									privileges who can manage other users and access
									higher-level functionality.
								</li>
							</ul>

							<p>
								The application supports CRUD operations, allowing users
								to:
							</p>
							<ul>
								<li>
									<strong>Create</strong>: Users can create new business
									cards by providing necessary information (name, title,
									etc.) through a form.
								</li>
								<li>
									<strong>Read</strong>: Users can view their own or
									public business cards. Admins can view all users' and
									businesses' cards.
								</li>
								<li>
									<strong>Update</strong>: Users can edit their own
									business cards and update details such as title,
									description, and contact information. Admin users can
									do this.
								</li>
								<li>
									<strong>Delete</strong>: Users can delete their own
									business cards. Admin users can delete any business
									card or user data.
								</li>
							</ul>

							<h3>Roles and Permissions</h3>
							<ul>
								<li>
									<strong>Unregistered User:</strong> Can view public
									pages such as the home page and the About page. Must
									register or log in for additional access.
								</li>
								<li>
									<strong>Registered User:</strong> Can log in and
									access their profile. Can manage their digital
									business cards but cannot access business-specific
									features.
								</li>
								<li>
									<strong>Registered Business User:</strong> Can log in
									and access their business profile. Can create, update,
									and manage business-related digital cards.
								</li>
								<li>
									<strong>Admin User:</strong> Has full access to all
									user and business data, can manage and delete any user
									or business account, and can access protected admin
									paths and perform higher-level tasks.
								</li>
							</ul>

							<h3>Technologies Used</h3>
							<ul>
								<li>React</li>
								<li>Vite</li>
								<li>React Router</li>
								<li>Formik</li>
								<li>Yup</li>
								<li>Axios</li>
								<li>JWT (JSON Web Tokens)</li>
								<li>React Context API</li>
								<li>Toastify</li>
								<li>Bootstrap</li>
								<li>React-Bootstrap</li>
								<li>React FontAwesome</li>
							</ul>

							<h3>Project Structure</h3>
							<ul>
								<li>
									<code>/src/components</code> - React components (e.g.,
									Navbar, Profile, Cards)
								</li>
								<li>
									<code>/context</code> - React Context for global state
									(e.g., user authentication)
								</li>
								<li>
									<code>/hooks</code> - Custom hooks (e.g., useUserData,
									useToken)
								</li>
								<li>
									<code>/interfaces</code> - TypeScript interfaces for
									data types (e.g., User, Card)
								</li>
								<li>
									<code>/services</code> - API services (e.g.,
									userServices, cardsServices)
								</li>
								<li>
									<code>/atoms</code> - Reusable UI elements like modals
									and input components
								</li>
								<li>
									<code>/styles</code> - Global and component-specific
									CSS files
								</li>
								<li>
									<code>/routes</code> - Route definitions for
									navigation
								</li>
								<li>
									<code>main.tsx</code> - Main App component
								</li>
							</ul>

							<h3>Installation</h3>
							<ul>
								<li>
									Clone the repository: <br />
									<code>
										git clone
										https://github.com/Anismhamid/anis-mhamid-react-app.git
									</code>
								</li>
							</ul>
						</span>
					</div>

					<div className='col-md-3 col-sm-12 my-5 m-auto'>
						<img
							className='img-fluid'
							src='/BcardsMobile.png'
							alt='Bcards Mobile responsive'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default Bcards;
