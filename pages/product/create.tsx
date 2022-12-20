import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Container, Paper } from '@mui/material';
import Router from 'next/router';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';


export default function AdminProductCreate() {
    const [value, setValue] = useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }}>Create Product</Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="General Information" value="1" />
                        <Tab label="Products" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" startIcon={<SaveIcon />}>Save</Button>
                            <Button variant="contained" startIcon={<CloseIcon />} onClick={() => Router.push('/product')}>Cancel</Button>
                        </Stack>
                    </Box>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </TabContext>


        </Paper>
    )
}
