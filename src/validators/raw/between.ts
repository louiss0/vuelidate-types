import { req } from '../common'
import { unwrap } from '../utils/common'

export default (min: number, max: number) =>
    (value: string | Date): boolean => {


        if (!req(value)) {
            return false
        }

        else if (typeof value === "string" && (!/\s/.test(value))) {

            return false
        }
        else if (value instanceof Date) {

            return false

        }

        return +unwrap(min) <= +value && +unwrap(max) >= +value



    }
