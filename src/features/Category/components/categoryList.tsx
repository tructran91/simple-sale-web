import { Button, Checkbox, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import { CategoryModel } from 'src/models/categoryModel';

interface IAdminCategoryList {
    categories: CategoryModel[]
}

const AdminCategoryList: React.FC<IAdminCategoryList> = (props) => {
    const { categories } = props;

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Is Published</TableCell>
                    <TableCell>Include in Menu</TableCell>
                    <TableCell>Display Order</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories?.map(category => (
                    <TableRow key={category.id}>
                        <TableCell>{category.displayName}</TableCell>
                        <TableCell>
                            <Checkbox defaultChecked={category.isPublished} size="small" />
                        </TableCell>
                        <TableCell>
                            <Checkbox defaultChecked={category.includeInMenu} size="small" />
                        </TableCell>
                        <TableCell>{category.displayOrder}</TableCell>
                        <TableCell style={{ width: "120px" }}>
                            <Stack direction="row" spacing={2}>
                                <Link href={{ pathname: "/category/modify", query: { id: category.id } }}>
                                    <IconButton size='small' >
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                <IconButton color='error' size='small'>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AdminCategoryList;