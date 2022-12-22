import React from 'react';
import '../styles/Project.css';

const Project = ({ editable }) => {
	return (
		<form className='project-component'>
				<div className='double-aligned'>
					<input 
						type='text' 
						id='form-project' 
						placeholder='Project Name'
						disabled={!editable}
					/>
					<input 
						type='text' 
						id='form-duration' 
						placeholder='Development Duration'
						disabled={!editable}
					/>
				</div>
				<ul className='features'>
					<li>
						<input 
							type='text' 
							id='feature1' 
							placeholder='Feature #1'
							disabled={!editable}
						/>
					</li>
					<li>
						<input 
							type='text' 
							id='feature2' 
							placeholder='Feature #2'
							disabled={!editable}
						/>
					</li>
					<li>
						<input 
							type='text' 
							id='feature3' 
							placeholder='Feature #3'
							disabled={!editable}
						/>
					</li>
					<li>
						<input 
							type='text' 
							id='feature4' 
							placeholder='Feature #4'
							disabled={!editable}
						/>
					</li>
				</ul>
			</form>
	)
}

export default Project;
