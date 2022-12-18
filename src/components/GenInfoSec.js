import React from 'react'
import '../styles/GenInfoSec.css';
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

class GenInfoSec extends React.Component {
	constructor() {
		super()
		this.state = {
			editable: 'true',
		}
	}

	changeState = () => {
		this.setState((state) => ({
				editable: !state.editable,				
		}))
	}
	
	render() {
		return (
			<div className='component-container'>
				<form>
					<input 
						type='text' 
						name='name' 
						id='form-name' 
						placeholder='Name' 
						disabled={!this.state.editable}
					/>
					<ul className='contacts'>
						<li>
							<input 
								type='email' 
								name='email' 
								id='form-email' 
								placeholder='E-mail' 
								disabled={!this.state.editable}
							/>
						</li>
						<li>
							<input 
								type='tele' 
								name='phone-number' 
								id='form-phone-number' 
								placeholder='Phone Number' 
								disabled={!this.state.editable}
							/>
						</li>
						<li>
							<input type='text' 
								name='address' 
								id='form-address' 
								placeholder='Address' 
								disabled={!this.state.editable}
							/>
						</li>
					</ul>
					<button type='button' onClick={this.changeState}>
						{this.state.editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
					</button>
				</form>
			</div>
		);
	}
}

export default GenInfoSec;
