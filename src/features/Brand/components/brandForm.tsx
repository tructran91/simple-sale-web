import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Checkbox, Container, FormControlLabel, Paper } from '@mui/material';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { convertToSlug } from '../../../utils/string';
import { BrandModel } from '../../../models/brandModel';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
}).required();

interface IAdminBrandForm {
    brand: BrandModel,
    onSubmit: any
}

const AdminBrandForm: React.FC<IAdminBrandForm> = (props) => {
    const { brand, onSubmit } = props;
    const [slug, setSlug] = useState(brand.slug);

    const { register, handleSubmit, formState: { errors } } = useForm<BrandModel>({
        resolver: yupResolver(schema)
    });

    const handleChangeName = (data: any) => {
        const nameConverted = convertToSlug(data.target.value);
        setSlug(nameConverted);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register('id')} value={brand.id} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField label="Name" fullWidth variant="standard" {...register('name')} defaultValue={brand.name} error={!!errors.name} helperText={errors?.name?.message} onChange={handleChangeName} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Slug" fullWidth variant="standard" disabled value={slug} />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox defaultChecked={brand.isPublished} {...register('isPublished')} />} label="Is Published" />
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<SaveIcon />} type="submit">Save</Button>
                    <Button variant="contained" startIcon={<CloseIcon />} onClick={() => Router.push('/brand')}>Cancel</Button>
                </Stack>
            </Box>
        </form>
    )
}

export default AdminBrandForm;
