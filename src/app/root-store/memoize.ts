import {MemoizedProjection} from '@ngrx/store';

const isEqualCheck = (a: any, b: any): boolean => {
  return a === b; // this is what is currently isEqualCheck is doing anyway.
};

// tslint:disable-next-line:typedef
function isArgumentsChanged(
  args: IArguments,
  lastArguments: IArguments,
  comparator: any
) {
  for (let i = 0; i < args.length; i++) {
    if (!comparator(args[i], lastArguments[i])) {
      return true;
    }
  }
  return false;
}

export const customMemoizeFactory = <T>(check: (prevIten: T, newIten: T) => boolean) => function customMemoize(
  projectionFn: any,
  isArgumentsEqual = isEqualCheck,
  isResultEqual = isEqualCheck
): MemoizedProjection {
  let lastArguments: null | IArguments = null;
  // tslint:disable-next-line:no-any anything could be the result.
  let lastResult: any = null;
  let overrideResult: any;

  // tslint:disable-next-line:typedef
  function reset() {
    lastArguments = null;
    lastResult = null;
  }

  // tslint:disable-next-line:typedef no-unnecessary-initializer
  function setResult(result: any = undefined) {
    overrideResult = {result};
  }

  // tslint:disable-next-line:typedef
  function clearResult() {
    overrideResult = undefined;
  }

  // tslint:disable-next-line:no-any anything could be the result.
  function memoized(): any {
    if (overrideResult !== undefined) {
      return overrideResult.result;
    }

    if (!lastArguments) {

      // eslint-disable-next-line prefer-spread,prefer-rest-params
      lastResult = projectionFn.apply(null, arguments as any);
      // eslint-disable-next-line prefer-rest-params
      lastArguments = arguments;
      return lastResult;
    }

    // eslint-disable-next-line prefer-rest-params
    if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
      return lastResult;
    }

    // eslint-disable-next-line prefer-spread,prefer-rest-params
    const newResult = projectionFn.apply(null, arguments as any);
    // eslint-disable-next-line prefer-rest-params
    lastArguments = arguments;

    if (isResultEqual(lastResult, newResult)) {
      return lastResult;
    }

    const keys = Object.keys(newResult);

    const newResultB = keys.reduce((prev: any, key: string) => {

      const prevIten = lastResult[key];
      const newIten = newResult[key];

      if (check(prevIten, newIten)) {
        prev[key] = prevIten;
      } else {
        prev[key] = {...newIten};
      }
      return prev;
    }, {});

    lastResult = newResultB;

    return newResultB;
  }

  return {memoized, reset, setResult, clearResult};
};
