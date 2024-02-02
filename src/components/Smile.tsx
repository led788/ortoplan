import {TextField, Tooltip} from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Unstable_Grid2';
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {setField, setFieldBolton, StateFields} from "../store/smileSlice.ts";
import {NumericFormat} from 'react-number-format';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

export default function Smile() {

    const dispatch = useAppDispatch()
    const smileState = useAppSelector(s => s.smile)

    const handleUpdateSelectField = (event: SelectChangeEvent<number>) => {
        const {name, value} = event.target;
        dispatch(setField({field: name as StateFields, value: Number(value)}));
    };

    const handleUpdateSliderField = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            dispatch(setField({field: 'uincopt', value: Number(newValue)}));
        }
    };

    const styles = {
        background: '#fff2cc',
    }

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
        <Box sx={{flexGrow: 1}}>
            < Grid container spacing={2}>
                <Grid xs={5}>
                    Линия улыбки (обнажение зенитов, десны) справа</Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='smliner'
                            value={smileState.smliner}
                            onChange={handleUpdateSelectField}
                            sx={smileState.smliner ? {} : styles}
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
                            name='rmlinel'
                            value={smileState.rmlinel}
                            onChange={handleUpdateSelectField}
                            sx={smileState.rmlinel ? {} : styles}
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
                            name='displr'
                            value={smileState.displr}
                            onChange={handleUpdateSelectField}
                            sx={smileState.displr ? {} : styles}
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
                            name='displl'
                            value={smileState.displl}
                            onChange={handleUpdateSelectField}
                            sx={smileState.displl ? {} : styles}
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
                            name='lowdispl'
                            value={smileState.lowdispl}
                            onChange={handleUpdateSelectField}
                            sx={smileState.lowdispl ? {} : styles}
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
                            name='midlinetip'
                            value={smileState.midlinetip}
                            onChange={handleUpdateSelectField}
                            sx={smileState.midlinetip ? {} : styles}
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
                            name='frontrestor'
                            value={smileState.frontrestor}
                            onChange={handleUpdateSelectField}
                            sx={smileState.frontrestor ? {} : styles}
                        >
                            <MenuItem value={0}>Не заполнен</MenuItem>
                            <MenuItem value={1}>Нет</MenuItem>
                            <MenuItem value={2}>Да</MenuItem>
                            <MenuItem value={3}>Готовность к хирургии</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {/*<Grid xs={5}>*/}
                {/*    Требуется реставрация передних зубов по эстетике*/}
                {/*</Grid>*/}
                {/*<Grid xs={5}>*/}
                {/*    <FormControlLabel control={<Switch />} label="Да" />*/}
                {/*</Grid>*/}
                <Grid xs={5}>
                    Наклон ОП во фронтальной плоскости
                </Grid>
                <Grid xs={5}>
                    <FormControl fullWidth>
                        <Select
                            name='occlcant'
                            value={smileState.occlcant}
                            onChange={handleUpdateSelectField}
                            sx={smileState.occlcant ? {} : styles}
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
                            name='antcrownl'
                            value={smileState.antcrownl}
                            onChange={handleUpdateSelectField}
                            sx={smileState.antcrownl ? {} : styles}
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
                    Верхние резцы при улыбке в профиль требуют
                </Grid>
                <Grid xs={5}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid xs={1}>
                            Ретрузии
                        </Grid>

                        <Grid xs={6}>
                            <Tooltip title="Если резцы имеют разный наклон, например класс II/2, то отсчет делать от положения резцов на той траектории, по которой посчитан дефицит места. Или мысленно выровнять резцы и предположить их наклон общий после этого, от которого уже и считать нужное изменение. При втором методе дефицит места в области резцов тогда считать нулевым при отсутствии ротаций
">
                                <Box sx={{width: 400}}>
                                    <Slider
                                        name='uincopt'
                                        value={smileState.uincopt}
                                        aria-labelledby="non-linear-slider"
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="on"
                                        size="small"
                                        onChange={handleUpdateSliderField}
                                        step={1}
                                        marks={marks}
                                        min={-5}
                                        max={5}
                                    />
                                </Box>
                            </Tooltip>
                        </Grid>
                        <Grid xs={1}>
                            Протрузии
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={5}>
                    Индекс Болтона для передних зубов
                    <Tooltip
                        title="Число в диапазоне от 0 до 2, точность - 3 знака после запятой"><HelpCenterOutlinedIcon
                        fontSize={'medium'}/></Tooltip>
                </Grid>
                <Grid xs={5}>


                    {/*<Tooltip title="Число в диапазоне от 0 до 2, точность - 3 знака после запятой">*/}
                    {/*    <TextField*/}
                    {/*        id="outlined-basic"*/}
                    {/*        variant="outlined"*/}
                    {/*        name='bolton'*/}
                    {/*        // InputLabelProps={{shrink: true}}*/}
                    {/*        // type={'number'}*/}
                    {/*        value={smileState.bolton}*/}
                    {/*        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
                    {/*            const newValue = parseFloat(event.target.value);*/}
                    {/*            if (!isNaN(newValue)) dispatch(setFieldBolton({field: 'bolton', value: newValue}));*/}
                    {/*        }}*/}
                    {/*        error={smileState.bolton > 2 || smileState.bolton < 0}*/}

                    {/*    />*/}
                    {/*</Tooltip>*/}

                    <NumericFormat
                        value={smileState.bolton}
                        // customInput={TextField}
                        customInput={CustomTextField}
                        onValueChange={(values) => {
                            dispatch(setFieldBolton({field: 'bolton', value: values.floatValue || 0}));
                            console.log('bolton:', values.floatValue)
                        }}
                        allowNegative={false}
                        decimalScale={1}
                        decimalSeparator=","
                        isAllowed={(values) => {
                            const {floatValue} = values;

                            return typeof floatValue !== 'undefined' && floatValue < 2.1
                        }}
                    />
                </Grid>


            </Grid>
        </Box>
    )

}


const CustomTextField = (inputProps: any) => {
    return (
        <TextField
            {...inputProps}
            title='dsdd'
        />
    )
}