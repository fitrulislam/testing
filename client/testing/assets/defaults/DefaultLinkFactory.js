import React from 'react';
import { LinkWidgetFactory } from '../WidgetFactories';
import { DefaultLinkWidget } from './DefaultLinkWidget';

class DefaultLinkFactory extends LinkWidgetFactory {
  constructor() {
    super('default');
  }

  generateReactWidget(diagramEngine, link) {
    return (
      <DefaultLinkWidget link={link} diagramEngine={diagramEngine} />
    );
  }
}

export {
  DefaultLinkFactory
};
