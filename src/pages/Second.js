import React, { useEffect, useState } from 'react';

import {
    Container,
    Grid,
    TextField,
    Button,
    TableContainer,
    Table,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    tableCellClasses,
    TableBody,
    styled,
    ButtonGroup
} from '@mui/material';

import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, deleteEmployee, getSingleEmployee, loadEmployees, updateEmployee } from '../redux/actions/employeeAction';

// STYLED
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const Second = () => {
    const [changeRequest, setChangeRequest] = useState(true);
    const [id, setId] = useState("");
    const { employees, employee } = useSelector((state) => state.employee); // Return All Store - readonly
    const dispatch = useDispatch(); // Write data to store

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            job: ''
        }
    });

    const onSubmit = data => {
        if (changeRequest) {
            dispatch(addEmployee(data))
            setValue("name", "")
            setValue("surname", "")
            setValue("job", "")
        }
        else {
            dispatch(updateEmployee(data, id))
            setChangeRequest(!changeRequest)
            setValue("name", "")
            setValue("surname", "")
            setValue("job", "")
        }
    }

    useEffect(() => {
        dispatch(loadEmployees());
    }, []);

    useEffect(() => {
        setValue("name", employee.name)
        setValue("surname", employee.surname)
        setValue("job", employee.job)
    }, [employee])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure wanted to delete the employee ?")) {
            dispatch(deleteEmployee(id))
        }
    };

    const handleEdit = (id) => {
        console.log(id)
        setChangeRequest(false);
        setId(id);
        dispatch(getSingleEmployee(id));
    }

    return (
        <Container maxWidth="lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} marginBottom={2}>
                    <Grid item xs={4}>
                        <Controller name='name' control={control}
                            render={({ field }) => (
                                <TextField {...field} type="text" label="Name" variant="outlined" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller name='surname' control={control}
                            render={({ field }) => (
                                <TextField {...field} type="text" label="Surname" variant="outlined" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller name='job' control={control}
                            render={({ field }) => (
                                <TextField {...field} type="text" label="Job description" variant="outlined" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" type="submit">ADD EMPLOYEE</Button>
                    </Grid>
                </Grid>
            </form>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Name</StyledTableCell>
                            <StyledTableCell align='center'>Surname</StyledTableCell>
                            <StyledTableCell align='center'>Job description</StyledTableCell>
                            <StyledTableCell align='center'></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees && employees.map((emp) => (
                            <TableRow
                                key={emp.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    {emp.name}
                                </TableCell>
                                <TableCell align='center'>{emp.surname}</TableCell>
                                <TableCell align='center'>{emp.job}</TableCell>
                                <TableCell align='center' >
                                    <ButtonGroup variant="contained" aria-label="outlined button group">
                                        <Button color="error" onClick={() => handleDelete(emp.id)}>Delete</Button>
                                        <Button color="primary" onClick={() => handleEdit(emp.id)}>Edit</Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container >
    )
}

export default Second