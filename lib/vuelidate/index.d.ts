export declare function useVuelidate(validations: any, state: any, registerAs: any): import("vue").ComputedRef<{
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
}>;
export declare const VuelidateMixin: {
    beforeCreate(): void;
};
export declare function VuelidatePlugin(app: any): void;
export default useVuelidate;
