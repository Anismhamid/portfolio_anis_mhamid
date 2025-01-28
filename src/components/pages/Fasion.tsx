import {FunctionComponent} from "react";
import {a, f, h, i, n, o, s} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";

interface FasionProps {}

const Fasion: FunctionComponent<FasionProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{f}
					{a}
					{s}
					{h}
					{i}
					{o}
					{n}
				</h1>
			</header>
			<div
				style={{height: "5px", backgroundColor: "#F56251"}}
				className=' animationss mt-3'
			/>
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
				<div className='row m-auto'>
					<div className='col-md-6 m-auto'>
						<img
							className='img-thumbnail thumbnail'
							src='/fastionPc.png'
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
							className='img-fluid my-5 p-5'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/fashion.png"
							}
							alt=''
						/>
					</div>
					<div className='col-3 m-auto'>
						<img className='img-fluid my-5' src='/fashionMobile.png' alt='' />
					</div>
				</div>
			</main>
		</>
	);
};

export default Fasion;
