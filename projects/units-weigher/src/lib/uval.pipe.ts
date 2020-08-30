import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { PresentationParams } from './view/utils';
import { MeasureView } from './view/measure-view';
import { Measureable } from './core/z_barrel';
import { Unit } from './core/units';

@Pipe({ name: 'uval' })

export class UValPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  transform(uval: Measureable<Unit>, ...args: string[]): string {    
    this.Params.parse(...args);
    return this.Presentation.transform(uval, this.Params);
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