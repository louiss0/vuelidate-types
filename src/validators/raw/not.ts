import { req } from '../common'

// TODO: Double check this
export default (validator: Function) => function (value, vm) {
    return !req(value) || !validator.call(this, value, vm)
}
