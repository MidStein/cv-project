import React from "react";
import Project from './Project';
import '../styles/PracExpSec.css';

class PracExpSec extends React.Component {
	render() {
		return (
			<div className='component-container'>
				<div className='title'>PROJECTS</div>
				<div className='horizontal-rule'></div>
				<Project/>
				<Project/>
				<Project/>
				<Project/>
			</div>
		);
	}
}

export default PracExpSec;
