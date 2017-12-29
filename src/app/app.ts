import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoCoreServiceModule } from 'meepo-core';

import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

import { StoreService } from './store';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MeepoCoreServiceModule
    ],
    exports: [],
    providers: [
        StoreService
    ],
})
export class StoreModule { }
export { StoreService } from './store';

