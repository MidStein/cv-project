import React from 'react';
import '../styles/Project.css';

class Project extends React.Component {
	render() {
		return (
			<form className='project-component	'>
				<div className='double-aligned'>
					<input type='text' id='form-project' placeholder='Project Name'/>
					<input type='text' id='form-duration' placeholder='Development Duration'/>
				</div>
				<ul className='features'>
					<li><input type='text' id='feature1' placeholder='Feature #1'/></li>
					<li><input type='text' id='feature2' placeholder='Feature #2'/></li>
					<li><input type='text' id='feature3' placeholder='Feature #3'/></li>
					<li><input type='text' id='feature4' placeholder='Feature #4'/></li>
				</ul>
			</form>
		);
	}
}

export default Project;
