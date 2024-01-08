import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setAllergy,
    setAstma,
    setBrux,
    setCompl,
    setExper, setFacecompl,
    setNsaid, setResp,
    setSource,
    setSport
} from "../store/anamnesisSlice.ts";

export default function Anamnesis() {

    const [age, setAge] = React.useState('0');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

 const dispatch = useDispatch();
 const anamnesisState = useSelector(state => state.anamnesis);



 const handleChangeSource = (event) => {
   dispatch(setSource(event.target.value));
 };

  const handleChangeExper = (event) => {
   dispatch(setExper(event.target.value));
 };

  const handleChangeCompl = (event) => {
   dispatch(setCompl(event.target.value));
 };

  const handleChangeAllergy = (event) => {
   dispatch(setAllergy(event.target.value));
 };

  const handleChangeNsaid = (event) => {
   dispatch(setNsaid(event.target.checked?1:0));
 };

  const handleChangeAstma = (event) => {
   dispatch(setAstma(event.target.checked?1:0));
 };

  const handleChangeSport = (event) => {
   dispatch(setSport(event.target.checked?1:0));
 };

  const handleChangeBrux = (event) => {
   dispatch(setBrux(event.target.value));
 };

  const handleChangeResp = (event) => {
   dispatch(setResp(event.target.value));
 };

  const handleChangeFacecompl = (event) => {
   dispatch(setFacecompl(event.target.value));
 };

 // Similar handlers for other fields...

    return (
        <Box sx={{ flexGrow: 1 }}>
            < Grid container spacing={2} >
                <Grid xs={5}>
                    От кого пациент узнал про клинику или кем направлен</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={anamnesisState.source}
                            onChange={handleChangeSource}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>От стоатолога внешнего</MenuItem>
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
                            value={anamnesisState.exper}
                            onChange={handleChangeExper}
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
                            value={anamnesisState.compl}
                            onChange={handleChangeCompl}
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
                            value={anamnesisState.allergy}
                            onChange={handleChangeAllergy}
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
                <FormControlLabel control={<Switch checked={anamnesisState.nsaid?true:false} onChange={handleChangeNsaid} />} label="Да" />
                </Grid>
                <Grid xs={5}>
                    Прием препаратов от бронхиальной астмы
                </Grid>
                <Grid xs={5}>
                <FormControlLabel control={<Switch checked={anamnesisState.astma?true:false} onChange={handleChangeAstma} />} label="Да" />
                </Grid>

                <Grid xs={5}>
                    Контактные виды спорта с риском травмы
                </Grid>
                <Grid xs={5}>
                <FormControlLabel control={<Switch checked={anamnesisState.sport?true:false} onChange={handleChangeSport} />} label="Да" />
                </Grid>
                <Grid xs={5}>
                    Бруксизм или (и) привычка сжимать зубы при стрессе
                </Grid>
                <Grid xs={5}>
                <FormControl fullWidth>
                        <Select
                            value={anamnesisState.brux}
                            onChange={handleChangeBrux}
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
                            value={anamnesisState.resp}
                            onChange={handleChangeResp}
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
                            value={anamnesisState.facecompl}
                            onChange={handleChangeFacecompl}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Да</MenuItem>
                            <MenuItem value={3}>Готовность к хирургии</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid >
        </Box>
    )

}