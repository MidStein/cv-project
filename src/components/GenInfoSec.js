import React from 'react'
import '../styles/GenInfoSec.css';

class GenInfoSec extends React.Component {
	render() {
		return (
			<form>
				<input type='text' name='name' id='form-name' placeholder='Name'/>
				<ul className='contacts'>
					<li><input type='email' name='email' id='form-email' placeholder='E-mail'/></li>
					<li><input type='tele' name='phone-number' id='form-phone-number' placeholder='Phone Number'/></li>
					<li><input type='text' name='address' id='form-address' placeholder='Address'/></li>
				</ul>
			</form>
		);
	}
}

export default GenInfoSec;
