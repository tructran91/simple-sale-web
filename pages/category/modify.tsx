import { Paper, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import categoryApi from 'src/api/categoryApi';
import AdminCategoryForm from 'src/features/Category/components/categoryForm';
import { CategoryModel } from 'src/models/categoryModel';

export default function AdminCategoryModify() {
    const router = useRouter();
    const { query: { id } } = router;
    const isAddMode = !id;
    const [category, setCategory] = useState<CategoryModel>({
        id: "",
        name: "",
        displayName: "",
        slug: "",
        metaTitle: "",
        metaKeywords: "",
        metaDescription: "",
        description: "",
        parentId: "",
        displayOrder: 0,
        includeInMenu: true,
        isPublished: false
    });
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(false);

    useEffect(() => {
        if (!isAddMode) {
            setIsLoadingData(true);
            const getCategory = async () => {
                const response = await categoryApi.get(id?.toString());
                setCategory(response);
                setIsLoadingData(false);
            }

            getCategory();
        }

        const getCategories = async () => {
            let response = await categoryApi.getAll();
            if (!isAddMode) {
                response = response.filter(t => t.id != id)
            }
            setCategories(response);
        }

        getCategories();
    }, [isAddMode]);

    const handleSubmit = async (data: CategoryModel) => {
        if (isAddMode) {
            await categoryApi.post(data);
        }
        else {
            await categoryApi.put(data.id, data);
        }
        router.push('/category')
    }

    return (
        <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }} color="primary">
                {isAddMode ? 'Create Category' : 'Update Category'}
            </Typography>
            {isLoadingData ?
                (<div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>) :
                <AdminCategoryForm category={category} categories={categories} onSubmit={handleSubmit} />}
        </Paper>
    )
}
