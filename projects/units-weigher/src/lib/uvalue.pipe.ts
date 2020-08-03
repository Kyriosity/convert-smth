import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

import { UVal } from './cors/z_barrel';
import { PresentationParams } from './view/utils';
import { UValView } from './view/uval-view';


@Pipe({ name: 'uval' })

export class uValPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  transform(value: UVal<number>, ...args: string[]): string {
    this.Params.parse(...args);
    return this.Presentation.transform(value, this.Params);
  }

  private get Presentation(): UValView {
    if (!this.#presentation)
      this.#presentation = new UValView(this._locale);
    return this.#presentation;
  }

  #presentation: UValView = null;

  private get Params(): PresentationParams {
    if (!this.#params)
      this.#params = new PresentationParams();
    return this.#params;
  }
  #params: PresentationParams = null;
}