class Negociation {
    // private _date : Date;
    // private _quantity : number;
    // private _value : number;
    // constructor(date : Date, quantity : number, value : number) {
    //   this._date = date;
    //   this._quantity = quantity;
    //   this._value = value;
    // }
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
