import { Action } from '@ngrx/store'

export function simpleReducer (state: string = 'hello world', action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case 'firstAccount':
            return state = "rhREXVHV938ToGkdJQ9NCYEY4x8kSEtjna"

        case 'secondAccount': 
            return state ='rE3hWEGquaixF2XwirNbA1ds4m55LxNZPk'

        default: 
            return state;
    }
}