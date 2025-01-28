import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {b, code, d, e, h, i, k, n, o, s, t, u, x} from "../../FontAwesome/icons";
import Mininav from "../Mininav";

interface ThinkOutsideTheBoxProps {}

const ThinkOutsideTheBox: FunctionComponent<ThinkOutsideTheBoxProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{t}
					{h}
					{i}
					{n}
					{k}
					{code}
					{o}
					{u}
					{t}
					{s}
					{i}
					{d}
					{e}
					<br />
					{t}
					{h}
					{e}
					{code}
					{b}
					{o}
					{x}
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
				<div className='row m-auto'>
					<div className='col-md-6 my-5 p-4'>
						<img
							className='img-thumbnail thumbnail'
							src='/thinkOutsideTheBoxPc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className=' lead fs-5 py-5 text-light'>
							העמוד תוכנן בצורה שמאפשרת חוויית משתמש חלקה ונעימה לכל סוגי
							המסכים.בעת פתיחת העמוד במסך גדול, האיזור הימני מוקדש לתמונה
							גדולה ומרשימה של הקפה, יחד עם טופס ההרשמה המצורף
						</strong>
					</div>
					<div className='col-md-6 m-auto'>
						<img
							className='img-fluid my-5 p-5'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/think-so-far.png"
							}
							alt=''
						/>
					</div>
					<div className='col-3 m-auto'>
						<img
							className='img-fluid my-5'
							src='/thinkOutsideTheBoxMobile.png'
							alt=''
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default ThinkOutsideTheBox;
