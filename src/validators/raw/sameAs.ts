import { unwrap } from '../utils/common'

export default <T>(equalTo: T) => <T>(value: T) => unwrap(value) === unwrap(equalTo)
