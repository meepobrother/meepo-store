import {
    Directive, Input, Output,
    EventEmitter, OnInit, ElementRef,
    Renderer2, HostListener,
    forwardRef, ChangeDetectorRef,
    OnDestroy
} from '@angular/core';
import { StoreService } from '../store';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
    selector: '[store]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => StoreDirective),
            multi: true
        }
    ]
})
export class StoreDirective implements ControlValueAccessor, OnDestroy, OnInit {
    @Input() store: string;
    _model: any;
    set model(val) {
        this._model = val;
        this.propagateChange(this._model);
    }
    get model() {
        return this._model;
    }

    @HostListener('change', ['$evennt'])
    onChange() {
        if (this.ele) {
            if (this.isTextInput(this.ele.nativeElement)) {
                this.model = this.ele.nativeElement.value;
            }
        }
    }

    constructor(
        public ele: ElementRef,
        public render: Renderer2,
        public cd: ChangeDetectorRef,
        public _store: StoreService
    ) { }

    ngOnInit() {
        this.ele.nativeElement.value = this._store.get(this.store);
        this.cd.reattach();
    }

    ngOnDestroy() {
        this.cd.detach();
    }

    propagateChange = (_: any) => { };

    writeValue(value: any) {
        if (this.isTextInput(this.ele.nativeElement)) {
            this._store.set(this.store, value);
            this.registerOnTouched(value);
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }


    isTextInput(ele: any) {
        return !!ele &&
            (ele.tagName === 'TEXTAREA' ||
                ele.contentEditable === 'true' ||
                (ele.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(ele.type))));
    }

    isDiv(ele: any) {
        return !!ele && (ele.tagName === 'DIV');
    }
}
export const NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;
