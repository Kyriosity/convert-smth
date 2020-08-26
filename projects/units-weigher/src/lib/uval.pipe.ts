import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

import { Measureable } from './core/z_barrel';
import { PresentationParams } from './view/utils';
import { MeasureView } from './view/measure-view';


@Pipe({ name: 'uval' })

export class UValPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  transform(ma: Measureable<number>, ...args: string[]): string {
    this.Params.parse(...args);
    return this.Presentation.transform(ma, this.Params);
  }

  private get Presentation(): MeasureView {
    if (!this.#presentation)
      this.#presentation = new MeasureView(this._locale);
    return this.#presentation;
  }

  #presentation: MeasureView = null;

  private get Params(): PresentationParams {
    if (!this.#params)
      this.#params = new PresentationParams();
    return this.#params;
  }
  #params: PresentationParams = null;
}