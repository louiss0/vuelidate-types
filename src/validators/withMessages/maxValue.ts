import maxValue from '../raw/maxValue'

export default (max: number) => ({
    $validator: maxValue(max),
    $message: ({ $params }) => `The maximum value is ${$params.max}`,
    $params: { max }
})
