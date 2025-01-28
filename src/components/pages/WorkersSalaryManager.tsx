import {FunctionComponent} from "react";
import {a, e, g, l, m, n, o, p, t, y} from "../../FontAwesome/icons";
import Mininav from "../Mininav";
import Backbutton from "../../atoms/Backbuton";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

const features = [
	"Manage workers easily and effectively",
	"Create, Read, Update, Delete records",
	"Accurate tracking of payroll data",
	"Use modern technologies and a secure database",
	"API support for interacting with data",
	"Flexibility in installation and deployment",
	"Modern technology to improve performance",
];

interface WorkersSalaryManagerProps {}

const WorkersSalaryManager: FunctionComponent<WorkersSalaryManagerProps> = () => {
	const skillsList = [
		{src: skillsImages.python, alt: "HTML Logo"},
		{src: skillsImages.sql, alt: "CSS Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{e}
					{m}
					{p}
					{l}
					{o}
					{y}
					{e}
					{e}
					<br />
					{m}
					{a}
					{n}
					{g}
					{e}
					{m}
					{e}
					{n}
					{t}
				</h1>
				<Mininav />
			</header>
			<main>
				<Skills
					children={
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
					}
				/>
				<Backbutton />
				<div className='container mt-5'>
					{/* Subtitle */}
					<h5 className='text-center text-light my-4 card-subtitle'>
						Python Tkinter, CustomTkinter, TTKBootstrap, SQL, MariaDB
					</h5>
					<hr style={{height: "2px"}} className=' bg-light' />
					<h5 className='text-light mt-0'>Themes</h5>
					<div className='container fs-3 my-5 p-3 text-center m-auto'>
						<div className='row px-5'>
							<div
								className='col'
								style={{background: "#2c3e50", color: "#fff"}}
							>
								united
							</div>
							<div
								className='col'
								style={{background: "#343a40", color: "#fff"}}
							>
								morph
							</div>
							<div
								className='col'
								style={{background: "#d9534f", color: "#fff"}}
							>
								journal
							</div>
							<div
								className='col'
								style={{background: "#555", color: "#fff"}}
							>
								darkly
							</div>
							<div
								className='col'
								style={{background: "#3e2a47", color: "#fff"}}
							>
								superhero
							</div>
							<div
								className='col'
								style={{background: "#e74c3c", color: "#fff"}}
							>
								solar
							</div>
							<div
								className='col'
								style={{background: "#1abc9c", color: "#fff"}}
							>
								cosmo
							</div>
							<div
								className='col'
								style={{background: "#8e44ad", color: "#fff"}}
							>
								vapor
							</div>
							<div
								className='col'
								style={{background: "#f39c12", color: "#fff"}}
							>
								simplex
							</div>
							<div
								className='col'
								style={{background: "#2980b9", color: "#fff"}}
							>
								cerculean
							</div>
						</div>
					</div>
					{/* Image */}
					<div className='text-center mt-5'>
						<img
							className='img-fluid p-1'
							src='/workersManagement.png'
							alt='Employee Management Screenshot'
						/>
					</div>
					{/* Application Features */}
					<div className='text-light'>
						<strong>Application Features</strong>
						<hr />

						<ul>
							{features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>

						{/* Detailed descriptions for features */}
						<p>
							<strong>Create, Read, Update, Delete records:</strong> Users
							can fully manage employee records, including adding new data,
							viewing existing details, updating information, and deleting
							records when needed.
						</p>

						<hr />

						<p>
							<strong>Accurate tracking of payroll data:</strong> Users can
							record employee payroll deductions on a regular basis,
							including details such as employee name, ID number, date
							period, and payment date.
						</p>

						<hr />

						<ul>
							<li>Use modern technologies and a secure database</li>
						</ul>

						<p>
							<strong>Using MySQL and SQLAlchemy:</strong> Employee data is
							stored and managed using a MySQL database, with SQLAlchemy
							facilitating communication with the database, ensuring data
							integrity and ease of querying.
						</p>

						<hr />

						<ul>
							<li>API support for interacting with data</li>
						</ul>

						<p>
							<strong>RESTful API:</strong> The application provides API
							endpoints for interacting with employee data, enabling simple
							and secure access, updating, and deletion of data over HTTP.
						</p>

						<p>
							<strong>Provide flexibility and integration:</strong> The
							application is flexible in installation and deployment,
							supporting multiple platforms like Windows, macOS, and Linux
							by compiling it into executable files using tools like
							PyInstaller or cx_Freeze, making deployment easier.
						</p>

						<p>
							<strong>Modern technology to improve performance:</strong> The
							application is built using Flask, a lightweight and flexible
							Python framework, providing highly efficient performance and
							easy development and maintenance.
						</p>

						<hr />

						<h5>
							<strong>File Structure:</strong>
						</h5>
						<ul>
							<li>
								<strong>main_Screen.py:</strong> Main Python file
								containing the application’s logic.
							</li>
							<li>
								<strong>API.py:</strong> Handles database operations.
							</li>
						</ul>

						<hr />

						<h5>
							<strong>Publishing:</strong>
						</h5>
						<p>
							The application can be published on various platforms such as
							Windows, macOS, and Linux by packaging it into executable
							files using tools like PyInstaller or cx_Freeze.
						</p>

						<hr />

						<h5>
							<strong>Dependencies:</strong>
						</h5>
						<p>
							Python 3.x, Tkinter, customtkinter, ttkbootstrap, webbrowser,
							requests, pymysql, logging, Flask, flask_sqlalchemy,
							sqlalchemy, datetime, openpyxl, docx, pptx, reportlab
						</p>

						<hr />

						<h5>
							<strong>Contact Information:</strong>
						</h5>
						<p>
							For inquiries or support, please contact Anis Mahamid at{" "}
							<a
								className='text-decoration-underline fs-3'
								href='mailto:anesmhamed1@gamil.com'
							>
								anesmhamed1@gamil.com
							</a>
						</p>

						<hr />

						<p>
							<strong>Author:</strong> Anis Mahamid.
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default WorkersSalaryManager;
