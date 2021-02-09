import {AddressStoreSelectors} from '@root-store/address-store';
import {CompanyStoreSelectors} from '@root-store/company-store';
import {UserStoreSelectors} from '@root-store/user-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(
AddressStoreSelectors.selectError,
CompanyStoreSelectors.selectError,
UserStoreSelectors.selectError,
    (...args: string[]) => {
      // console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(
AddressStoreSelectors.selectIsLoading,
CompanyStoreSelectors.selectIsLoading,
UserStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      // console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

