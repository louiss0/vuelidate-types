export default <T>(...validators: Array<Function>) => {
    return function (...args: Array<T>) {
        return (
            validators.length > 0 &&
            validators.reduce((valid, fn) => valid || fn.apply(this, args), false)
        )
    }
}
