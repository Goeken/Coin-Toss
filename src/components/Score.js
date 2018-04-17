import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const itemStyle = {
	padding: '20px',
	textAlign: 'center',
}

const sectionPadding = {
	paddingBottom: '60px'
}

const typeColor = {
	color: '#EF5350'
}

class Score extends React.Component{
	render(){
		return(
			<Grid container  spacing={16} style={sectionPadding}>
				<Grid item xs ></Grid>
				
					<Grid item xs >
						<Paper style={itemStyle}>
						    <Typography variant="subheading" gutterBottom style={typeColor}>
	      					  Tossed <br />
								{this.props.tossed}
	    				    </Typography>

						 </Paper>
					</Grid>
					<Grid item xs  >
						<Paper style={itemStyle}>
							<Typography variant="subheading" gutterBottom gutterBottom style={typeColor}>
	      					  Heads <br />
								{this.props.headCount}
	    				    </Typography>
						
						 </Paper>
					</Grid>
					<Grid item xs  >
						<Paper style={itemStyle}>
							<Typography variant="subheading" gutterBottom gutterBottom style={typeColor}>
	      					  Tails <br />
								{this.props.tailCount}
	    				    </Typography>
						 </Paper>
					</Grid>
					
					<Grid item xs ></Grid>
				</Grid>


			);
	}
}

export default Score
			