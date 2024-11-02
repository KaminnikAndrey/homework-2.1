import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            console.log(state)
            switch (action.payload) {
                case "up": return state.sort((a, b) => a.name > b.name ? 1 : -1)
                case "down": return state.sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case 'check': {
            return state.filter((item) => item.age >= 18).sort((a, b) => a.name > b.name ? 1 : -1)// need to fix
        }
        default:
            return state
    }
}
