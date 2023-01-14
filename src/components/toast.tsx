import { Snackbar, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { forwardRef, useEffect, useState } from "react";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface IToastContent {
    message: string,
    type?: string
}

const ToastContent: React.FC<IToastContent> = (props) => {
    const { message, type = "" } = props;
    const [open, setOpen] = useState(false);
    console.log('toats content');
    

    useEffect(() => {
        setOpen(true);
    }, [])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>{message}</Alert>
            </Snackbar>
        </Stack>
    );
}

export default ToastContent;