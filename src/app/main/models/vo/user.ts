import {Company} from './company';

export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public company?: Company;
  public companyId?: string;

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: User) => string = item => item.id;
}
