import type { DependencyList, EffectCallback } from 'react';

import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * @name useDidUpdate
 * @description – Hook that triggers the effect callback on updates
 * @category Lifecycle
 *
 * @param {EffectCallback} effect The effect callback
 * @param {DependencyList} [deps] The dependencies list for the effect
 *
 * @example
 * useDidUpdate(() => console.log("effect runs on updates"), [deps]);
 */
export const useDidUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  const initialRender = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const effectReturns = effect();
    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};
