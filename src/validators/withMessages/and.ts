import and from '../raw/and'

export default (...validators: Array<Function>) => ({
    $validator: and(...validators),
    $message: 'The value does not match all of the provided validators'
})
