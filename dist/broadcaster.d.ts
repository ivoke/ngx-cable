import * as i0 from "@angular/core";
export declare class Broadcaster {
    private _eventBus;
    constructor();
    private init;
    broadcast(key: any, data: any): void;
    on(key: any): any;
    off(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Broadcaster, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Broadcaster>;
}
