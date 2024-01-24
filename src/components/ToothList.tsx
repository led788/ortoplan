import {Button, Chip, Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import DentalMapToggleButtons from "./DentalMapToggleButtons.tsx";
import React from "react";
import Box from "@mui/material/Box";
import {AlignHorizontalCenter} from "@mui/icons-material";

// export function ToothList() {
//
//     function handleClick() {
//
//     }
//
//     return (
//         <>
//             <Chip label="12" onClick={handleClick} sx={{mr: 2}}/>
//             <Chip label="14" onClick={handleClick}/>
//         </>
//     )
// }

export default function ToothList() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const btnCancelHandler = () => {
        setOpen(false);
    }

    return (
        <>
            <Chip label="12" onClick={handleClickOpen} sx={{mr: 2}}/>
            <Chip label="14" onClick={handleClickOpen}/>


            <Dialog
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                }}
                onClose={handleClose}
                open={open}
            >

                <DialogTitle>Dental map</DialogTitle>
                <DialogContent>
                    <DentalMapToggleButtons/>
                    <Stack spacing={2} direction="row" alignItems='right' sx={{mt: 5}}>
                        <Button
                            variant="contained"
                            onClick={btnCancelHandler}
                        >Save</Button>
                        <Button
                            variant="outlined"
                            onClick={btnCancelHandler}
                        >Cancel</Button>
                    </Stack>
                </DialogContent>

            </Dialog>
        </>
    )
        ;
}
