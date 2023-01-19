import { Paper, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import brandApi from '../../src/api/brandApi';
import AdminBrandForm from '../../src/features/Brand/components/brandForm';
import { BrandModel } from '../../src/models/brandModel';
import { updateToast } from '../../src/app/systemSlice';
import { ToastModel } from 'src/models/configModel';
import { messageCreated, messageUpdated } from 'src/utils/message';

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
    const dispatch = useDispatch();
    const defaultToast: ToastModel = {
        isOpen: false,
        message: "",
        type: "success"
      };

    useEffect(() => {
        if (!isAddMode) {
            setIsLoadingData(true);
            const getBrand = async () => {
                const response = await brandApi.get(id?.toString());
                setBrand(response);
                setIsLoadingData(false);
            }

            getBrand();
        }
    }, [isAddMode]);

    const handleSubmit = async (data: BrandModel) => {
        defaultToast.isOpen = false;
        dispatch(updateToast(defaultToast));

        if (isAddMode) {
            await brandApi.post(data);

            defaultToast.isOpen = true;
            defaultToast.message = messageCreated("brand");
            dispatch(updateToast(defaultToast));
        }
        else {
            await brandApi.put(data.id, data);

            defaultToast.isOpen = true;
            defaultToast.message = messageUpdated("brand");
            dispatch(updateToast(defaultToast));
        }
        router.push('/brand');
    }

    return (
        <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
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
