import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import Backbutton from "../../atoms/Backbuton";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
	];
	return (
		<>
			<header>
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
			</header>
			<div
				style={{height: "5px", backgroundColor: "#EB6095"}}
				className=' animationss mt-3'
			/>
			<main>
				<Backbutton />
				<div className='row m-auto text-light'>
					<div className='col-md-6 my-5'>
						<img
							className='img-thumbnail thumbnail my-5'
							src='/landingPagePc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className=' lead fs-5 py-5 text-light'>
							הדף מספק חווית משתמש אטרקטיבית וקלה לשימוש במכשירים שונים
						</strong>
					</div>
					<div className='col-md-6 m-auto'>
						<img
							className='img-fluid my-5'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/projects/newLand/images/11.09.2024_20.54.48_REC.png"
							}
							alt=''
						/>
					</div>
					<div className='col-2 m-auto'>
						<img
							className='img-fluid my-5'
							src='/landingPageMobile.png'
							alt=''
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default LandingPage;
