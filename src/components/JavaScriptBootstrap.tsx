import {j, a, v, s, c, r, i, p, t} from "../FontAwesome/icons";
import {FunctionComponent, useMemo, useState} from "react";
import Mininav from "./Mininav";
import {javaScriptProjects} from "../projectsInfo/javaScript";
import Loader from "../atoms/Loader";
import Cardo from "../services/Cardo";
import Backbutton from "../atoms/Backbuton";
import {ProjectType} from "../interfaces/projects";

interface JavaScriptBootstrapProps {}

const JavaScriptBootstrap: FunctionComponent<JavaScriptBootstrapProps> = () => {
	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [pending, setPinding] = useState<boolean>(true);

	useMemo(() => {
		setPinding(true);
		setProjects(javaScriptProjects);
		setPinding(false);
	}, []);

	if (pending) return <Loader />;

	return (
		<>
			<header>
				<h1 className='text-center'>
					{j}
					{a}
					{v}
					{a}
					{s}
					{c}
					{r}
					{i}
					{p}
					{t}
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

export default JavaScriptBootstrap;
