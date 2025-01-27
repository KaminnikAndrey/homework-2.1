const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): {themeId: number} => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            console.log({...state, themeId: action.id})
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ActionsType = ReturnType<typeof changeThemeId>