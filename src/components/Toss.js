import React from 'react';
import Heads from './images/heads.jpg';
import Tails from './images/tails.jpg';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const gridStyle ={
	textAlign: 'center',
	padding: '40px'
}


class Toss extends React.Component{

	render(){
		return(
			<Grid container >
				<Grid item xs style={gridStyle}>
					{ this.props.heads && <img src={Heads} height="200" alt="Heads" />}
					{ this.props.tails && <img src={Tails} height="200" alt="Tails" />}
				</Grid>
			</Grid>
			);
	}
}

export default Toss;