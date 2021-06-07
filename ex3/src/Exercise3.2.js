import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Ap() {
    const [startTime, setStartTime] = React.useState([new Date()]);
    const [selected, setSelected] = React.useState(-1);


    const select = (event, index) => {
        setSelected(index)
    }

	const useStyles = makeStyles(theme => ({
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 150,
		},
	}));
    
	const dtf = new Intl.DateTimeFormat("en-GB", {year: 'numeric', month: 'numeric', day: 'numeric'}) 

	 const classes = useStyles();
	const handleDateChange = (event, index) => {
		let startTimeupdate = startTime.slice(0, index).concat([new Date(event.target.value)]).concat(startTime.slice(index+1));	
        setStartTime(startTimeupdate);
	}
	
  

    const add = (event) => {
        setStartTime(startTime.concat([new Date()]));
    }

    
    
    const remove = (event) => {
		setStartTime(startTime.slice(0, selected).concat(startTime.slice(selected+1)));
		setSelected(-1);
	}
	return (
        <Paper style={{ width: 500, margin: 50, marginTop: 50, padding: 50, textAlign: 'center', }}>
            <Grid container justify="space-around">
                Use the ADD button to select the date and you can change the date manually, then click any line to remove
                <Table>
                    <TableHead >
                        <TableRow >
                            <TableCell>Select the Date</TableCell>
                          <TableCell>Date Selected</TableCell>
                        </TableRow>
                    </TableHead>

                    {startTime.map((startTime, index) =>
                        
                    <TableBody  key={index}
                            selected={index === selected}
                        onClick={(event)=>{select(event,index)}}>
                        
                        <TableRow >
                                
                            <TableCell >
                                <TextField
                                    type="date"
                                    onChange={(event) => { handleDateChange(event, index) }}
                                    defaultValue={startTime.toISOString().substring(0, 10)}
                                        InputLabelProps={{ shrink: true }}
                                         className={classes.textField}
                                />
                            </TableCell>
                            <TableCell key={index} component="th" scope="row">
                                    {dtf.format(startTime)} 
                                </TableCell>

                            </TableRow>
                        
                    
                        </TableBody>
                        )}
                </Table>
                
            </Grid>
            <hr />
            <Grid container justify="space-around">
           <Button color="secondary" variant="contained" onClick={remove} disabled={selected<0}>Remove</Button>
            <Button color="primary" variant="contained" id={"addButton"} onClick={add}>Add</Button>
            </Grid>
             
        </Paper>
    );
}

export default Ap;
