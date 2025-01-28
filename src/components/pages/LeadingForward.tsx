import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {a, d, e, f, g, i, l, n, o, r, u, w, y} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";

interface LeadingForwardProps {}

const LeadingForward: FunctionComponent<LeadingForwardProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
	];

	return (
		<>
			<header>
				<h1 className='text-center'>
					{l}
					{e}
					{a}
					{d}
					{i}
					{n}
					{g}
					<br />
					{f}
					{o}
					{r}
					{w}
					{a}
					{r}
					{d}
				</h1>
			</header>
			<div
				style={{height: "5px", background: "#05194A"}}
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
							className='img-thumbnail thumbnail my-5'
							src='/leadingYouForwardPc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className='lead fs-5 py-5 text-light'>
							עמוד זה מאופיין ביופיו האלגנטי. העמוד משדר אווירה נהדרת.
							העיצוב הנקי והמאורגן שלו הופך את חווית הגלישה למהנה ונוחה
							למשתמשים. הטקסטים הקיימים מנחים את המבקרים בעדינות וקלים
							להבנה, גורמים להם להרגיש רצוי ומבורכים. בנוסף, התמונה הכוללת
							של העמוד משקפת משיכה מיוחדת שגורמת למבקרים לרצות לחקור יותר
							מהתוכן שלו ולנצל את ההצעות הזמינות. בסך הכל, לדף יש אסתטיקה
							בולטת שמושכת את העין והופכת את החוויה המקוונת למשתמשים למהנה
							ומרגשת
						</strong>
					</div>
					<div className='col-md-6 m-auto'>
						<img
							className='img-fluid my-5 p-5'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/leading-forward.png"
							}
							alt=''
						/>
					</div>
					<div className='col-2 m-auto'>
						<img
							className='img-fluid my-5'
							src='/leadingYouForwardMobile.png'
							alt=''
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default LeadingForward;