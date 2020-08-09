export class UValErr extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, UValErr.prototype);
    }
}

export class UValNotImplemented extends UValErr {}


export const ERR_MSG_VALUE_CANTBE_NEGATIVE = `value can't be negative here`

