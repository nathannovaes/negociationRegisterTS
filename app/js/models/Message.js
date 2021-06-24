class Message {
    constructor(_type, _description) {
        this._type = _type;
        this._description = _description;
    }
    get type() {
        return this._type;
    }
    get description() {
        return this._description;
    }
}
