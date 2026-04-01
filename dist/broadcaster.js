import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import * as i0 from "@angular/core";
export class Broadcaster {
    constructor() {
        this.init();
    }
    init() {
        this._eventBus = new Subject();
    }
    broadcast(key, data) {
        this._eventBus.next({ key: key, data: data });
    }
    on(key) {
        return this._eventBus.asObservable().pipe(filter(function (event) {
            return event[`key`] === key;
        }), map(function (event) {
            return event[`data`];
        }));
    }
    off() {
        this.init();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Broadcaster, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Broadcaster }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Broadcaster, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });
