export class CssItem {
  public styleRule: string = undefined;
  public property: string = undefined;
  public color: string = undefined;
  public varName: string = undefined;

  static selectId: (item: CssItem) => string = item => item.styleRule;
}
