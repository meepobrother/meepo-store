import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StoreService {
    get$: Subject<any> = new Subject();
    set$: Subject<any> = new Subject();
    clear$: Subject<any> = new Subject();

    constructor() { }

    get<T>(key: string, def: any): T {
        let item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else {
            return def;
        }
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getList<T>(key: string, page: number = 1, psize: number = 10): T[] {
        let items: T[] = this.get(key, []);
        return items.splice((page - 1) * psize, psize);
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }

    clearAll() {
        localStorage.clear();
    }
}