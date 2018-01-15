import { Injectable } from '@angular/core';
import {
    LocalStorageService, SessionStorageService,
    LocalStorage, SessionStorage
} from 'angular-web-storage';

@Injectable()
export class StoreService extends LocalStorageService {
    constructor() {
        super();
    }
    getList<T>(key: string, page: number = 1, psize: number = 10): T[] {
        let items: T[] = this.get(key);
        return items.splice((page - 1) * psize, psize);
    }
}
