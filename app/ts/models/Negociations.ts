class Negociations {
  private _negociations: Array<Negociation> = [];

  add(negociation: Negociation): void {
    this._negociations.push(negociation)
  }

  getNegociations(): Array<Negociation> {
    return [].concat(this._negociations);
  }
}