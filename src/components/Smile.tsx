import { TextField, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function Smile() {

    const [age, setAge] = React.useState('0');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState<number>(0);

    const handleChange2 = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    const marks = [
        {
            value: -1,
            label: '1',
        },
        {
            value: -2,
            label: '2',
        },
        {
            value: -3,
            label: '3',
        },
        {
            value: -4,
            label: '4',
        },
        {
            value: -5,
            label: '5',
        },
        {
            value: 0,
            label: 'Норма',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];

    function valuetext(value: number) {
        if (value < 0)
            return `протрузия ${value}`;
        else if (value > 0)
            return `ретрузия ${value}`;
        else return 'Норма'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            < Grid container spacing={2} >
                <Grid xs={5}>
                    Линия улыбки (обнажение зенитов, десны) справа</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальная по всей стороне</MenuItem>
                            <MenuItem value={2}>Десневая впереди, норм сбоку</MenuItem>
                            <MenuItem value={3}>Десневая сбоку, норм впереди</MenuItem>
                            <MenuItem value={4}>Десневая по всей стороне</MenuItem>
                            <MenuItem value={5}>Зубы видны мало впереди</MenuItem>
                            <MenuItem value={6}>Зубы видны мало по всей стороне</MenuItem>
                            <MenuItem value={7}>Неполная улыбка на фото?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Линия улыбки (обнажение зенитов, десны) слева</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальная по всей стороне</MenuItem>
                            <MenuItem value={2}>Десневая впереди, норм сбоку</MenuItem>
                            <MenuItem value={3}>Десневая сбоку, норм впереди</MenuItem>
                            <MenuItem value={4}>Десневая по всей стороне</MenuItem>
                            <MenuItem value={5}>Зубы видны мало впереди</MenuItem>
                            <MenuItem value={6}>Зубы видны мало по всей стороне</MenuItem>
                            <MenuItem value={7}>Неполная улыбка на фото?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Дисплей (экспозиция) верхних резцов справа (12-11)
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Возрастная норма</MenuItem>
                            <MenuItem value={2}>Недостаточный</MenuItem>
                            <MenuItem value={3}>Избыточный</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Дисплей (экспозиция) верхних резцов слева (21-22)
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Возрастная норма</MenuItem>
                            <MenuItem value={2}>Недостаточный</MenuItem>
                            <MenuItem value={3}>Избыточный</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Дисплей нижних резцов
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальный</MenuItem>
                            <MenuItem value={2}>Избыточный</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Наклон верхней средней линии
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Влево</MenuItem>
                            <MenuItem value={3}>Вправо</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Требуется реставрация передних зубов по эстетике
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Да</MenuItem>
                            <MenuItem value={3}>Готовность к хирургии</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Требуется реставрация передних зубов по эстетике
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel control={<Switch />} label="Да" />
                </Grid>
                <Grid xs={5}>
                    Наклон ОП во фронтальной плоскости
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Влево (слева ниже)</MenuItem>
                            <MenuItem value={3}>Вправо (справа ниже)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Длина клинических коронок верхних передних, скорее
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальная</MenuItem>
                            <MenuItem value={2}>Снижена за счет десны</MenuItem>
                            <MenuItem value={3}>Снижена за счет режущего края</MenuItem>
                            <MenuItem value={3}>Увеличена</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Верхние резцы при улыбке в профиль
                </Grid>
                <Grid xs={5}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid xs={1}>
                            Ретрузия
                        </Grid>

                        <Grid xs={6}>
                            <Tooltip title="Если резцы имеют разный наклон, например класс II/2, то отсчет делать от положения резцов на той траектории, по которой посчитан дефицит места. Или мысленно выровнять резцы и предположить их наклон общий после этого, от которого уже и считать нужное изменение. При втором методе дефицит места в области резцов тогда считать нулевым при отсутствии ротаций
">
                                <Box sx={{ width: 400 }}>
                                    <Slider
                                        // value={value}
                                        aria-labelledby="non-linear-slider"
                                        // getAriaValueText={valueLabelFormat}
                                        // valueLabelFormat={valueLabelFormat}
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="on"
                                        size="small"
                                        onChange={handleChange2}

                                        step={1}
                                        marks={marks}
                                        min={-5}
                                        max={5}
                                    />
                                </Box>
                            </Tooltip>
                        </Grid>
                        <Grid xs={1}>
                            Протрузия
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={5}>
                    Индекс Болтона для передних зубов
                </Grid>
                <Grid xs={5}>
                    <Tooltip title="Число в диапазоне от 0 до 2, точность - 3 знака после запятой">
                        <TextField id="outlined-basic" variant="outlined" value={0.000} />
                    </Tooltip>
                </Grid>



            </Grid >
        </Box>
    )

}