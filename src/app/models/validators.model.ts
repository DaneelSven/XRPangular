export interface Validator {
    agreement_1h?: {
        incomplete: false,
        missed: number,
        score: string,
        total: number
    },
    agreement_24h?: {},
    chain?: string,
    curent_index?: number
    domain?: string,
    partial?: boolean,
    unl?: boolean,
    validation_public_key?: string,
    visible?: boolean,
    count?: number;
    validators?: any;
}