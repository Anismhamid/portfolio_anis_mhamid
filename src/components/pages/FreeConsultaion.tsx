import {FunctionComponent} from "react";
import Backbutton from "../../atoms/Backbuton";
import {a, c, e, f, i, l, n, o, r, s, t, u} from "../../FontAwesome/icons";
import Skills from "../../services/Skills";
import {skillsImages} from "../../services/skillsImages";

interface FreeConsultaionProps {}

const FreeConsultaion: FunctionComponent<FreeConsultaionProps> = () => {
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
					{r}
					{r}
					{e}
					{e}
					<br />
					{c}
					{o}
					{n}
					{s}
					{u}
					{l}
					{t}
					{a}
					{t}
					{i}
					{o}
					{n}
				</h1>
			</header>
			<div
				style={{height: "5px", background: "#C68C25"}}
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
							src='/freeConsultationPc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className=' lead fs-5 py-5 text-light'>
							דף רספונסיבי שמשמש להצגת שירות 'ייעוץ חינם' למשתמשים. מופיע
							כותרת 'ייעוץ חינם' עם תיאור קצר של השירות.קיים טופס למילוי
							פרטים אישיים כגון שם מלא, דואל ופרטי הפניה. קיימות גם סמלים
							חברתיים ליצירת קשר ומספר טלפון ליצירת קשר ישיר.הדף מכיל עיצוב
							רספונסיבי שמתאים לגדלי מסכים ולתצורות שונות של התקנים
						</strong>
					</div>
					<div className='col-md-6 m-auto'>
						<img
							className='img-fluid my-5 p-5'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/free-consultation-porject5-image2.png"
							}
							alt=''
						/>
					</div>
					<div className='col-2 m-auto'>
						<img
							className='img-fluid my-5'
							src='/free-consultationMobile.png'
							alt=''
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default FreeConsultaion;
