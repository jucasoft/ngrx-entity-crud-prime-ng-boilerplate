import {Company} from './company';

export class Address {
  public id: string;
  public street: string;
  public city: string;
  public country: string;
  public company?: Company;

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Address) => string = item => item.id;
}
