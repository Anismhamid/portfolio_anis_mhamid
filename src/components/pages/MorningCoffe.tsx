import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {c, code, e, f, g, i, m, n, o, r} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";

interface MorningCoffeProps {}

const MorningCoffe: FunctionComponent<MorningCoffeProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{m}
					{o}
					{r}
					{n}
					{i}
					{n}
					{g}
					{code}
					{c}
					{o}
					{f}
					{f}
					{e}
				</h1>
			</header>
			<div
				style={{height: "5px", backgroundColor: "#D5AA5F"}}
				className=' animationss mt-3'
			/>
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
				<div className='row m-auto'>
					<div className='col-md-6 my-5 p-4'>
						<img
							className='img-thumbnail thumbnail'
							src='/morningCoffePC.png'
							alt='Morning Coffe pc responsive'
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
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/morning-coffe.png"
							}
							alt='Morning Coffe tablet responsive'
						/>
					</div>
					<div className='col-2 m-auto'>
						<img
							className='img-fluid my-5'
							src='/morningCoffeMobile.png'
							alt='Morning Coffe Mobile responsive'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default MorningCoffe;