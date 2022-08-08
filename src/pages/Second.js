import React, { useEffect } from 'react';

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
    TableBody
} from '@mui/material';

import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetEmp, asyncPostEmp } from '../redux/reducers/employeeReducer';


const Second = () => {
    const { employee } = useSelector((state) => state); // Return All Store - readonly
    const dispatch = useDispatch(); // Write data to store

    console.log(employee);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            job: ''
        }
    });

    const onSubmit = data => {
        console.log(data)
        dispatch(asyncPostEmp(data))
    }

    useEffect(() => {
        dispatch(asyncGetEmp())
    }, [])

    return (
        <Container maxWidth="lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
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
                    <Button type="submit">Login</Button>
                </Grid>
            </form>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Job description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employee.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.surname}</TableCell>
                                <TableCell>{row.job}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container >
    )
}

export default Second