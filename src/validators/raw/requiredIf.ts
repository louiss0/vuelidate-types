import { req } from '../common'
import { isPromise } from '../utils/common'

type ReturnBooleanOrPromise = () => boolean | Promise<boolean>

type Prop = Boolean | String | ReturnBooleanOrPromise


const validate = (prop: Prop, val: unknown) => prop ? req(val) : true
/**
 * Returns required if the passed property is truthy
 * @param {Boolean | String | function(): (Boolean | Promise<boolean>)} prop
 * @return {function(*): (Boolean | Promise<Boolean>)}
 */
export default (prop: Prop) => (value: unknown) => {
    if (typeof prop !== 'function') {
        return validate(prop, value)
    }
    const result = prop()
    if (isPromise(result)) {
        return result.then((response) => {
            return validate(response, value)
        })
    }
    return validate(result, value)
}
