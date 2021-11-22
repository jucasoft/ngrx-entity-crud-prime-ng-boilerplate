import {CssVarStoreSelectors} from '@root-store/css-var-store';
import {CssSourceStoreSelectors} from '@root-store/css-source-store';
import {CssItemStoreSelectors} from '@root-store/css-item-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(
CssVarStoreSelectors.selectError,
CssSourceStoreSelectors.selectError,
CssItemStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(
CssVarStoreSelectors.selectIsLoading,
CssSourceStoreSelectors.selectIsLoading,
CssItemStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

