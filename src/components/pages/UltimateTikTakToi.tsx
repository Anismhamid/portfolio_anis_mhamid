import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

interface UltimateTikTakToiProps {}

const UltimateTikTakToi: FunctionComponent<UltimateTikTakToiProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.bootstrap, alt: "Bootstrap Logo"},
		{src: skillsImages.javaScript, alt: "javaScript Logo"},
	];
	return (
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
			UltimateTikTakToi
		</main>
	);
};

export default UltimateTikTakToi;
