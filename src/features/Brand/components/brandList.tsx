import { Button, Checkbox, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { BrandModel } from '../../../models/brandModel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

interface IAdminBrandList {
    brands: BrandModel[]
}

const AdminBrandList: React.FC<IAdminBrandList> = (props) => {
    const { brands } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Is Published</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {brands?.map(brand => (
                    <TableRow key={brand.id}>
                        <TableCell>{brand.name}</TableCell>
                        <TableCell>
                            <Checkbox defaultChecked={brand.isPublished} size="small" />
                        </TableCell>
                        <TableCell style={{ width: "120px" }}>
                            <Stack direction="row" spacing={2}>
                                <Link href={{ pathname: "/brand/modify", query: { id: brand.id } }}>
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

export default AdminBrandList;