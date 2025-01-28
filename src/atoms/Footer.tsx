import {FunctionComponent} from "react";

interface FooterProps {}

const servises = [
	{id: 1, headings: "Services"},
	{id: 2, headings: "About"},
	{id: 3, headings: "Contact"},
	{id: 4, headings: "Locaton"},
];

const Footer: FunctionComponent<FooterProps> = () => {

	return (
		<footer id='footer'>
			<div className='d-flex align-items-center justify-content-around text-light'>
				{servises.map((service) => (
					<h5 className='p-3' key={service.id}>
						{service.headings}
					</h5>
				))}
			</div>
		</footer>
	);
};

export default Footer;
