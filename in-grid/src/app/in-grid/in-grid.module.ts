import { NgModule } from '@angular/core';
import { InGridComponent } from './components/in-grid/in-grid.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        InGridComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        InGridComponent
    ],
    providers: [

    ],
    bootstrap: [
        InGridComponent
    ]
})
export class InGridModule {

}