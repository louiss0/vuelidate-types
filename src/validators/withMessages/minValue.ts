import minValue from '../raw/minValue'

export default (min: number) => ({
    $validator: minValue(min),
    $message: ({ $params }) => `The minimum value allowed is ${$params.min}`,
    $params: { min }
})
