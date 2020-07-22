export class UValErr extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, UValErr.prototype);
    }
}

export class UValNotImplemented extends UValErr {}

