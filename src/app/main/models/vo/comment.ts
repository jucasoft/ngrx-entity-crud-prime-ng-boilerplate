export class Comment {
  public id: string = undefined;
  public author: string = undefined;
  public comment: string = undefined;
  static selectId: (item: Comment) => string = item => item.id;
}
