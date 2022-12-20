import Typography from '@mui/material/Typography';
import Router from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import AdminBrandList from '../../src/features/Brand/components/brandList';
import { useEffect, useState } from 'react';
import brandApi from '../../src/api/brandApi';
import { BrandModel } from '../../src/models/brandModel';

export default function AdminBrandIndex() {
  const [brands, setBrands] = useState<BrandModel[]>([]);

  useEffect(() => {
    async () => {
      const response = await brandApi.getAll();
      setBrands(response);
    }
  }, [])

  return (
    <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
      <Typography variant="h5" align="center" color="primary">Brands List</Typography>
      <Button variant="contained" startIcon={<AddIcon />} onClick={() => Router.push('/brand/modify')}>Add new brand</Button>
      <AdminBrandList brands={brands} />
    </Paper>
  )
}
