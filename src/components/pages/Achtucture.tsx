import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {a, c, e, h, i, r, t, u} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";

interface AchtuctureProps {}

const Achtucture: FunctionComponent<AchtuctureProps> = () => {
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
					{c}
					{h}
					{i}
					{t}
					{e}
					{c}
					{t}
					{u}
					{r}
					{e}
				</h1>
			</header>
			<div
				style={{height: "5px", backgroundColor: "#01060a"}}
				className='animationss mt-3'
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
							src='/architrcturePC.png'
							alt='architrcture pc responsive'
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className=' lead fs-5 p-5 text-light'>
							הדף רספונסיבי למכשירים שונים, מה שאומר שעיצובו מתאים לגדלי
							מסכים שונים ולסוגי מכשירים שונים, ממחשבים שולחניים עד הטלפונים
							הניידים.העיצוב הזה מקל על חוויית המשתמש
						</strong>
					</div>
					<div className='col-md-6 m-auto'>
						<img
							className='img-fluid my-5 p-4'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/dream-home.png"
							}
							alt='architrcture tablet responsive'
						/>
					</div>
					<div className='col-2 m-auto'>
						<img
							className='img-fluid my-5'
							src='/dreameHomeMobile.png'
							alt='architrcture Mobile responsive'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default Achtucture;
