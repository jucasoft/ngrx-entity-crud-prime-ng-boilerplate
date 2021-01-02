import { adapter, selectAddressState } from './state';

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
    selectItemSelected,
    selectItemsSelected,
    selectLastCriteria,
    selectError,
    selectIsLoading,
    selectIsLoaded,
    selectFilters,
    selectFilteredItems
} = adapter.getCrudSelectors(selectAddressState);
