declare type ReturnBooleanOrPromise = () => boolean | Promise<boolean>;
declare type Prop = Boolean | String | ReturnBooleanOrPromise;
declare const _default: (prop: Prop) => (value: unknown) => any;
export default _default;
