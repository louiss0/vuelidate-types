declare const _default: (equalTo: any, otherName: any) => {
    $validator: <T>(value: T) => boolean;
    $message: ({ $params }: {
        $params: any;
    }) => string;
    $params: {
        equalTo: any;
        otherName: any;
    };
};
export default _default;
