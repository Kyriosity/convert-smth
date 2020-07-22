import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

import { UVal } from './cors/z_barrel';
import { UValView, PresentationParams } from './view/uval-view';

@Pipe({ name: 'uval' })

export class uValPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  transform(value: UVal<number>, ...args: string[]): string {
    this.Params.parse(...args);
    return this.Presentation.transform(value, this.Params);
  }

  private get Presentation(): UValView {
    if (!this._presentation)
      this._presentation = new UValView(this._locale);
    return this._presentation;
  }

  private _presentation: UValView = null;

  private get Params(): PresentationParams {
    if (!this._params)
      this._params = new PresentationParams();
    return this._params;
  }
  private _params: PresentationParams = null;
}