import { Snackbar, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { forwardRef, useEffect, useState } from "react";
import { ToastModel } from "src/models/configModel";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastContent: React.FC<ToastModel> = (props) => {
    const { message = "", type = "success", isOpen } = props;
    const [open, setOpen] = useState(isOpen);
    
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>{message}</Alert>
            </Snackbar>
        </Stack>
    );
}

export default ToastContent;