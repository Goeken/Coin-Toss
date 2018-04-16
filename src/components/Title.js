import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const toolStyle = {
	
		alignSelf: 'center',
	
	
}
const typeColor = {
	color: '#EF5350'
}

export default props => 
	  <AppBar position="static" color="default" >
        <Toolbar style={toolStyle}>
          <Typography variant="title" style={typeColor}>
            Coin Toss
          </Typography>
        </Toolbar>
      </AppBar>