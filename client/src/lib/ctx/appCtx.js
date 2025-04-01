import { getContext, setContext } from 'svelte';

export const appCtxKey = Symbol('app-ctx');

/**
 *
 * @returns {AppCtx}
 */
export let getAppCtx = () => {
  return getContext(appCtxKey);
};

/**
 *
 * @param {AppCtx} ctx
 * @returns
 */
export let setAppCtx = (ctx) => {
  return setContext(appCtxKey, ctx);
};
