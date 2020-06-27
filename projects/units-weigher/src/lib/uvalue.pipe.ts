import { Pipe, PipeTransform } from '@angular/core';
import { LOCALE_ID, Inject } from '@angular/core';

import { UVal } from './cornerstones/base';
import { UValuePresentatation, PresentationParams } from './funcs/uvalue-presentation';

@Pipe({ name: 'uvalue' })

export class UValuePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  transform(uvalue: UVal<number>, ...args: string[]): string {
    this.Params.parse(...args);
    return this.Presentation.transform(uvalue, this.Params);
  }

  private get Presentation(): UValuePresentatation {
    if (!this._presentation)
      this._presentation = new UValuePresentatation(this._locale);
    return this._presentation;
  }
  
  private _presentation: UValuePresentatation = null;

  private get Params(): PresentationParams {
    if (!this._params)
      this._params = new PresentationParams();
    return this._params;
  }
  private _params: PresentationParams = null;
}