import {FunctionComponent, useMemo, useState} from "react";
import Mininav from "./Mininav";
import {c, code, h, l, m, s, t} from "../FontAwesome/icons";
import {htmlCssProjects} from "../projectsInfo/html";
import Loader from "../atoms/Loader";
import Cardo from "../services/Cardo";
import Backbutton from "../atoms/Backbuton";
import {ProjectType} from "../interfaces/projects";

interface HtmlCssProps {}

const HtmlCss: FunctionComponent<HtmlCssProps> = () => {
	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [pending, setPinding] = useState<boolean>(true);

	useMemo(() => {
		setProjects(htmlCssProjects);
		setPinding(false);
	}, []);

	if (pending) return <Loader />;

	return (
		<>
			<header>
				<h1 className='text-center'>
					{h}
					{t}
					{m}
					{l} {code} {c}
					{s}
					{s}
				</h1>
				<Mininav />
			</header>
			<main>
				<Backbutton />
				<Cardo props={projects} />
			</main>
		</>
	);
};

export default HtmlCss;
