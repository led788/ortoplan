import {Button, Chip, Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import DentalMapToggleButtons from "./DentalMapToggleButtons.tsx";
import React from "react";


interface IToothListModalProps {
    value: Array<number>
    field: string
    setVal: (newValue: Array<number>, fieldName: string) => void;
}

export default function ToothListModal({value, field, setVal}: IToothListModalProps) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const btnCancelHandler = () => {
    //     setOpen(false);
    // }

    function btnSaveHandler() {
        // console.log('newValue:', value)
        setOpen(false);
    }

    return (
        <>
                {value.length === 0 ?
                    <Button variant="outlined" onClick={handleClickOpen}>Добавить</Button> : value.map((toothNum) => (
                        <Chip label={toothNum} key={toothNum} variant="outlined"  onClick={handleClickOpen} sx={{mr: 0.5}}/>
                    ))
                }
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

                <DialogTitle>Зубная формула</DialogTitle>
                <DialogContent>
                    <DentalMapToggleButtons
                        value={value}
                        field={field}
                        setVal={setVal}

                    />
                    <Stack spacing={2} direction="row" alignItems='right' sx={{mt: 5}}>
                        <Button
                            variant="contained"
                            onClick={btnSaveHandler}
                        >Закрыть</Button>
                        {/*<Button*/}
                        {/*    variant="outlined"*/}
                        {/*    onClick={btnCancelHandler}*/}
                        {/*>Cancel</Button>*/}
                    </Stack>
                </DialogContent>

            </Dialog>

        </>
    );
}
