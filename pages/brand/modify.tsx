import { Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import brandApi from '../../src/api/brandApi';
import AdminBrandForm from '../../src/features/Brand/components/brandForm';
import { BrandModel } from '../../src/models/brandModel';

export default function AdminBrandModify() {
    const router = useRouter();
    const { query: { id } } = router;
    const isAddMode = !id;
    const initialBrand: BrandModel = {
        id: "",
        name: "",
        slug: "",
        isPublished: false
    };
    const [brand, setBrand] = useState<BrandModel>(initialBrand);

    useEffect(() => {
        if (!isAddMode) {
            async () => {
                const response = await brandApi.get(id?.toString());
                setBrand(response);
            }
        }
    }, []);

    const handleSubmit = async (data: BrandModel) => {
        const response = await brandApi.post(data);
    }

    return (
        <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }}>Create Brand</Typography>
            <AdminBrandForm brand={brand} isAddMode={isAddMode} onSubmit={handleSubmit} />
        </Paper>
    )
}
