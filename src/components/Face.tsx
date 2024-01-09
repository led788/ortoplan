import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {setField} from "../store/faceSlice.ts";
import {StateFields} from "../store/faceSlice.ts";

export default function Face() {

    const dispatch = useAppDispatch()
    const faceState = useAppSelector(s => s.face)

    const handleUpdateSelectField = (event: SelectChangeEvent<number>) => {
        const {name , value} = event.target;
        dispatch(setField({field: name as StateFields, value: Number(value)}));
    };

    const styles = {
        background: '#fff2cc',
    }

    return (

        <Box sx={{flexGrow: 1}}>
            < Grid container spacing={2}>
                <Grid xs={5}>
                    Эстетически значимая асимметрия лица</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='faceasymm'
                            value={faceState.faceasymm}
                            onChange={handleUpdateSelectField}
                            sx={faceState.faceasymm ? {} : styles}

                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Есть, не волнует пациента</MenuItem>
                            <MenuItem value={3}>Есть, волнует пациента</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Губы хочется скорее переместить
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='lips'
                            value={faceState.lips}
                            onChange={handleUpdateSelectField}
                            sx={faceState.lips ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Губы скорее сохранить</MenuItem>
                            <MenuItem value={2}>Губы хочется назад</MenuItem>
                            <MenuItem value={3}>Губы хочется вперед</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Подбородок (НЧ) хочется скорее
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='chin'
                            value={faceState.chin}
                            onChange={handleUpdateSelectField}
                            sx={faceState.chin ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Оставить как есть</MenuItem>
                            <MenuItem value={2}>Переместить назад</MenuItem>
                            <MenuItem value={3}>Переместить вперед </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Тип роста по ТРГ (SN-MP, FMA и др.), лицу (высота)
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='vertical'
                            value={faceState.vertical}
                            onChange={handleUpdateSelectField}
                            sx={faceState.vertical ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Скорее нейтральный</MenuItem>
                            <MenuItem value={2}>Скорее вертикальный</MenuItem>
                            <MenuItem value={3}>Скорее горизонтальный</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Стадия роста по шейным позвонкам, если растет
                </Grid>

                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='growth'
                            value={faceState.growth}
                            onChange={handleUpdateSelectField}
                            sx={faceState.growth ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>CVM 1-2</MenuItem>
                            <MenuItem value={2}>CVM 3</MenuItem>
                            <MenuItem value={3}>CVM 4</MenuItem>
                            <MenuItem value={4}>CVM 5 и выше</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )

}