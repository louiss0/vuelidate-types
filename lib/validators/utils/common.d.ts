export declare function isFunction(val: unknown): boolean;
export declare function isObject(o: unknown): boolean;
export declare function unwrap<T>(val: T): T extends import("vue").Ref<infer V> ? V : T;
export declare function normalizeValidatorObject(validator: any): any;
export declare function isTruthy(prop: unknown): boolean;
export declare function isPromise(object: any): boolean;
export declare function withAsync(validator: any): any;
