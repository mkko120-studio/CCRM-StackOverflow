export class NoDatabaseSelectedError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, NoDatabaseSelectedError.prototype)
    }
}

export class EngineNotSupportedError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, EngineNotSupportedError.prototype)
    }
}

export class NotImplementedYetError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, NotImplementedYetError.prototype)
    }
}

