import { IInGridColumn } from './IInGridColumn';
import { IInGridDefaultSortData } from './IInGridDefaultSortData';

export interface IInGridConfig<T> {
    data: T[];
    columns: IInGridColumn<T>[];
    sortData?: IInGridDefaultSortData;
}
