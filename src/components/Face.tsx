import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function Face() {

    const [age, setAge] = React.useState('0');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            < Grid container spacing={2} >
                <Grid xs={5}>
                    Эстетически значимая асимметрия лица</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
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
                            value={age}
                            onChange={handleChange}
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
                            value={age}
                            onChange={handleChange}
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
                            value={age}
                            onChange={handleChange}
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
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>CVM 1-2</MenuItem>
                            <MenuItem value={2}>CVM 3</MenuItem>
                            <MenuItem value={3}>CVM 4</MenuItem>
                            <MenuItem value={4}>CVM 5 и выше</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid >
        </Box>
    )

}