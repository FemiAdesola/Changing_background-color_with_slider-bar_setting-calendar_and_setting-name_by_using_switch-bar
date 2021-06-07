import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function A() {
	const [method, setMethod] = React.useState([]);
	const [name, setName] = React.useState("");
    const [student, setStudent] = React.useState(false);
    const [studentID, setStudentID] = React.useState("");
	const [selected, setSelected] = React.useState(-1);
		
	const updateName = (event) => {
		setName(event.target.value);
    }
    const updateStudentID = (event) => {
		setStudentID(event.target.value);
	}
	const handleChange = (event, selected) => {
        setStudent(selected);
       
	}
    const add = (event) => {
        if (name !== "") {
            setMethod(method.concat([{ "name": name, "student": student, "studentID": studentID }]));
            if (studentID !== "") {
                setMethod(method.concat([{ "name": name, "student": student, "studentID": studentID }]));
            } else {
                alert("StudentID is required.")
            }
        } else {
            alert("Name is required.")
            
        }
        
    }

        
        
   
    
    
    const remove = (event) => {
		setMethod(method.slice(0, selected));
		setSelected(-1);
	}
	return (
        <Paper style={{backgroundColor: 'green', width: 500, margin: 50, marginTop: 20, padding: 50, textAlign: 'center',}} display="flex" justifyContent="center"  bgcolor="background.paper">
            <Box >
                <div className="App">
			<FormGroup >
				<TextField style={{padding:20}} id={"name"} value={name} onChange={updateName} label="Name: " placeholder="Type student name here" />
				<TextField style={{padding:20}} id={"name"} value={studentID} onChange={updateStudentID} label="StudentID: " placeholder="Type studentID name here" />
                        <FormControlLabel style={{ padding: 10, margin: 10, }}
					control={<Switch  checked={student} onChange={handleChange}     value="student" />}
					label="Student"
                    />
                    </FormGroup>
                    <Grid container justify="space-around" style={{padding:20}}>
			<Button color="primary" variant="contained" onClick={add}>Add</Button>
                        <Button color="secondary" variant="contained" onClick={remove}>Remove</Button>
			</Grid >
                        <TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell color="secondary">Name</TableCell>
                                    <TableCell>Student</TableCell>
                                    <TableCell>StudentID</TableCell>
						</TableRow>
					</TableHead>
					<TableBody >
                                {method.map((row, index) => (
                                    <TableRow key={row.name + "_" + index}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {row.student ? "Is a Student" : "Not a student"}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.studentID} </TableCell>
                                    </TableRow>
                                ))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
            </Box>
            
        </Paper>
	);
}

export default A;
