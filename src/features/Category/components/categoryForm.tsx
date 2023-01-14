import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Checkbox, FormControlLabel, MenuItem, Tab } from '@mui/material';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { convertToSlug } from '../../../utils/string';
import { CategoryModel } from 'src/models/categoryModel';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
}).required();

interface IAdminCategoryForm {
    category: CategoryModel,
    categories: CategoryModel[],
    onSubmit: any
}

const AdminCategoryForm: React.FC<IAdminCategoryForm> = (props) => {
    const { category, categories, onSubmit } = props;
    const [slug, setSlug] = useState(category.slug);
    const [tab, setTab] = useState('1');

    const { register, handleSubmit, formState: { errors } } = useForm<CategoryModel>({
        resolver: yupResolver(schema)
    });

    const handleChangeName = (data: any) => {
        const nameConverted = convertToSlug(data.target.value);
        setSlug(nameConverted);
    }

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register('id')} value={category.id} />

            <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeTab}>
                        <Tab label="General Information" value="1" />
                        <Tab label="SEO" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField label="Name" fullWidth variant="standard" {...register('name')} defaultValue={category.name} error={!!errors.name} helperText={errors?.name?.message} onChange={handleChangeName} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Slug" fullWidth variant="standard" disabled value={slug} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Description" fullWidth variant="standard" {...register('description')} defaultValue={category.description} multiline rows={3} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Parent Category" select fullWidth variant="standard" {...register('parentId')} defaultValue={category.parentId}>
                                {categories?.map((parentCate) => (
                                    <MenuItem key={parentCate.id} value={parentCate.id}>{parentCate.displayName}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Display Order" fullWidth variant="standard" {...register('displayOrder')} defaultValue={category.displayOrder} type="number" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel control={<Checkbox defaultChecked={category.isPublished} {...register('isPublished')} />} label="Is Published" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel control={<Checkbox defaultChecked={category.includeInMenu} {...register('includeInMenu')} />} label="Include in Menu" />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value="2">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField label="Meta Title" fullWidth variant="standard" {...register('metaTitle')} defaultValue={category.metaTitle} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Meta Keywords" fullWidth variant="standard" {...register('metaKeywords')} defaultValue={category.metaKeywords} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Meta Description" fullWidth variant="standard" {...register('metaDescription')} defaultValue={category.metaDescription} />
                        </Grid>
                    </Grid>
                </TabPanel>
            </TabContext>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<SaveIcon />} type="submit">Save</Button>
                    <Button variant="contained" startIcon={<CloseIcon />} onClick={() => Router.push('/category')}>Cancel</Button>
                </Stack>
            </Box>
        </form>
    )
}

export default AdminCategoryForm;
