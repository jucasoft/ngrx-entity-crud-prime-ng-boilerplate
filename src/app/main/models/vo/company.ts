import {User} from '@models/vo/user';
import {Address} from './address';

export class Company {
  public id: string;
  public name: string;
  public staff?: Array<User>;
  public admin?: User;
  public adminId?: string;
  public address?: Address;
  public addressId?: string;

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Company) => string = item => item.id;
}
