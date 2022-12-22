import React from "react";
import '../styles/EduLevel.css'

const EduLevel = ({ scoreType, editable }) => {
	let scoreName;
	if (scoreType === 'CGPA') {
		scoreName = 'CGPA';
	} else {
		scoreName = 'Percentage (in %)'
	}
	return (
		<form className='edulevel-component'>
			<div className='double-aligned'>
				<input 
					type='text' 
					name='education-institution' 
					id='form-institution' 
					placeholder='Institute of Education'
					disabled={!editable}
				/>
				<input type='text' 
					name='graduation-date' 
					id='form-date' 
					placeholder='Month & Year of graduation'
					disabled={!editable}
				/>
			</div>
			<div className='double-aligned'>
				<input 
					type='text' 
					name='study-title' 
					id='form-study-title' 
					placeholder='Title of study'
					disabled={!editable}
				/>
				<input 
					type='text' 
					name='institution-address' 
					id='form-address' 
					placeholder='Address of institution'
					disabled={!editable}
				/>
			</div>
			<div className="education-details">
				&#9632; {scoreName}: <input 
					type='number' 
					name='score' 
					id='form-score' 
					step={0.1}
					disabled={!editable}
				/>
			</div>
		</form>
	)
}

export default EduLevel;
