import React from 'react'
import {Slider, SliderProps, styled} from '@mui/material'
const PrettoSlider = styled(Slider)({
    alignItems: 'center', width: '150px', color: 'green',
    '& .MuiSlider-thumb::after': {
        height: 19.5,
        width: 19.5,
    },
});

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <PrettoSlider
            sx={{ alignItems: 'center', width: '150px', color: 'green' }}
            size="medium"
            defaultValue={[0, 100]}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
