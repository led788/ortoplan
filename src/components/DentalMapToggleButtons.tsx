import {Stack, styled, ToggleButtonGroup} from "@mui/material";
import React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";

const StyledToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "#ffd7d7",
        backgroundColor: '#1A76D2'
    }
});

interface IToothListModalProps {
    value: Array<number>
    field:string
    setVal: (newValue: Array<number>, fieldName:string) => void;
}

export default function DentalMapToggleButtons({value, field, setVal}: IToothListModalProps) {
    // const [tooth, setTooth] = React.useState<Array<number> | null>();

    const handleToggle = (
        _event: React.MouseEvent<HTMLElement>,
        newTooth: Array<number>,
    ) => {
        // setTooth(newTooth);
        setVal(newTooth, field)
    };
    return (
        <Stack spacing={2}>
            <Stack spacing={2} direction='row'>
                <ToggleButtonGroup
                    value={value}
                    onChange={handleToggle}
                    aria-label=""
                    color='error'
                    size='small'
                    className='mapGroup'

                >
                    <StyledToggleButton value="18">
                        18
                    </StyledToggleButton>

                    <StyledToggleButton value="17">
                        17
                    </StyledToggleButton>
                    <StyledToggleButton value="16">
                        16
                    </StyledToggleButton>
                    <StyledToggleButton value="15">
                        15
                    </StyledToggleButton>

                    <StyledToggleButton value="14">
                        14
                    </StyledToggleButton>

                    <StyledToggleButton value="13">
                        13
                    </StyledToggleButton>

                    <StyledToggleButton value="12">
                        12
                    </StyledToggleButton>
                    <StyledToggleButton value="11">
                        11
                    </StyledToggleButton>

                </ToggleButtonGroup>
                {/*<Divider orientation="vertical" sx={{mx: 1.0, my: 1}}/>*/}
                <ToggleButtonGroup
                    value={value}
                    onChange={handleToggle}
                    aria-label=""
                    color='error'
                    size='small'
                    className='mapGroup'>

                    <StyledToggleButton value="21">
                        21
                    </StyledToggleButton>
                    <StyledToggleButton value="22">
                        22
                    </StyledToggleButton>
                    <StyledToggleButton value="23">
                        23
                    </StyledToggleButton>
                    <StyledToggleButton value="24">
                        24
                    </StyledToggleButton>

                    <StyledToggleButton value="25">
                        25
                    </StyledToggleButton>

                    <StyledToggleButton value="26">
                        26
                    </StyledToggleButton>

                    <StyledToggleButton value="27">
                        27
                    </StyledToggleButton>
                    <StyledToggleButton value="28">
                        28
                    </StyledToggleButton>
                </ToggleButtonGroup>

            </Stack>

            {/*bottom jaw*/}
            <Stack spacing={2} direction='row'>
                <ToggleButtonGroup
                    value={value}
                    onChange={handleToggle}
                    aria-label=""
                    color='error'
                    size='small'

                >
                    <StyledToggleButton value="48">
                        48
                    </StyledToggleButton>
                    <StyledToggleButton value="47">
                        47
                    </StyledToggleButton>
                    <StyledToggleButton value="46">
                        46
                    </StyledToggleButton>
                    <StyledToggleButton value="45">
                        45
                    </StyledToggleButton>

                    <StyledToggleButton value="44">
                        44
                    </StyledToggleButton>

                    <StyledToggleButton value="43">
                        43
                    </StyledToggleButton>

                    <StyledToggleButton value="42">
                        42
                    </StyledToggleButton>
                    <StyledToggleButton value="41">
                        41
                    </StyledToggleButton>
                </ToggleButtonGroup>
                {/*<Divider orientation="vertical" sx={{mx: 1, my: 0.5}}/>*/}
                <ToggleButtonGroup
                    value={value}
                    onChange={handleToggle}
                    aria-label=""
                    color='error'
                    size='small'
                    className='mapGroup'>

                    <StyledToggleButton value="31">
                        31
                    </StyledToggleButton>
                    <StyledToggleButton value="32">
                        32
                    </StyledToggleButton>
                    <StyledToggleButton value="33">
                        33
                    </StyledToggleButton>
                    <StyledToggleButton value="34">
                        34
                    </StyledToggleButton>

                    <StyledToggleButton value="35">
                        35
                    </StyledToggleButton>

                    <StyledToggleButton value="36">
                        36
                    </StyledToggleButton>

                    <StyledToggleButton value="37">
                        37
                    </StyledToggleButton>
                    <StyledToggleButton value="38">
                        38
                    </StyledToggleButton>
                </ToggleButtonGroup>

            </Stack>
        </Stack>
    )
}


