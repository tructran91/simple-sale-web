import Typography from '@mui/material/Typography';
import Router from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import categoryApi from 'src/api/categoryApi';
import AdminCategoryList from 'src/features/Category/components/categoryList';
import { CategoryModel } from 'src/models/categoryModel';

export default function AdminCategoryIndex() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await categoryApi.getAll();
      setCategories(response);
    }

    getCategories();
  }, [])

  return (
    <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
      <Typography variant="h5" align="center" color="primary">Category List</Typography>
      <Button variant="contained" startIcon={<AddIcon />} onClick={() => Router.push('/category/modify')}>Add new category</Button>
      <AdminCategoryList categories={categories} />
    </Paper>
  )
}
