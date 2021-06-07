import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
        height: 300,
        margin: 10,
    },
});



function App () {
    const classes = useStyles();
    const [red, setRed]= React.useState("100")
    const [blue, setBlue] = React.useState("100")
    const [green, setGreen] = React.useState("100")
    
    let styles = {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }

    const handleRedChange = (event, color) => {
    setRed(color);
  };
    const handleBlueChange = (event, color) => {
    setBlue(color);
  };

    const handleGreenChange = (event, color) => {
    setGreen(color);
  };

  return (
   <Paper style={{background:"teal", width: 500, margin: 50, marginTop: 20, padding: 50, textAlign: 'center',}} display="flex" justifyContent="center"  bgcolor="background.paper">
          <Box style={{background:"blue",padding:10, margin:0}}>
                  <li>
                      Move all slider downward
                  </li>
                  <li>
                      In order to change color move the slider one after the other
                  </li>
          </Box>
          <Typography style={{background:"purple", marginTop: 20,}}id="vertical-slider" >
              Colors Bar
      </Typography>
          <div style={styles}>

          <div className={classes.root} container spacing={2} alignItems="center">
              <Slider 
                      orientation="vertical"
                      valueLabelDisplay="20"
                  value={red}
                  step={0.5}
                  min={0}
                  max={255}
                  onChange={handleRedChange}
                  aria-labelledby="vertical-slider"
              />
         <Slider
          orientation="vertical"
          valueLabelDisplay="20"
                  value={blue}
                  step={0.5}
                  min={0}
                  max={255}
                  onChange={handleBlueChange}
                  aria-labelledby="vertical-slider"
              />
        
              <Slider
          orientation="vertical"
          valueLabelDisplay="20"
                  value={green}
                  step={0.5}
                  min={0}
                  max={255}
                  onChange={handleGreenChange}
                  aria-labelledby="vertical-slider"
                  />      
    </div>
          </div>
   </Paper>
      
  );
}
export default App;