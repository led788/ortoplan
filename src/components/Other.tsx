import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function Other() {

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

    function valuetext(value: number) {
        return `${value} мм`;
      }    

    return (
        <Box sx={{ flexGrow: 1 }}>
            < Grid container spacing={2} >
                <Grid xs={5}>
                Глубина резцового перекрытия</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальная</MenuItem>
                            <MenuItem value={2}>Больше оптимальной</MenuItem>
                            <MenuItem value={3}>Меньше оптимальной</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                Шпее низ</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Плоская</MenuItem>
                            <MenuItem value={2}>Глубокая (резцы выше боковых)</MenuItem>
                            <MenuItem value={3}>Обратная (резцы ниже боковых)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                Положение верхних 7 относительно 6 по вертикали
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет перепада более 1 мм нигде</MenuItem>
                            <MenuItem value={2}>Правый 7 выше 6 более чем на 1 мм</MenuItem>
                            <MenuItem value={3}>Левый 7 выше 6 более чем на 1 мм</MenuItem>
                            <MenuItem value={4}>Оба 7 выше 6 более чем на 1 мм</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                Перекрестное соотношение справа
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Перекреста справа нет</MenuItem>
                            <MenuItem value={2}>Справа низ шире верха</MenuItem>
                            <MenuItem value={3}>Справа верх шире низа</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                Перекрестное соотношение слева
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Перекреста слева нет</MenuItem>
                            <MenuItem value={2}>Слева низ шире верха</MenuItem>
                            <MenuItem value={3}>Слева верх шире низа</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid xs={5}>
                ВЧ пазухи на КТ или панорамном снимке
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нормальные с обеих сторон</MenuItem>
                            <MenuItem value={2}>Есть вопросы к правой пазухе</MenuItem>
                            <MenuItem value={3}>Есть вопросы к левой пазухе</MenuItem>
                            <MenuItem value={4}>Есть вопросы к обеим пазухам</MenuItem>
                            <MenuItem value={5}>Не видно пазух на снимке</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>                
                <Grid xs={5}>
                Биотип десны в переднем нижнем отделе
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Биотип средний</MenuItem>
                            <MenuItem value={2}>Биотип тонкий</MenuItem>
                            <MenuItem value={3}>Биотип толстый</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>                
                <Grid xs={5}>
                Требуется реставрац. боковых зубов по анатомии
                </Grid>
                <Grid xs={5}>
                <FormControlLabel control={<Switch />} label="Да" />
                </Grid>                
            </Grid >
        </Box>
    )

}