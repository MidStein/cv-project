import React, { useState } from "react";
import Project from './Project';
import '../styles/PracExpSec.css';
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

const PracExpSec = () => {
	const [editable, setEditable] = useState(true);
	const changeState = () => {
		setEditable(!editable);
	}
	return (
		<div className='component-container'>
				<div className='title'>PROJECTS</div>
				<div className='horizontal-rule'></div>
				<Project editable={editable} />
				<Project editable={editable} />
				<Project editable={editable} />
				<Project editable={editable} />
				<button type='button' onClick={changeState}>
					{editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
				</button>
			</div>
	)
}

export default PracExpSec;
