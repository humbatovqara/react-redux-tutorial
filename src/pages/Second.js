import { Container, Grid, TextField, Button } from '@mui/material'
import React from 'react'

const Second = () => {
    return (
        <Container maxWidth="lg">
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Onsubmit")
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Surname" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Job" variant="outlined" fullWidth />
                    </Grid>
                    <Button type="submit">Login</Button>
                </Grid>
            </form>
        </Container >
    )
}

export default Second