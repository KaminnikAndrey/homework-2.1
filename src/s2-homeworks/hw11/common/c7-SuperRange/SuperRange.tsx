import React from 'react'
import {Slider, SliderProps, styled} from '@mui/material'
const PrettoSlider = styled(Slider)({
    color: '#00CC22',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
        },
    },
});

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <PrettoSlider style={{width: '150px'}}/>
    )
}

export default SuperRange
