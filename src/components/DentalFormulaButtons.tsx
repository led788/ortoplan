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

export default function DentalFormulaButtons({value, field, setVal}: IToothListModalProps) {
    // const [tooth, setTooth] = React.useState<Array<number> | null>();

    const handleToggle = (
        _event: React.MouseEvent<HTMLElement>,
        newTooth: Array<number>,
    ) => {
        // setTooth(newTooth);
        setVal(newTooth, field)
    };
    return (
        <Stack spacing={2}  alignItems="center">
            <Stack spacing={5} direction='row'>
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

        </Stack>
    )
}


