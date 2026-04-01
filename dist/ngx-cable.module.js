import { NgModule } from '@angular/core';
import { NgXCable } from './ngx-cable';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
export class NgXCableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.9", ngImport: i0, type: NgXCableModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCableModule, providers: [
            NgXCable,
            Broadcaster
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCableModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        NgXCable,
                        Broadcaster
                    ]
                }]
        }] });
