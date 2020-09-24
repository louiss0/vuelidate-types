import macAddress from '../raw/macAddress'

export default (separator: string) => ({
    $validator: macAddress(separator),
    $message: 'The value is not a valid MAC Address'
})
