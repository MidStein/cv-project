import React, { useState } from 'react';
import '../styles/EduExpSec.css';
import EduLevel from './EduLevel'
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

const EduExpSec = () => {
	const [editable, setEditable] = useState(true);
	const changeState = () => {
		setEditable(!editable);
	}
	return (
		<div className='component-container'>
			<div className='title'>EDUCATION</div>
			<div className='horizontal-rule'></div>
			<EduLevel scoreType={'cgpa'} editable={editable} />
			<EduLevel scoreType={'percentage'} editable={editable} />
			<button type='button' onClick={changeState}>
				{editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
			</button>
		</div>
	)
}

export default EduExpSec;
