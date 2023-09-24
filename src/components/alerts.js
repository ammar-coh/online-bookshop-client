import  React,{useContext}from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import Context from '../context'

export default function Alerts() {
    const {setAlertOpen, alertContent, setAlertContent} = useContext(Context);
    const [open, setOpen] = React.useState(true);
    useEffect(()=>{
            setOpen(true)
    },[])
    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                severity={alertContent.type}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                                setOpen(false)
                                setAlertContent({...alertContent, type:'',message:''})
                                setAlertOpen(false)
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    } sx={{ mb: 2 }} >
                   {alertContent.message}
                </Alert>
            </Collapse>
        </Box>
    );
}