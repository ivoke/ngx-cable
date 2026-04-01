import { Injectable } from "@angular/core";
import * as ActionCable from "@rails/actioncable";
import * as i0 from "@angular/core";
import * as i1 from "./broadcaster";
export class NgXCable {
    constructor(broadcaster) {
        this.broadcaster = broadcaster;
        this.setCable = function (url) {
            this.cable = ActionCable.createConsumer(url);
        };
        this.connect = function (url) {
            this.setCable(url);
        };
        this.isOpen = function () {
            if (this.cable !== void 0) {
                return !this.cable.connection.disconnected;
            }
            else {
                return false;
            }
        };
        this.create = function (params) {
            let _this = this;
            return this.cable.subscriptions.create(params, {
                received: function (data) {
                    _this.broadcaster.broadcast(params.channel, data);
                },
            });
        };
        this.subscribe = function (params) {
            return this.create(params);
        };
        this.send = function (data, subscriptions) {
            if (!this.isOpen()) {
                return false;
            }
            if (subscriptions == null) {
                this.cable.subscriptions.subscriptions[0].send(data);
            }
            else if (subscriptions instanceof Array) {
                subscriptions.forEach(function (subscription) {
                    if (subscription instanceof ActionCable.Subscription) {
                        subscription.send(data);
                    }
                });
            }
            else {
                return false;
            }
            return true;
        };
        this.perform = function (action, data, subscriptions) {
            if (!this.isOpen()) {
                return false;
            }
            if (subscriptions == null) {
                this.cable.subscriptions.subscriptions[0].perform(action, data);
            }
            else if (subscriptions instanceof Array) {
                subscriptions.forEach(function (subscription) {
                    if (subscription instanceof ActionCable.Subscription) {
                        subscription.perform(action, data);
                    }
                });
            }
            else {
                return false;
            }
            return true;
        };
        this.unsubscribe = function (subscriptions) {
            let _this = this;
            if (subscriptions == null) {
                this.cable.subscriptions.subscriptions.forEach(function (subscription) {
                    _this.cable.subscriptions.remove(subscription);
                });
            }
            else if (subscriptions instanceof Array) {
                subscriptions.forEach(function (subscription) {
                    if (subscription instanceof ActionCable.Subscription) {
                        _this.cable.subscriptions.remove(subscription);
                    }
                });
            }
            else {
                return false;
            }
            return true;
        };
        this.getSubscriptions = function () {
            return this.cable.subscriptions.subscriptions;
        };
        this.getCountSubscriptions = function () {
            return this.getSubscriptions().length;
        };
        this.searchSubcriptions = function (id, field = "room") {
            let rsub = [];
            this.getSubscriptions().forEach(function (subscription) {
                const msg = JSON.parse(subscription.identifier);
                if (id === msg[field]) {
                    rsub.push(subscription);
                }
            });
            return rsub;
        };
        this.reject = function (subscription) {
            if (subscription instanceof ActionCable.Subscription) {
                this.cable.subscriptions.remove(subscription);
            }
            else {
                return false;
            }
            return true;
        };
        this.disconnect = function () {
            if (this.isOpen()) {
                this.cable.disconnect();
            }
            else {
                return false;
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCable, deps: [{ token: i1.Broadcaster }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCable }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: NgXCable, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Broadcaster }] });
