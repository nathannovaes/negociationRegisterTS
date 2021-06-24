class NegociationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negociations: Negociations;
  private _messageSuccess: Message;
  private _messagesView : MessagesView;
  private _negociationsView : NegociationsView;

  constructor() {
    this._inputDate         = <HTMLInputElement>document.querySelector('#date');
    this._inputQuantity     = <HTMLInputElement>document.querySelector('#quantity');
    this._inputValue        = <HTMLInputElement>document.querySelector('#value');
    this._negociations      = new Negociations();
    this._negociationsView  = new NegociationsView('#negociationsView');
    this._messageSuccess    = new Message('alert-success', 'Negociation has been added successfully!');
    this._messagesView      = new MessagesView('#messagesView');


    this._negociationsView.create();
  }

  add(event: Event) {

    event.preventDefault();

    const negociation = new Negociation(
      new Date(this._inputDate.value.replace(/-/g, ',')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );

    this. _negociations.add(negociation);

    this._negociationsView.update(this._negociations);

    this._messagesView.showMessage(this._messageSuccess);
  }
}