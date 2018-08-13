import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import '../assets/css/forbulma.css';
import 'bulma/css/bulma.css';
import '../assets/css/select2.min.css';
import '../assets/css/style.css';
import '../assets/css/daterangepicker.css';

export default class testbulma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      leftbox: {status: true, sign: '<'},
      rightbox: {status: true, sign: '>'},
      lists: {
        dataset: ['Saved Dataset', 'Subscribed Dataset'],
        model: ['Saved Model', 'Subscribed Model'],
        machine: ['Machine Learning']
      },
      listForAlgo: [],
      property: [],
      oneProperty: null,
      id: 0,
      menuStatus: {
        status1: false,
        status2: false
      }
    };
  };

  componentDidMount() {
    axios.get('http://localhost:3001/data/algorithm/getall')
      .then(response => {
        this.setState({
          lists: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    $('.menu-list .tab').click(function(j) {
        var dropDown = $(this).closest('li').find('.menu-child');

        $(this).closest('.menu-list').find('.menu-child').not(dropDown).slideUp();

        if ($(this).hasClass('select-hide')) {
            $(this).removeClass('select-hide');
            $(this).removeClass('select-hide');
        } else {
            $(this).closest('.menu-list').find('a.select-hide').removeClass('select-hide');
            $(this).addClass('select-hide');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
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
    axios.get('http://localhost:3001/data/algorithm/getone', {
      headers: {
        name: list
      }
    })
      .then(response => {
        this.setState({
          property: [...this.state.property, {...response.data.data.property, id: this.state.property.length}]
        })
      })
      .catch(err => {
        console.log(err);
      })
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

  toggleModal = () => {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  // forModal = (e) => {
  //   console.log(e)
  // };

  toggleColumn = (ev) => {
    let columnStatus = this.state[ev.target.id];
    if(columnStatus.sign === '<') {
      columnStatus.sign = '>'
    } else {
      columnStatus.sign = '<'
    };
    let newColumnStatus = {...columnStatus, status: !columnStatus.status};
    this.setState({
      [ev.target.id]: newColumnStatus
    });
  };

  forAlert = (ev) => {
    alert(`${ev.target.id} clicked!`)
  }

  triggerMenu = (ev) => {
    let newStatus = this.state.menuStatus
    console.log(ev.target.id)
    for (var key in newStatus) {
      if (newStatus.hasOwnProperty(key)) {
        if(key === ev.target.id) {
          newStatus[key] = !newStatus[key]
        } else {
          newStatus[key] = false
        }
        console.log(key + " -> " + newStatus[key]);
      }
  }
    this.setState({
      menuStatus: newStatus
    })
  }

  render() {
    const { leftbox, rightbox, modalState, oneProperty, lists } = this.state
    // const Modal = ({ children, closeModal, modalState, title }) => {
    //   if(!modalState) {
    //     return null;
    //   }
      
    //   return(
    //     <div className="modal is-active">
    //       <div className="modal-background" onClick={closeModal} />
    //       <div className="modal-card">
    //         <header className="modal-card-head">
    //           <p className="modal-card-title">{title}</p>
    //           <button className="delete" onClick={closeModal} />
    //         </header>
    //         <section className="modal-card-body">
    //           <div className="content">
    //             {children}
    //           </div>
    //         </section>
    //         <footer className="modal-card-foot">
    //           <a className="button" onClick={closeModal}>Cancel</a>
    //         </footer>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="box">
        <div className="columns">
          {
            leftbox.status === true ?
            <div className="column">
              <aside className="menu">
                <p className="menu-label">
                  Algorithm List
                </p>
                <ul className="menu-list listing">
                {
                  Object.keys(lists).map(upRes => {
                    console.log(lists[upRes]);
                    return (
                      lists[upRes].map((downRes, index) => {
                        // return upRes === 'dataset' ?
                        //   <div>
                        //     ini dataset { downRes }
                        //   </div> : null;
                        // return upRes === 'kuantum' ?
                        //   <div>
                        //     ini kuantum { downRes }
                        //   </div> : null;
                        // return upRes === 'machine' ?
                        //   <div>
                        //     ini machine { downRes }
                        //   </div> : null;
                        if(upRes === 'dataset') {
                          return (
                            <div>
                              ini dataset { downRes }
                            </div>
                          )
                        } else if (upRes === 'model') {
                          return (
                            <div>
                              ini model { downRes }
                            </div>
                          )
                        } else {
                          return (
                            <div>
                              ini machine { downRes }
                            </div>
                          )
                        }
                      })
                    )
                  })
                }
                </ul>
              </aside>
            </div> :
            <div className="fakeBox"></div>
          }
          <div
            className="column"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => {this.onDrop(e)}}>
            {/* <a className="button is-primary" onClick={() => this.toggleModal()}>
              Open Modal
            </a> */}
            <div className="navbar">
              <div className="navbar-start">
                <a className="button is-primary" id="leftbox" onClick={(e) => this.toggleColumn(e)}>
                  { leftbox.sign }
                </a>
              </div>
              <div className="navbar-end">
                <a className="button is-primary" id="rightbox" onClick={(e) => this.toggleColumn(e)}>
                  { rightbox.sign }
                </a>
              </div>
            </div>
            <aside className="menu">
              <p className="menu-label">
                Custom Algorithm
              </p>
              <ul className="menu-list">
                {
                  this.state.listForAlgo.map(listAlgo => {
                    return (
                      <li
                        key={listAlgo.id}
                        onClick={(e) => this.highlight(e)}>
                          <a
                            id={listAlgo.id}>
                              {listAlgo.name}
                          </a>
                      </li>
                    )
                  })
                }
              </ul>
            </aside>
            {/* <Modal 
              closeModal={() => this.toggleModal()} 
              modalState={modalState} 
              title="Example modal title"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet justo in arcu efficitur malesuada nec ut diam. Aenean a iaculis eros. Proin nec purus congue, rutrum sapien id, sodales ante. Nam imperdiet sapien pretium leo dapibus euismod. Ut ac venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta a a augue. Proin rhoncus tempus leo sed ultricies. In luctus aliquam placerat. Cras efficitur enim vitae vulputate consequat. Nulla tellus est, fringilla quis nisi eu, aliquam finibus eros.</p>
              <p>Aliquam est dui, varius eu tempor ac, ornare vel magna. Suspendisse potenti. Nullam gravida fermentum turpis, at ultricies risus bibendum sit amet. Nulla et arcu id nisi semper ullamcorper cursus sed magna. Phasellus pulvinar ligula vehicula consequat sagittis. Donec tristique tellus sed ex euismod ullamcorper. Vivamus nibh metus, scelerisque sed lorem eget, auctor lobortis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin congue auctor diam, efficitur dignissim neque. Pellentesque vitae odio ut odio auctor feugiat. Curabitur eget mauris nibh. Vestibulum massa nunc, iaculis at purus venenatis, mollis tincidunt tortor.</p>
            </Modal>     */}
          </div>
          {
            rightbox.status === true ?
            <div className="column">
              <aside className="menu">
                <p className="menu-label">
                  Property
                </p>
                <ul className="menu-list">
                  {
                    oneProperty !== null && (
                      Object.keys(oneProperty).map((prop, index) => {
                        return (
                          <div
                            key={index}>
                              {
                                prop !== 'id' && (
                                  <li>
                                    <a>{`${prop} :`}</a>
                                    <div className="field">
                                      <div className="control">
                                        <input
                                          type="text"
                                          className="input"
                                          value={oneProperty[prop]}
                                          name={prop}
                                          onChange={(e) => this.changeData(e)}/>
                                      </div>
                                    </div>
                                  </li>
                                )
                              }
                          </div>
                        )
                      })
                    )
                  }
                </ul>
              </aside>
            </div> :
            <div className="fakeBox"></div>
          }
        </div>
        <div className="fakePos">
          <button className="button is-medium is-warning fakeBut" id="Button 1" onClick={(e) => this.forAlert(e)}>Button 1</button>
          <button className="button is-medium is-info fakeBut" id="Button 2" onClick={(e) => this.forAlert(e)}>Button 2</button>
        </div>
      </div>
    );
  };
};