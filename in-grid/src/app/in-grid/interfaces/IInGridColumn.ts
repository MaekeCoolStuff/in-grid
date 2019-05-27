export interface IInGridColumn<T> {
    key: string;
    label?: string;
    value?: (object: T) => string | string[] | boolean;
    transform?: (value: string) => string;
}