export class Comment {
  public id: number = undefined;
  public author: number = undefined;
  public text: string = undefined;
  static selectId: (item: Comment) => string = item => item.id + '';
}
