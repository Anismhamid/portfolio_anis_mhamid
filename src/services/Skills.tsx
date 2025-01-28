import {FunctionComponent, ReactNode} from "react";

interface SkillsProps {
	children: ReactNode;
}

const Skills: FunctionComponent<SkillsProps> = ({children}) => {
	return <div className='mt-5 container d-flex justify-content-around '>{children}</div>;
};

export default Skills;
