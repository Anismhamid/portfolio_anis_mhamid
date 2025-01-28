import {FunctionComponent} from "react";
import {a, f, g, l, s} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

interface FlagsProps {}

const Flags: FunctionComponent<FlagsProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.javaScript, alt: "javaScript Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{f}
					{l}
					{a}
					{g}
					{s}
				</h1>
			</header>
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
				<Backbutton />
			</main>
		</>
	);
};

export default Flags;
