import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, MenuItem, Typography } from '@mui/material';

const sortMenuItems = [
    {
        label: 'Newest-on-top',
        value: 'newest-on-top'
    },
    {
        label: 'Oldest-on-top',
        value: 'oldest-on-top'
    },
    {
        label: 'Price:high-to-low',
        value: 'high-to-low'
    },
    {
        label: 'Price:low-to-high',
        value: 'low-to-high'
    },
]

export default function MultilineTextFields() {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "40vh", gap: 5 }} direction="column">
                <Grid item width={700}>
                    <Typography fontSize={{ md: 18, sm: 16, xs: 14 }} fontWeight={500}>SORT_BY</Typography>
                    <TextField
                        name='sort'
                        varient='filled'
                        select
                        type='text'
                        //   value={formik.values.sort}
                        //   onChange={formik.handleChange}
                        fullwidth
                    >
                        {sortMenuItems?.map((opt) => <MenuItem value={opt.value}>{opt?.label}</MenuItem>)}
                    </TextField>
                </Grid>

                <Grid>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </Grid>


            </Grid>




        </>
    );
}
