import React from 'react';
import '../styles/EduExpSec.css';

class EduExpSec extends React.Component {
	render() {
		return (
			<div className='component-container'>
				<div className='title'>EDUCATION</div>
				<div className='horizontal-rule'></div>
				<form>
					<div className='double-aligned'>
						<input 
							type='text' 
							name='education-institution' 
							id='form-institution' 
							placeholder='Institute of Education'
						/>
						<input type='text' 
							name='graduation-date' 
							id='form-date' 
							placeholder='Month & Year of graduation'
						/>
					</div>
					<div className='double-aligned'>
						<input type='text' name='study-title' id='form-study-title' placeholder='Title of study'/>
						<input 
							type='text' 
							name='institution-address' 
							id='form-address' 
							placeholder='Address of institution'
						/>
					</div>
					<ul className='education-details'>
						<li>CGPA: <input type='number' name='cgpa' id='form-cgpa' placeholder='1.00 - 10.00'/></li>
					</ul>
				</form>
			</div>
		);
	}
}

export default EduExpSec;
