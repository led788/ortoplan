import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import {setField, StateFields} from "../store/otherSlice.ts";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
// import DentalMapToggleButtons from "./DentalMapToggleButtons.tsx";
import ToothList from "./ToothList.tsx";

export default function Other() {

    const dispatch = useAppDispatch()
    const otherState = useAppSelector(s => s.other)

    const handleUpdateSelectField = (event: SelectChangeEvent<number>) => {
        const {name, value} = event.target;
        dispatch(setField({field: name as StateFields, value: Number(value)}));
    };

    const handleUpdateSwitchField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        dispatch(setField({field: name as StateFields, value: checked ? 1 : 0}));
    };

    const styles = {
        background: '#fff2cc',
    }

    return (
        <Box sx={{flexGrow: 1}}>
            < Grid container spacing={2}>
                <Grid xs={5}>
                    Глубина резцового перекрытия</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='overbite'
                            value={otherState.overbite}
                            onChange={handleUpdateSelectField}
                            sx={otherState.overbite ? {} : styles}
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
                            name='spee'
                            value={otherState.spee}
                            onChange={handleUpdateSelectField}
                            sx={otherState.spee ? {} : styles}
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
                            name='seventosix'
                            value={otherState.seventosix}
                            onChange={handleUpdateSelectField}
                            sx={otherState.seventosix ? {} : styles}
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
                            name='crossr'
                            value={otherState.crossr}
                            onChange={handleUpdateSelectField}
                            sx={otherState.crossr ? {} : styles}
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
                            name='crossl'
                            value={otherState.crossl}
                            onChange={handleUpdateSelectField}
                            sx={otherState.crossl ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Перекреста слева нет</MenuItem>
                            <MenuItem value={2}>Слева низ шире верха</MenuItem>
                            <MenuItem value={3}>Слева верх шире низа</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/*Intrusion*/}
                {/*Impact*/}
                {/*Supernum*/}
                {/*Root_Res*/}
                {/*Root_Res_Risk*/}
                {/*Rot-Rec*/}


                <Grid xs={5}>
                    Отдельные зубы, требующие интрузии
                </Grid>
                <Grid xs={5}>

                </Grid>

                <Grid xs={5}>
                    Ретенированные зубы кроме 8
                </Grid>
                <Grid xs={5}>

                </Grid>

                <Grid xs={5}>
                    Сверхкомплектные зубы
                </Grid>
                <Grid xs={5}>

                </Grid>


                <Grid xs={5}>
                    Зубы с резорбцией корней до лечения
                </Grid>
                <Grid xs={5}>

                </Grid>


                <Grid xs={5}>
                    Риск резорбции корней (коротк., тонкие, изогнут.)
                </Grid>
                <Grid xs={5}>

                </Grid>


                <Grid xs={5}>
                    Ротиров. зубы с дефиц. кости (риск рецессий)
                </Grid>
                <Grid xs={5}>

                </Grid>


                <Grid xs={5}>
                    Парафункция языка (дизокклюзии)
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel
                        name='tongue'
                        control={<Switch checked={otherState.tongue ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>

                <Grid xs={5}>
                    Признаки анкилоза (инфра, депульпированные)
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel
                        name='ankylos'
                        control={<Switch checked={otherState.ankylos ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>

                <Grid xs={5}>
                    ВЧ пазухи на КТ или панорамном снимке
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='sinus'
                            value={otherState.sinus}
                            onChange={handleUpdateSelectField}
                            sx={otherState.sinus ? {} : styles}
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
                            name='biotype'
                            value={otherState.biotype}
                            onChange={handleUpdateSelectField}
                            sx={otherState.biotype ? {} : styles}
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
                    <FormControlLabel
                        name='postrestor'
                        control={<Switch checked={otherState.postrestor ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>

                <Grid xs={5}>
                    Зубы, требующие эндодонтического лечения
                </Grid>
                <Grid xs={5}>
                    <ToothList/>

                    {/*<DentalMapToggleButtons />*/}
                </Grid>


            </Grid>
        </Box>
    )

}