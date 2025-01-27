import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import  {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, themeReducer} from './bll/themeReducer'
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from "redux"
import { thunk, ThunkDispatch } from "redux-thunk"

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер+
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const rootReducer = combineReducers({
    theme: themeReducer, // ключ 'theme' будет использоваться в useSelector
});

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

// Создаем тип диспатча который принимает как AC так и TC
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// @ts-ignore
window.store = store


const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
];


const HW12 = () => {
    const themeId = useAppSelector((state: RootState) => state.theme.themeId)
    const dispatch = useAppDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = `${themeId}`
    }, [themeId])
    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12
