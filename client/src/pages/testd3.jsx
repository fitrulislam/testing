import React from 'react';
import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A',
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 100,
    height: 60,
    y: -40,
    ry: 10,
  }
}
 
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTreeData: [
        {
          name: 'Top Level',
          children: [
            {
              name: 'Level 2: A',
            },
            {
              name: 'Level 2: B',
            },
          ],
        },
      ]
    }
  }
  render() {
    return (
      <div id="treeWrapper" style={{width: '100em', height: '100em'}}>
        <Tree
          data={this.state.myTreeData}
          orientation="vertical"
          nodeSvgShape={svgSquare}
          collapsible={false}/>
      </div>
    );
  };
};