import { unref } from 'vue'

export function isFunction(val: unknown) {
    return typeof val === 'function'
}

export function isObject(o: unknown) {
    return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * Unwraps a ref, returning its value
 * @param val
 * @return {*}
 */
export function unwrap<T>(val: T) {
    return unref(val)
}


/**
 * Returns a standard ValidatorObject
 * Wraps a plain function into a ValidatorObject
 * @param {NormalizedValidator|Function} validator
 * @return {NormalizedValidator}
 */
export function normalizeValidatorObject(validator) {
    return isFunction(validator.$validator)
        ? validator
        : {
            $validator: validator
        }
}

/**
 * Returns whether a value is truthy ot not.
 * @param {Function|*} prop
 * @return {boolean}
 */
export function isTruthy(prop: unknown) {
    prop = unwrap(prop)
    return Boolean(isFunction(prop) ? typeof prop === "function" && prop() : prop)
}

export function isPromise(object) {
    return isObject(object) && isFunction(object.then)
}

export function withAsync(validator) {
    const normalized = normalizeValidatorObject(validator)
    normalized.$async = true
    return normalized
}
