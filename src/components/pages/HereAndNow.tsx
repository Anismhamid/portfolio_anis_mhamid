import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Backbutton from "../../atoms/Backbuton";
import {a, code, d, e, h, n, o, r, w} from "../../FontAwesome/icons";
import Skills from "../../services/Skills";

interface HereAndNowProps {}

const HereAndNow: FunctionComponent<HereAndNowProps> = () => {
	const skillsList = [
		{src: skillsImages.html, alt: "HTML Logo"},
		{src: skillsImages.css, alt: "CSS Logo"},
		{src: skillsImages.sass, alt: "Sass Logo"},
		{src: skillsImages.bootstrap, alt: "bootstrap Logo"},
	];
	return (
		<>
			<header>
				<h1 className='text-center'>
					{h}
					{e}
					{r}
					{e}
					{code}
					{a}
					{n}
					{d}
					{code}
					{n}
					{o}
					{w}
				</h1>
			</header>
			<div
				style={{
					borderRadius: "100%",
					background:
						"linear-gradient( to left,rgb(56, 94, 228), rgb(97, 250, 150))",
				}}
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
							src='public/hereAndNowPc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto p-4'>
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
							className='img-fluid my-5 p-4'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/hereAndNow.png"
							}
							alt=''
						/>
					</div>
					<div className='col-2 m-auto'>
						<img className='img-fluid my-5' src='/hereAndNow.png' alt='' />
					</div>
				</div>
			</main>
		</>
	);
};

export default HereAndNow;
