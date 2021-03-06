class Negociation {

  // private _date : Date;
  // private _quantity : number;
  // private _value : number;

  // constructor(date : Date, quantity : number, value : number) {
  //   this._date = date;
  //   this._quantity = quantity;
  //   this._value = value;
  // }

  constructor(private _date: Date, private _quantity: number, private _value: number){}

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