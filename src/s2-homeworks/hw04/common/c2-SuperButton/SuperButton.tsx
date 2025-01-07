import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
//
// type xTypeType = 'red' | 'secondary' | 'red'

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let finalClassName

    switch (xType) {
        case 'red' :
            finalClassName = s.button + ' ' + s.red
            break
        case 'disabled' :
            finalClassName = s.button + ' ' + s.disabled
            break
        case 'secondary' :
            finalClassName =s.button + ' ' + s.secondary
            break
        default:
            finalClassName = s.button + ' ' + s.default
            break
    }
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
