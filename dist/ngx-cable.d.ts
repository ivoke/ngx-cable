import * as ActionCable from "@rails/actioncable";
import { Broadcaster } from "./broadcaster";
import * as i0 from "@angular/core";
export declare class NgXCable {
    private broadcaster;
    constructor(broadcaster: Broadcaster);
    setCable: (url: string) => void;
    connect: (url: string) => void;
    isOpen: () => boolean;
    create: (params: {
        channel: string;
        room: string;
    }) => any;
    subscribe: (params: {
        channel: string;
        room: string;
    }) => any;
    send: (data: any, subscriptions?: ActionCable.Subscription[]) => boolean;
    perform: (action: string, data: any, subscriptions?: ActionCable.Subscription[]) => boolean;
    unsubscribe: (subscriptions?: ActionCable.Subscription[]) => boolean;
    getSubscriptions: () => any;
    getCountSubscriptions: () => any;
    searchSubcriptions: (id: any, field?: string) => any[];
    reject: (subscription: ActionCable.Subscription) => boolean;
    disconnect: () => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgXCable, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgXCable>;
}
