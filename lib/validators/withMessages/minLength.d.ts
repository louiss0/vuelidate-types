declare const _default: (length: number) => {
    $validator: (value: unknown) => boolean;
    $message: ({ $params }: {
        $params: any;
    }) => string;
    $params: {
        length: number;
    };
};
export default _default;
