import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
const gridStyle ={
	textAlign: 'center',
	padding: '40px'
}

class Begin extends React.Component{
	render(){
		return(
			<Grid container >
				<Grid item xs >
					<Paper style={gridStyle}>
					      <Button variant="raised" color="secondary" onClick={this.props.handleGameClick}>
       						 Flip Coin
     					  </Button>

					 </Paper>

				</Grid>
			</Grid>
			);
	}
}

export default Begin;


