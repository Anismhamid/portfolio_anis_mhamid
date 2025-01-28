import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

interface ManageUProps {}

const ManageU: FunctionComponent<ManageUProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "SASS Logo"},
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
			ManageU
		</main>
	);
};

export default ManageU;
