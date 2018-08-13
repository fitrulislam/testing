import * as RJD from '../../../assets/main';
import { OutputNodeWidgetFactory } from './OutputNodeWidget';

export class OutputWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('output');
  }

  generateReactWidget(diagramEngine, node) {
    return OutputNodeWidgetFactory({ node });
  }
}
