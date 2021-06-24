class Message {
  constructor(private _type: string, private _description: string){}

  get type() {
    return this._type;
  }

  get description() {
    return this._description;
  }
}