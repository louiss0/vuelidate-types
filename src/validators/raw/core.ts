// "required" core, used in almost every validator to allow empty values

import { unwrap } from '../utils/common'

export const req = (value: unknown) => {
    value = unwrap(value)
    if (Array.isArray(value)) return !!value.length
    if (value === undefined || value === null) {
        return false
    }

    if (value === false) {
        return true
    }

    if (value instanceof Date) {
        // invalid date won't pass
        return !isNaN(value.getTime())
    }

    if (typeof value === 'object') {
        for (let _ in value) return true
        return false
    }

    return !!String(value).length
}

/**
 * Returns the length of an arbitrary value
 * @param {Array|Object|String} value
 * @return {number}
 */
export const len = (value: unknown) => {
    value = unwrap(value)
    if (Array.isArray(value)) return value.length
    if (typeof value === 'object') {
        return Object.keys({ ...value }).length
    }
    return String(value).length
}

/**
 * Regex based validator template
 * @param {RegExp} expr
 * @return {function(*=): boolean}
 */
export const regex = (expr: RegExp) => (value: string) => {
    value = unwrap(value)
    return !req(value) || expr.test(value)
}
