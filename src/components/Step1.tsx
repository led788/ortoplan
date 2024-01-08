import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Anamnesis from './Anamnesis';
import Face from './Face';
import Smile from './Smile';
import Tmj from './Tmj';
import AppBar from '@mui/material/AppBar';
import Other from './Other';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Step1() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary"
                        textColor="inherit">
                        <Tab label="ЖАЛОБЫ и АНАМНЕЗ" {...a11yProps(0)} />
                        <Tab label="ЛИЦЕВЫЕ ПРИЗНАКИ и РОСТ" {...a11yProps(1)} />
                        <Tab label="ЭСТЕТИКА УЛЫБКИ и ДИСПЛЕЯ" {...a11yProps(2)} />
                        <Tab label="ЦС, ВНЧС, ФУНКЦИЯ" {...a11yProps(3)} />
                        <Tab label="ДРУГОЕ" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Anamnesis />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Face />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Smile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Tmj />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Other />
            </CustomTabPanel>
        </Box>

    );
}