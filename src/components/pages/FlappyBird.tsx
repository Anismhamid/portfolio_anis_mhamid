import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

interface FluppyBirdProps {}

const FluppyBird: FunctionComponent<FluppyBirdProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
		{src: skillsImages.bootstrap, alt: "Bootstrap Logo"},
	];
	return (
		<main>
			<Skills
				children={
					<>
						{skillsList.map((skill, index) => (
							<img
								key={index}
								className='img-thumbnail thumbnail skills-shadow rounded-4'
								src={skill.src}
								alt={skill.alt}
								style={{width: "3rem", marginLeft: "10px"}}
							/>
						))}
					</>
				}
			/>
			FlappyBird
		</main>
	);
};

export default FluppyBird;
