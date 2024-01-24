import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import {setField, StateFields} from "../store/anamnesisSlice.ts";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import React from "react";


export default function Anamnesis() {

    const dispatch = useAppDispatch()
    const anamnesisState = useAppSelector(s => s.anamnesis)

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
            <Grid container spacing={2}>
                <Grid xs={5}>
                    От кого пациент узнал про клинику или кем направлен
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='source'
                            value={anamnesisState.source}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.source ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>От стоматолога внешнего</MenuItem>
                            <MenuItem value={2}>От стоматолога нашего</MenuItem>
                            <MenuItem value={3}>От ортодонта внешнего</MenuItem>
                            <MenuItem value={4}>От другого пациента</MenuItem>
                            <MenuItem value={5}>Из интернета</MenuItem>
                            <MenuItem value={6}>Сочетание или не ясно</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Есть ли опыт консультаций уже по данному вопросу
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='exper'
                            value={anamnesisState.exper}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.exper ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет, первый раз</MenuItem>
                            <MenuItem value={2}>Да, консультирование ранее</MenuItem>
                            <MenuItem value={3}>Было много консультаций до этого</MenuItem>
                            <MenuItem value={4}>Несколько конс., врачи не беруться</MenuItem>
                            <MenuItem value={5}>Пациент не захотел рассказать</MenuItem>
                            <MenuItem value={6}>Было ранее полное лечение уже</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Основная жалоба и мотивация скорее
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='compl'
                            value={anamnesisState.compl}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.compl ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Эстетическая</MenuItem>
                            <MenuItem value={2}>Здоровье зубов</MenuItem>
                            <MenuItem value={3}>Нарушение функции </MenuItem>
                            <MenuItem value={4}>Эстетика и функция</MenuItem>
                            <MenuItem value={5}>Долечивание из другой клиники</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Аллергия на металлы в анамнезе
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='allergy'
                            value={anamnesisState.allergy}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.allergy ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Дали пробу</MenuItem>
                            <MenuItem value={3}>Надо дать пробу</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Регулярный прием НПВС, кортикостероидов
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel
                        name='nsaid'
                        control={<Switch checked={anamnesisState.nsaid ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>
                <Grid xs={5}>
                    Прием препаратов от бронхиальной астмы
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel
                        name='astma'
                        control={<Switch checked={anamnesisState.astma ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>

                <Grid xs={5}>
                    Контактные виды спорта с риском травмы
                </Grid>
                <Grid xs={5}>
                    <FormControlLabel
                        name='sport'
                        control={<Switch checked={anamnesisState.sport ? true : false}
                                         onChange={handleUpdateSwitchField}/>}
                        label="Да"/>
                </Grid>
                <Grid xs={5}>
                    Бруксизм или (и) привычка сжимать зубы при стрессе
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='brux'
                            value={anamnesisState.brux}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.brux ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Отмечались ранее</MenuItem>
                            <MenuItem value={3}>Есть на данный момент</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Значимые хронические нарушения носового дыхания
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='resp'
                            value={anamnesisState.resp}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.resp ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Отмечались ранее</MenuItem>
                            <MenuItem value={3}>Есть на данный момент</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={5}>
                    Значимое недовольство эстетикой лица
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='facecompl'
                            value={anamnesisState.facecompl}
                            onChange={handleUpdateSelectField}
                            sx={anamnesisState.facecompl ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Да</MenuItem>
                            <MenuItem value={3}>Готовность к хирургии</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )

}