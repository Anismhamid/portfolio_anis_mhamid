import {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import {arrowCircleLeft} from "../FontAwesome/icons";

interface BackbuttonProps {}

const Backbutton: FunctionComponent<BackbuttonProps> = () => {
	const navigate = useNavigate();

	return (
		<button
			className='back sticky-top mx-1 rounded-circle ratio'
			onClick={() => navigate(-1)}
		>
			{arrowCircleLeft}
		</button>
	);
};

export default Backbutton;
