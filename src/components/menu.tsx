import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Router from 'next/router';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IMenuItems {
    selectedIndex: string,
    toggleDrawer: any
}

const MenuItems: React.FC<IMenuItems> = (props) => {
    const { selectedIndex, toggleDrawer } = props;

    return (
        <>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <React.Fragment>
                    <ListItemButton onClick={() => Router.push('/')} selected={selectedIndex == 'dashboard'}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <ListItemButton onClick={() => Router.push('/brand')} selected={selectedIndex == 'brand'}>
                        <ListItemIcon>
                            <DriveFileRenameOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Brand" />
                    </ListItemButton>

                    <ListItemButton onClick={() => Router.push('/category')} selected={selectedIndex == 'category'}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                    </ListItemButton>

                    <ListItemButton onClick={() => Router.push('/product')} selected={selectedIndex == 'product'}>
                        <ListItemIcon>
                            <CrisisAlertIcon />
                        </ListItemIcon>
                        <ListItemText primary="Product" />
                    </ListItemButton>

                    {/* <ListItemButton selected={selectedIndex == 'reports'}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton> */}

                    {/* <Divider sx={{ my: 1 }} />

                    <ListSubheader component="div" inset>
                        Saved reports
                    </ListSubheader>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Current month" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Last quarter" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Year-end sale" />
                    </ListItemButton> */}
                </React.Fragment>
            </List>
        </>
    )
};

export default MenuItems;