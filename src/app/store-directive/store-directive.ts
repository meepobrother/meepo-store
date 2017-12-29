import { Directive, Input, Output, EventEmitter, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { StoreService } from '../store';
@Directive({ selector: '[store]' })
export class StoreDirective implements OnInit {
    @Input() store: string;
    @Output() storeChange: EventEmitter<any> = new EventEmitter();

    @HostListener('change', ['$evennt'])
    onChange() {
        if (this.ele) {
            if (this.isTextInput(this.ele.nativeElement)) {
                this._store.set(this.store, this.ele.nativeElement.value);
            }
        }
    }
    constructor(
        public ele: ElementRef,
        public render: Renderer2,
        public _store: StoreService
    ) { }

    isTextInput(ele: any) {
        return !!ele &&
            (ele.tagName === 'TEXTAREA' ||
                ele.contentEditable === 'true' ||
                (ele.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(ele.type))));
    }

    isDiv(ele: any) {
        return !!ele && (ele.tagName === 'DIV');
    }

    ngOnInit() {
        if (this.isTextInput(this.ele.nativeElement)) {
            this.ele.nativeElement.value = this._store.get(this.store, '')
        }
    }
}
export const NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;
