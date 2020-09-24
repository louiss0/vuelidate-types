declare const _default: (min: number) => {
    $validator: (value: any) => boolean;
    $message: ({ $params }: {
        $params: any;
    }) => string;
    $params: {
        min: number;
    };
};
export default _default;
