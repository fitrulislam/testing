import React from 'react';
import { PortWidget } from '../widgets/PortWidget';

class DefaultPortLabel extends React.Component {

  render() {
    const { model } = this.props;
    const port = (
      <PortWidget name={model.name} node={model.getParent()} />
    );
    const label = (
      <div className='name'>
        {model.label}
      </div>
    );
    
    return (
      <div className={`${(model.in ? 'in' : 'out')}-port`}>
        {model.in ? port : label}
        {model.in ? label : port}
      </div>
    );
  }
}

DefaultPortLabel.defaultProps = {
  in: true,
  label: 'port'
};

export {
  DefaultPortLabel
};
