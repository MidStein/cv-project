import React, { useState } from 'react';
import '../styles/GenInfoSec.css';
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

const GenInfoSec = () => {
	const [editable, setEditable] = useState(true);
	const changeState = () => {
		setEditable(!editable);
	}
	return (
		<div className='component-container'>
			<form>
				<input
					type='text'
					name='name'
					id='form-name'
					placeholder='Name'
					disabled={!editable}
				/>
				<ul className='contacts'>
					<li>
						<input 
								type='email' 
								name='email' 
								id='form-email' 
								placeholder='E-mail' 
								disabled={!editable}
							/>
						</li>
						<li>
							<input 
								type='tele' 
								name='phone-number' 
								id='form-phone-number' 
								placeholder='Phone Number' 
								disabled={!editable}
							/>
						</li>
						<li>
							<input type='text' 
								name='address' 
								id='form-address' 
								placeholder='Address' 
								disabled={!editable}
							/>
						</li>
				</ul>
				<button type='button' onClick={changeState}>
					{editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
				</button>
			</form>
		</div>
	)
}

export default GenInfoSec;
