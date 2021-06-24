class Negociations {
    constructor() {
        this._negociations = [];
    }
    add(negociation) {
        this._negociations.push(negociation);
    }
    getNegociations() {
        return [].concat(this._negociations);
    }
}
