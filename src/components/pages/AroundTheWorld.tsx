import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {a, d, e, h, l, n, o, r, t, u, w} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";

interface AroundTheWorldProps {}

const AroundTheWorld: FunctionComponent<AroundTheWorldProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{a}
					{r}
					{o}
					{u}
					{n}
					{d}
					<br />
					{t}
					{h}
					{e}
					<br />
					{w}
					{o}
					{r}
					{l}
					{d}
				</h1>
			</header>
			<div
				style={{height: "5px", backgroundColor: "#91B6E0"}}
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
							src='/aroundTheWoldPc.png'
							alt='around The Wold Pc responsive'
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
							className='img-fluid my-5 p-4'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/see-the-wold.png"
							}
							alt='Around The Wold tablet responsive'
						/>
					</div>
					<div className='col-2 my-5'>
						<img
							className='img-fluid my-5'
							src='/aroundTheWoldMobile.png'
							alt='around The Wold Mobile responsive'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default AroundTheWorld;
