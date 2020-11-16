import {Action} from '@ngrx/store'

export const XRPVALIDATOR = '[VALIDATOR] XrpValidator'


export class XrpValidator implements Action {
    readonly type = XRPVALIDATOR;

    constructor(public payload: any){}
}

export type Actions = XrpValidator