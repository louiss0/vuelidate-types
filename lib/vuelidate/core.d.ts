export declare function setValidations({ validations, state, key, parentKey, childResults, resultsCache }: {
    validations: any;
    state: any;
    key: any;
    parentKey: any;
    childResults: any;
    resultsCache: any;
}): {
    $model: any;
    $dirty: any;
    $error: any;
    $errors: any;
    $invalid: any;
    $anyDirty: any;
    $pending: any;
    $touch: () => void;
    $reset: () => void;
    $validate: () => Promise<unknown>;
};
