import React, { Component } from 'react';
import '../assets/css/draganddrop.css';

export default class draganddrop extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: 'Test 1',
          category: 'start',
          bgcolor: 'red',
          createdAt: Date.now()
        },
        {
          name: 'Test 2',
          category: 'finish',
          bgcolor: 'blue',
          createdAt: Date.now()
        },
        {
          name: 'Test 3',
          category: 'start',
          bgcolor: 'green',
          createdAt: Date.now()
        }
      ]
    };
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name)
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log(id);
    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
        return task;
     });
     this.setState({
        ...this.state,
        tasks
     });
  };

  render() {
    var tasks = { 
      start: [], 
      finish: []        
    }

    this.state.tasks.forEach ((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e)=>this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{backgroundColor: t.bgcolor}}>
            {t.name}
        </div>
      );
    });

    return (
      <div className="containerDrag">
        <h2 className="header">DRAG & DROP</h2>
        <div className="dragDrop">
          <div className="smallBox"
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>{this.onDrop(e, "start")}}>
            <div className="taskHeader">START</div>
            {tasks.start}
          </div>
          <div className="smallBox"
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "finish")}>
            <div className="taskHeader">FINISH</div>
            {tasks.finish}
          </div>
        </div>            
      </div>
    );
  };
};
