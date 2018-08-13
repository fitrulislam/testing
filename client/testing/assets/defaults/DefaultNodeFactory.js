import React from 'react';
import { NodeWidgetFactory } from '../WidgetFactories';
import { DefaultNodeWidget } from './DefaultNodeWidget';

class DefaultNodeFactory extends NodeWidgetFactory {
  constructor() {
    super('default');
  }

  generateReactWidget(diagramEngine, node) {
    return (
      <DefaultNodeWidget node={node} diagramEngine={diagramEngine} />
    );
  }
}

export {
  DefaultNodeFactory
};
