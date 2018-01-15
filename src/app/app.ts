import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreService } from './store';
import { StoreDirective } from './store-directive/store-directive';

@NgModule({
    declarations: [
        StoreDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        StoreDirective
    ],
    providers: [
        StoreService
    ],
})
export class StoreModule { }

export { StoreService } from './store';
export { AngularWebStorageModule as StoreWebModule } from 'angular-web-storage';
export {
    LocalStorageService, SessionStorageService,
    LocalStorage, SessionStorage
} from 'angular-web-storage';
