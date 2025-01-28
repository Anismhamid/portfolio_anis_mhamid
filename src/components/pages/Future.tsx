import {FunctionComponent} from "react";
import {skillsImages} from "../../services/skillsImages";
import Skills from "../../services/Skills";
import {f, u, t, r, e} from "../../FontAwesome/icons";
import Backbutton from "../../atoms/Backbuton";

interface FutureProps {}

const Future: FunctionComponent<FutureProps> = () => {
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
					{u}
					{t}
					{u}
					{r}
					{e}
				</h1>
			</header>
			<div
				style={{height: "5px", backgroundColor: "#d63384"}}
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
									className='img-thumbnail thumbnail skills-shadow rounded-4'
									src={skill.src}
									alt={skill.alt}
									style={{width: "3rem", marginLeft: "10px"}}
								/>
							))}
						</>
					}
				/>
				<div className='row m-auto'>
					<div className='col-6 my-5 p-4'>
						<img
							className='img-thumbnail thumbnail my-5'
							src='public/futurePc.png'
							alt=''
						/>
					</div>
					<div className='col-md-6 m-auto'>
						<strong className=' lead fs-5 py-5 text-light'>
							הדף מספק חווית משתמש אטרקטיבית וקלה לשימוש במכשירים שונים, שכן
							הוא משקף הקפדה על פרטים ועיצוב משוכלל המשלב אלגנטיות
							ופונקציונליות יעילה, המבטיח אינטראקציה חלקה ונוחה למשתמשים עם
							התוכן.
						</strong>
					</div>
					<div className='col-6 m-auto'>
						<img
							className='img-fluid my-5 p-4'
							src={
								"https://anismhamid.github.io/anis-mhamid-project/img/pages-images/takeTheFuture.png"
							}
							alt=''
						/>
					</div>
					<div className='col-2 m-auto'>
						<img className='img-fluid my-5' src='/futurePhone.png' alt='' />
					</div>
				</div>
			</main>
		</>
	);
};

export default Future;