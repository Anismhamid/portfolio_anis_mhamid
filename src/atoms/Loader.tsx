import {FunctionComponent} from "react";
import Styles from "../cssModules/loader.module.css";

interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () => {
	return (
		<div className={Styles.loader}>
			<div className={`${Styles.dot} ${Styles.dot1}`}></div>
			<div className={`${Styles.dot} ${Styles.dot2}`}></div>
			<div className={`${Styles.dot} ${Styles.dot3}`}></div>
			<div className={`${Styles.dot} ${Styles.dot4}`}></div>
			<div className={`${Styles.dot} ${Styles.dot5}`}></div>
			<div className={`${Styles.dot} ${Styles.dot6}`}></div>
			<div className={`${Styles.dot} ${Styles.dot7}`}></div>
			<div className={`${Styles.dot} ${Styles.dot8}`}></div>
		</div>
	);
};

export default Loader;
