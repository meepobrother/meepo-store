import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable()
export class StoreService extends LocalStorageService {
    constructor() {
        super();
    }
    getList<T>(key: string, page: number = 1, psize: number = 10): T[] {
        let items: T[] = this.get(key);
        items = items || [];
        return items.splice((page - 1) * psize, psize);
    }
}
