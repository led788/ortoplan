import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {setField, StateFields} from "../store/tmjSlice.ts";
import Slider from "@mui/material/Slider";

export default function Tmj() {

    const dispatch = useAppDispatch()
    const tmjState = useAppSelector(s => s.tmj)

    const handleUpdateSelectField = (event: SelectChangeEvent<number>) => {
        const {name, value} = event.target;
        dispatch(setField({field: name as StateFields, value: Number(value)}));
    };

    const handleUpdateSliderField = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            dispatch(setField({field: 'open', value: Number(newValue)}));
        }
    };

    function valuetext(value: number) {
        return `${value} мм`;
    }

    const styles = {
        background: '#fff2cc',
    }

    return (
        <Box sx={{flexGrow: 1}}>
            < Grid container spacing={2}>

                <Grid xs={5}>
                    ВНЧС жалобы в анамнезе</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='tmjcomplaint'
                            value={tmjState.tmjcomplaint}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.tmjcomplaint ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет проблем</MenuItem>
                            <MenuItem value={2}>Щелчки</MenuItem>
                            <MenuItem value={3}>Боли</MenuItem>
                            <MenuItem value={4}>Ограничение открывания</MenuItem>
                            <MenuItem value={5}>Сочетание проблем</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Боли</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='pain'
                            value={tmjState.pain}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.pain ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Скорее мышечные первичные боли</MenuItem>
                            <MenuItem value={3}>Скорее мышечные отраженные боли</MenuItem>
                            <MenuItem value={4}>Скорее суставные боли</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Смещение центра при открывании, разговоре
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='mdbdev'
                            value={tmjState.mdbdev}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.mdbdev ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>НЧ смещается влево от ЦО </MenuItem>
                            <MenuItem value={3}>НЧ смещается вправо от ЦО </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Щелчки справа при открывании и закрывании
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='clicksr'
                            value={tmjState.clicksr}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.clicksr ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет щелчка справа</MenuItem>
                            <MenuItem value={2}>Реципрокный щелчок справа</MenuItem>
                            <MenuItem value={3}>Щелчок гипермобильности справа?</MenuItem>
                            <MenuItem value={3}>Одиночный щелчок справа</MenuItem>
                            <MenuItem value={3}>Иные звуки справа</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Щелчки слева при открывании и закрывании
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='clicksl'
                            value={tmjState.clicksl}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.clicksl ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет щелчка слева</MenuItem>
                            <MenuItem value={2}>Реципрокный щелчок слева</MenuItem>
                            <MenuItem value={3}>Щелчок гипермобильности слева?</MenuItem>
                            <MenuItem value={3}>Одиночный щелчок слева</MenuItem>
                            <MenuItem value={3}>Иные звуки слева</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Величина максимального открывания рта (мм)
                </Grid>
                <Grid xs={5}>
                    <Box sx={{width: 450}}>
                        <Slider
                            value={tmjState.open}
                            defaultValue={40}
                            getAriaValueText={valuetext}
                            onChange={handleUpdateSliderField}
                            size="small"
                            step={5}
                            min={0}
                            max={60}
                            valueLabelDisplay="on"
                            marks
                        />
                    </Box>
                </Grid>

                <Grid xs={5}>
                    По КТ ВНЧС в ЦО справа
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='condrct'
                            value={tmjState.condrct}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.condrct ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Мыщелок справа в норм. положении</MenuItem>
                            <MenuItem value={2}>Мыщелок справа в заднем положении</MenuItem>
                            <MenuItem value={3}>Мыщелок справа в переднем положении</MenuItem>
                            <MenuItem value={4}>Мыщелок справа в верхнем положении</MenuItem>
                            <MenuItem value={5}>Мыщелок справа в нижнем положении</MenuItem>
                            <MenuItem value={6}>Нет КТ сустава в ЦО</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    По КТ ВНЧС в ЦО слева
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='condlct'
                            value={tmjState.condlct}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.condlct ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Мыщелок слева в норм. положении</MenuItem>
                            <MenuItem value={2}>Мыщелок слева в заднем положении</MenuItem>
                            <MenuItem value={3}>Мыщелок слева в переднем положении</MenuItem>
                            <MenuItem value={4}>Мыщелок слева в верхнем положении</MenuItem>
                            <MenuItem value={5}>Мыщелок слева в нижнем положении</MenuItem>
                            <MenuItem value={6}>Нет КТ сустава в ЦО</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Признаки активной резорбции мыщелков на КТ
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name ='condresorpt'
                            value={tmjState.condresorpt}
                            onChange={handleUpdateSelectField}
                            sx={tmjState.condresorpt ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Активной резорбции мыщелков нет</MenuItem>
                            <MenuItem value={2}>Активная резорбция правого мыщелка</MenuItem>
                            <MenuItem value={3}>Активная резорбция левого мыщелка</MenuItem>
                            <MenuItem value={4}>Активная резорбция двух мыщелков</MenuItem>
                            <MenuItem value={5}>Нет КТ сустава</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )

}