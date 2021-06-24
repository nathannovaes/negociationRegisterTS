abstract class BaseView<GenericType> {
  protected _element : Element;

  constructor(htmlElementIdName: string) {
    this._element = document.querySelector(htmlElementIdName)
  }

  abstract template(_model: GenericType): string;
}