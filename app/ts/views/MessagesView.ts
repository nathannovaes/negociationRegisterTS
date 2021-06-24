class MessagesView extends BaseView<Message>{

  showMessage(message: Message): void {
    this._element.innerHTML = this.template(message);

    this.hideMessage();
  }

  hideMessage(): void {
    setTimeout(() => {this._element.innerHTML = ''}, 2000);
  }

  template(message: Message): string {
    return `
      <div class="alert ${message.type}" role="alert">
        ${message.description}
      </div>
    `;
  }
}