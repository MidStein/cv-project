import React from 'react';
import '../styles/EduExpSec.css';
import EduLevel from './EduLevel'
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

class EduExpSec extends React.Component {
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
				<div className='title'>EDUCATION</div>
				<div className='horizontal-rule'></div>
				<EduLevel scoreType={'cgpa'} editable={this.state.editable} />
				<EduLevel scoreType={'percentage'} editable={this.state.editable} />
				<button type='button' onClick={this.changeState}>
					{this.state.editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
				</button>
			</div>
		);
	}
}

export default EduExpSec;
