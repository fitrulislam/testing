import * as RJD from '../../../assets/main';
import { OutputNodeModel } from './OutputNodeModel';

export class OutputNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('OutputNodeModel');
  }

  getInstance() {
    return new OutputNodeModel();
  }
}
