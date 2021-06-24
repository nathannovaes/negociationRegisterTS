class MessagesView extends BaseView {
    showMessage(message) {
        this._element.innerHTML = this.template(message);
        this.hideMessage();
    }
    hideMessage() {
        setTimeout(() => { this._element.innerHTML = ''; }, 2000);
    }
    template(message) {
        return `
      <div class="alert ${message.type}" role="alert">
        ${message.description}
      </div>
    `;
    }
}
