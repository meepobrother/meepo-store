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
        item = item || def;
        return JSON.parse(item);
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }

    clearAll() {
        localStorage.clear();
    }
}