declare const _default: (max: number) => {
    $validator: (value: any) => boolean;
    $message: ({ $params }: {
        $params: any;
    }) => string;
    $params: {
        max: number;
    };
};
export default _default;
