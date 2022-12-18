import React from "react";
import Project from './Project';
import '../styles/PracExpSec.css';
import saveIcon from '../icons/save.svg';
import editIcon from '../icons/edit.svg';

class PracExpSec extends React.Component {
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
				<div className='title'>PROJECTS</div>
				<div className='horizontal-rule'></div>
				<Project editable={this.state.editable} />
				<Project editable={this.state.editable} />
				<Project editable={this.state.editable} />
				<Project editable={this.state.editable} />
				<button type='button' onClick={this.changeState}>
					{this.state.editable ? <img src={saveIcon} alt='Save' /> : <img src={editIcon} alt='Edit' />}
				</button>
			</div>
		);
	}
}

export default PracExpSec;
