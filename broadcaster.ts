import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable()
export class Broadcaster {
  private _eventBus: any;

  constructor() {
    this.init();
  }

  private init() {
    this._eventBus = new Subject();
  }

  public broadcast(key, data) {
    this._eventBus.next({ key: key, data: data });
  }

  public on(key) {
    return this._eventBus.asObservable().pipe(
      filter(function (event) {
        return event[`key`] === key;
      }),
      map(function (event) {
        return event[`data`];
      })
    );
  }

  public off() {
    this.init();
  }
}
