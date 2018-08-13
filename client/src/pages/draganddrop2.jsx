import React, { Component } from 'react';
import axios from 'axios';

import '../assets/css/draganddrop2.css';

export default class draganddrop2 extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      listForAlgo: [],
      property: [],
      oneProperty: null,
      id: 0,
      leftbox: true,
      rightbox: true
    };
  };

  componentDidMount() {
    axios.get('http://localhost:3001/data/algorithm/getallagain')
      .then(response => {
        this.setState({
          lists: response.data.data
        });
      })
      .catch(err => {
        console.log('error woy', err);
      })
  };

  onDragStart = (ev, list) => {
    ev.dataTransfer.setData("list", list);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev) => {
    let list = ev.dataTransfer.getData("list");
    this.setState({
      listForAlgo: [...this.state.listForAlgo, {id: this.state.listForAlgo.length, name: list}]
    });
    // axios.get('http://localhost:3001/data/algorithm/getone', {
    //   headers: {
    //     name: list
    //   }
    // })
    //   .then(response => {
    //     this.setState({
    //       property: [...this.state.property, {...response.data.data.property, id: this.state.property.length}]
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  };

  highlight = (ev) => {
    ev.target.classList = "highlighted"
    this.setState({
      oneProperty: this.state.property[ev.target.id],
      id: ev.target.id
    });
  };

  changeData = (ev) => {
    let oneProperty = this.state.oneProperty;
    oneProperty[ev.target.name] = ev.target.value;

    let property = this.state.property;
    property[this.state.id] = oneProperty;

    this.setState({
      oneProperty,
      property
    });
  };

  toggleColumn = (ev) => {
    let columnStatus = this.state[ev.target.id]
    let newColumnStatus = !columnStatus
    this.setState({
      [ev.target.id]: newColumnStatus
    });
  }

  render() {
    const alias = this.state.oneProperty
    return (
      <div>
        <div className="header">Drag And Drop</div>
        <div className="bigbox">
            {
              this.state.leftbox === true ?
              <div className="list">
                <div className="subHeader">List</div>
                {
                  this.state.lists.map(list => {
                    return (
                      <div
                        key={list._id}
                        className="lists"
                        onDragStart={(e) => this.onDragStart(e, list.name)}
                        draggable>
                          {list.name}
                      </div>
                    )
                  })
                }
              </div> :
              <div>
                Testing
              </div>
            }
          <div
            className="algorithm"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => {this.onDrop(e)}}>
              <div className="subHeader">
                <div className="header0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="header1">Algorithm</div>
                <div className="header2">
                  <div className="items" id="leftbox" onClick={(e) => this.toggleColumn(e)}></div>
                  <div className="items" id="rightbox" onClick={(e) => this.toggleColumn(e)}></div>
                </div>
              </div>
              {
                this.state.listForAlgo.map(listAlgo => {
                  return (
                    <div
                      key={listAlgo.id}
                      className="lists"
                      id={listAlgo.id}
                      onClick={(e) => this.highlight(e)}>
                        {listAlgo.name}
                    </div>
                  )
                })
              }
          </div>
          {
            this.state.rightbox === true ? 
            <div className="property">
              <div className="subHeader">Property</div>
              {
                alias !== null && (
                  Object.keys(alias).map((prop, index) => {
                    return (
                      <div
                        key={index}>
                          {
                            prop !== 'id' && (
                              <div>
                                <div>{`${prop} :`}</div>
                                <input
                                  type="text"
                                  value={alias[prop]}
                                  name={prop}
                                  onChange={(e) => this.changeData(e)}/>
                              </div>
                            )
                          }
                      </div>
                    )
                  })
                )
              }
            </div> :
            <div>
              Testing
            </div>
          }
        </div>
      </div>
    );
  };
};
