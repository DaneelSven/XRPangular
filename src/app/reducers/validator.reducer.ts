import { createReducer, on } from '@ngrx/store'
import * as XRPActions from '../actions/xrp.actions'

export const initialXrpValidatorState = 0; 

const ini: any = []

// const _xrpValidatorReducer = createReducer(
//     initialXrpValidatorState,
//     on(XRPActions.validators, (state) => state +1)
// )

// export function xrpValidatorReducer(state, action) {
//     return _xrpValidatorReducer(state,action)
// }

export function reducer(state: any = ini, action: XRPActions.Actions) {
    switch(action.type) {
        case XRPActions.XRPVALIDATOR:
            return [...state, action.payload]
    }
}