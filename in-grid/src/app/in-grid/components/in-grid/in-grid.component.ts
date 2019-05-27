import { Component, Input, OnInit } from '@angular/core';
import { IInGridConfig } from '../../interfaces/IInGridConfig';
import { IInGridColumn } from '../../interfaces/IInGridColumn';

@Component({
    selector: 'app-in-grid',
    templateUrl: './in-grid.component.html',
    styleUrls: ['./in-grid.component.scss' ]
})
export class InGridComponent implements OnInit {
    title = 'in-grid';

    @Input() config: IInGridConfig<any>;

    constructor() {
    }

    ngOnInit(): void {
    }

    public applySort(column?: IInGridColumn<any>) {
        
    }
}