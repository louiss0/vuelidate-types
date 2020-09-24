import { req, len } from './core'
import { unwrap } from '../utils/common'

export default (length: number) => (value: unknown) => !req(value) || len(value) >= unwrap(length)
