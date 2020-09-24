declare const _default: (min: any, max: any) => {
    $validator: (value: string | Date) => boolean;
    $message: ({ $params }: {
        $params: any;
    }) => string;
    $params: {
        min: any;
        max: any;
    };
};
export default _default;
