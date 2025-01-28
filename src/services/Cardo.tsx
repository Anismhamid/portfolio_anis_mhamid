import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import Loader from "../atoms/Loader";
import {ProjectType} from "../interfaces/projects";

interface CardoProps {
	props: ProjectType[];
}

export const Cardo: FunctionComponent<CardoProps> = ({props}) => {
	const openInNewTab = (url: string) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className='container'>
			<div className='row mt-5'>
				{props.length > 0 ? (
					props.map((project: ProjectType) => (
						<div
							key={project.id}
							className='col-md-4 col-lg-3 m-auto mt-3 rounded-1'
						>
							<div className='card text-center'>
								{!project.image?.url ? (
									<Loader />
								) : (
									<Link to={project.pageUrl}>
										<img
											className='img-fluid scale-hover'
											src={project.image.url}
											alt={project.image.alt || "Project image"}
											style={{
												transition: "transform 0.2s",
											}}
										/>
									</Link>
								)}

								<div className='card-body'>
									<h5 className='card-title'>{project.title}</h5>
								</div>
								<div className='card-footer d-flex border-light'>
									<button
										className='m-auto me-3 btn btn-outline-info'
										onClick={() => openInNewTab(project.projectUrl)}
									>
										Visit
									</button>
									<button
										className='m-auto btn btn-outline-info'
										onClick={() => openInNewTab(project.gitHub)}
									>
										GitHub
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No Html projects available.</p>
				)}
			</div>
		</div>
	);
};

export default Cardo;
