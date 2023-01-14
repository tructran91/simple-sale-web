import { Paper, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import brandApi from '../../src/api/brandApi';
import AdminBrandForm from '../../src/features/Brand/components/brandForm';
import { BrandModel } from '../../src/models/brandModel';

export default function AdminBrandModify() {
    const router = useRouter();
    const { query: { id } } = router;
    const isAddMode = !id;
    const [brand, setBrand] = useState<BrandModel>({
        id: "",
        name: "",
        slug: "",
        isPublished: false
    });
    const [isLoadingData, setIsLoadingData] = useState(false);

    // useEffect(() => {
    //     if (!isAddMode) {
    //         setIsLoadingData(true);
    //         const getBrand = async () => {
    //             const response = await brandApi.get(id?.toString());
    //             setBrand(response);
    //             setIsLoadingData(false);
    //         }

    //         getBrand();
    //     }
    // }, [isAddMode]);

    const handleSubmit = async (data: BrandModel) => {
        // if (isAddMode) {
        //     await brandApi.post(data);
        // }
        // else {
        //     await brandApi.put(data.id, data);
        // }
        // router.push('/brand')
    }

    return (
        <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            {/* <ToastContent message='123' type='error' /> */}
            <Typography variant="h5" align="center" sx={{ mb: 2 }} color="primary">
                {isAddMode ? 'Create Brand' : 'Update Brand'}
            </Typography>
            {isLoadingData ?
                (<div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>) :
                <AdminBrandForm brand={brand} onSubmit={handleSubmit} />}
        </Paper>
    )
}
