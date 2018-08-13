import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const nodeSource = {
  beginDrag(props) {
    return props;
  }
};

@DragSource('node-source', nodeSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class DragWrapper extends React.Component {

  render() {
    const { isDragging, connectDragSource, children, style } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          {children}
        </div>
      )
    );
  }
}

DragWrapper.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export {
  DragWrapper
};
