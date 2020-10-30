import { Unit } from '../_core/units';
import { IConverter } from './_convert/_converter';
import { IPresenter } from './_present/_presenter';

export interface Tools<U extends Unit> {
    converter: IConverter<U>
    presenter: IPresenter<U>
}