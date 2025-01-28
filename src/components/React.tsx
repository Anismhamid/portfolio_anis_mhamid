import {FunctionComponent} from "react";
import {a, c, e, r, t} from "../FontAwesome/icons";
import Mininav from "./Mininav";
import {Link} from "react-router-dom";
import Backbutton from "../atoms/Backbuton";
import {skillsImages} from "../services/skillsImages";
import Skills from "../services/Skills";
import {path} from "../routes/path";

interface ReactProps {}

const React: FunctionComponent<ReactProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.javaScript, alt: "Sass Logo"},
		{src: skillsImages.typeScript, alt: "Sass Logo"},
		{src: skillsImages.react, alt: "Sass Logo"},
	];
	const openInNewTab = (url: string) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	return (
		<>
			<header>
				<h1 className='text-center'>
					{r}
					{e}
					{a}
					{c}
					{t}
				</h1>
				<Mininav />
			</header>
			<main>
				<Backbutton />
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

				<div className='col-md-6 col-lg-3 m-auto mt-3 rounded-1'>
					<div className='card text-center'>
						<Link to={path.bcards}>
							<img className='img-fluid' src='/cards.png' alt={"bCards"} />
						</Link>
						<div className='card-body'>
							<h5 className='card-title'>Bcards</h5>
						</div>
						<div className='card-footer d-flex'>
							<button
								className='m-auto me-3 btn btn-dark'
								onClick={() =>
									openInNewTab("https://anismhamid.netlify.app/")
								}
							>
								Visit
							</button>
							<button
								className='m-auto btn btn-dark'
								onClick={() =>
									openInNewTab(
										"https://github.com/Anismhamid/anis-mhamid-react-app",
									)
								}
							>
								GitHub
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default React;
