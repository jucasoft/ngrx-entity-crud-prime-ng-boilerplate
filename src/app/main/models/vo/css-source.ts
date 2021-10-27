export class CssSource {
  public id: string = undefined;
  public children: any = undefined;
  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: CssSource) => string = item => item.id;
}
