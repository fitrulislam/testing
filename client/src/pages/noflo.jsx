import React, { Component } from 'react';
import '../assets/css/noflo.css';

export default class noflo extends Component {
  constructor(props) {
    super(props);
    this.state.properties = {
      icons: {
        value: {},
        observer: 'iconsChanged'
      },
      animatedEdges: {
        value: [],
        notify: true,
        observer: 'animatedEdgesChanged'
      },
      appView: { value: null },
      autolayout: {
        value: false,
        notify: true,
      },
      autolayouter: { value: null },
      debounceLibraryRefeshTimer: { value: null },
      displaySelectionGroup: {
        value: true,
        notify: true,
        observer: 'displaySelectionGroupChanged'
      },
      editable: {
        value: true
      },
      graphChanges: {
        value: []
      },
      errorNodes: {
        value: {},
        notify: true,
        observer: 'errorNodesChanged'
      },
      forceSelection: {
        value: false,
        notify: true,
        observer: 'forceSelectionChanged'
      },
      graph: {
        value: null,
        notify: true,
        observer: 'graphChanged'
      },
      graphView: { value: null },
      grid: {
        value: 72
      },
      height: {
        value: 600,
        notify: true,
        observer: 'heightChanged'
      },
      library: {
        value: null,
        notify: true
      },
      maxZoom: {
        value: 15,
        notify: true
      },
      menus: {
        value: null,
        notify: true,
        observer: 'menusChanged'
      },
      minZoom: {
        value: 0.15,
        notify: true
      },
      offsetX: {
        value: 0,
        notify: true
      },
      offsetY: {
        value: 0,
        notify: true
      },
      pan: {
        notify: true,
        observer: 'panChanged'
      },
      readonly: {
        value: false,
        notify: true,
        observer: 'readonlyChanged'
      },
      scale: {
        value: 1,
        notify: true
      },
      selectedEdges: {
        calue: [],
        notify: true,
        observer: 'selectedEdgesChanged'
      },
      selectedNodes: {
        value: [],
        notify: true,
        observer: 'selectedNodesChanged'
      },
      selectedNodesHash: {
        value: {},
        observer: 'selectedNodesHashChanged'
      },
      snap: {
        value: 36
      },
      theme: {
        value: 'dark',
        notify: true,
        observer: 'themeChanged'
      },
      width: {
        value: 800,
        notify: true,
        observer: 'widthChanged'
      },
      graphEvents: [
        'changeProperties',
        'addNode',
        'changeNode',
        'removeNode',
        'addEdge',
        'changeEdge',
        'removeEdge',
        'addInitial',
        'removeInitial',
        'addGroup',
        'removeGroup',
        'changeGroup',
      ],
      graphRenameEvents: [
        'renameInport',
        'renameOutport',
        'renameGroup',
        'renameNode',
      ],
      graphPortEvents: [
        'addInport',
        'removeInport',
        'addOutport',
        'removeOutport',
      ],
      hostAttributes: { 'touch-action': 'none' }
    };
  }
  ready = () =>  {
    this.library = {};
    // Default pan
    this.pan = [
      0,
      0
    ];
    // Initializes the autolayouter
    this.autolayouter = klayNoflo.init({
      onSuccess: this.applyAutolayout.bind(this),
      workerScript: 'browser/vendor/klayjs/klay.js'
    });
    this.themeChanged();
  }

  themeChanged = (newTheme, previousTheme) => {
    Polymer.dom(this.$.svgcontainer).classList.remove('the-graph-' + previousTheme);
    if (newTheme) {
      Polymer.dom(this.$.svgcontainer).classList.add('the-graph-' + newTheme);
    }
  }

  subscribeGraph = (graph) => {
    if (!this.trackGraphChange) {
      this.trackGraphChange = {};
    }
    this.graphEvents.forEach(function (event) {
      this.trackGraphChange[event] = function (payload) {
        this.graphChanges.push({
          event: event,
          payload: payload
        });
        if (this.autolayout) {
          this.triggerAutolayout();
        }
      }.bind(this);
      graph.on(event, this.trackGraphChange[event]);
    }.bind(this));
    this.graphRenameEvents.forEach(function (event) {
      this.trackGraphChange[event] = function (from, to) {
        this.graphChanges.push({
          event: event,
          payload: {
            from: from,
            to: to
          }
        });
      }.bind(this);
      graph.on(event, this.trackGraphChange[event]);
    }.bind(this));
    this.graphPortEvents.forEach(function (event) {
      this.trackGraphChange[event] = function (pub, priv) {
        this.graphChanges.push({
          event: event,
          payload: {
            public: pub,
            node: priv.process,
            port: priv.port,
            metadata: priv.metadata
          }
        });
      }.bind(this);
      graph.on(event, this.trackGraphChange[event]);
    }.bind(this));

    // Send changeset at end of transaction
    this.trackGraphChange.endTransaction = function () {
      // Send full graph for storage
      this.fire('changed', graph);
      // Send and clear graph change log
      if (this.graphChanges.length) {
        this.fire('graphChanges', this.graphChanges);
        this.graphChanges = [];
      }
    }.bind(this);
    this.graph.on('endTransaction', this.trackGraphChange.endTransaction);
  }

  unsubscribeGraph = (graph) => {
    if (!this.trackGraphChange) {
      return;
    }
    var allEvents = this.graphEvents.concat(this.graphRenameEvents, this.graphPortEvents);
    allEvents.forEach(function (event) {
      if (!this.trackGraphChange[event]) {
        return;
      }
      graph.removeListener(event, this.trackGraphChange[event]);
      delete this.trackGraphChange[event];
    }.bind(this));

    if (this.trackGraphChange.endTransaction) {
      graph.removeListener('endTransaction', this.trackGraphChange.endTransaction);
      delete this.trackGraphChange.endTransaction;
    }
  }

  graphChanged = (newGraph, oldGraph) => {
    if (oldGraph && oldGraph.removeListener) {
      this.unsubscribeGraph(oldGraph);
    }

    if (this.appView) {
      // Remove previous instance
      ReactDOM.unmountComponentAtNode(this.$.svgcontainer);
    }

    if (!this.graph) {
      return;
    }

    // Subscribe to graph changes
    this.subscribeGraph(newGraph);

    // Setup app
    Polymer.dom(this.$.svgcontainer).innerHTML = '';
    this.appView = ReactDOM.render(window.TheGraph.App({
      graph: this.graph,
      width: this.width,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      height: this.height,
      library: this.library,
      menus: this.menus,
      editable: this.editable,
      onEdgeSelection: this.onEdgeSelection.bind(this),
      onNodeSelection: this.onNodeSelection.bind(this),
      onPanScale: this.onPanScale.bind(this),
      getMenuDef: this.getMenuDef.bind(this),
      displaySelectionGroup: this.displaySelectionGroup,
      forceSelection: this.forceSelection,
      offsetY: this.offsetY,
      offsetX: this.offsetX,
      readonly: this.readonly
    }), this.$.svgcontainer);
    this.graphView = this.appView.refs.graph;
  }

  onPanScale = (x, y, scale) => {
    this.set('pan' + ('.' + 0), x);
    this.set('pan' + ('.' + 1), y);
    this.scale = scale;
  }

  onEdgeSelection = (itemKey, item, toggle) => {
    if (itemKey === undefined) {
      if (this.selectedEdges.length > 0) {
        this.selectedEdges = [];
      }
      return;
    }
    if (toggle) {
      var index = this.selectedEdges.indexOf(item);
      var isSelected = index !== -1;
      var shallowClone = this.selectedEdges.slice();
      if (isSelected) {
        shallowClone.splice(index, 1);
        this.selectedEdges = shallowClone;
      } else {
        shallowClone.push(item);
        this.selectedEdges = shallowClone;
      }
    } else {
      this.selectedEdges = [item];
    }
  }

  onNodeSelection = (itemKey, item, toggle) => {
    if (itemKey === undefined) {
      if (this.selectedNodes.length > 0) {
        this.selectedNodes = [];
      }
    } else if (toggle) {
      var index = this.selectedNodes.indexOf(item);
      var isSelected = index !== -1;
      if (isSelected) {
        this.splice('selectedNodes', index, 1);
      } else {
        this.push('selectedNodes', item);
      }
    } else {
      this.selectedNodes = [item];
    }
  }

  selectedNodesChanged = () =>  {
    this.set('selectedNodesHash', {});
    var selectedNodesHash = {};
    for (var i = 0, len = this.selectedNodes.length; i < len; i++) {
      selectedNodesHash[this.selectedNodes[i].id] = true;
    }
    this.set('selectedNodesHash', selectedNodesHash);
    this.fire('nodes', this.selectedNodes);
  }

  selectedNodesHashChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setSelectedNodes(this.selectedNodesHash);
  }

  errorNodesChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setErrorNodes(this.errorNodes);
  }

  selectedEdgesChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setSelectedEdges(this.selectedEdges);
    this.fire('edges', this.selectedEdges);
  }

  animatedEdgesChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setAnimatedEdges(this.animatedEdges);
  }

  iconsChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    Object.keys(this.icons).forEach(function (nodeId) {
      this.graphView.updateIcon(nodeId, this.icons[nodeId]);
    }.bind(this));
  }

  triggerAutolayout = (event) => {
    var graph = this.graph;
    var portInfo = this.graphView ? this.graphView.portInfo : null;
    // Calls the autolayouter
    this.autolayouter.layout({
      'graph': graph,
      'portInfo': portInfo,
      'direction': 'RIGHT',
      'options': {
        'intCoordinates': true,
        'algorithm': 'de.cau.cs.kieler.klay.layered',
        'layoutHierarchy': true,
        'spacing': 36,
        'borderSpacing': 20,
        'edgeSpacingFactor': 0.2,
        'inLayerSpacingFactor': 2,
        'nodePlace': 'BRANDES_KOEPF',
        'nodeLayering': 'NETWORK_SIMPLEX',
        'edgeRouting': 'POLYLINE',
        'crossMin': 'LAYER_SWEEP',
        'direction': 'RIGHT'
      }
    });
  }

  applyAutolayout = (keilerGraph) => {
    this.graph.startTransaction('autolayout');
    TheGraph.autolayout.applyToGraph(this.graph, keilerGraph, { snap: this.snap });
    this.graph.endTransaction('autolayout');
    // Fit to window
    this.triggerFit();
  }

  triggerFit = () =>  {
    if (this.appView) {
      this.appView.triggerFit();
    }
  }

  widthChanged = () =>  {
    if (!this.appView) {
      return;
    }
    this.appView.setState({ width: this.width });
  }

  heightChanged = () =>  {
    if (!this.appView) {
      return;
    }
    this.appView.setState({ height: this.height });
  }

  rerender = (options) => {
    // This is throttled with rAF internally
    if (!this.graphView) {
      return;
    }
    this.graphView.markDirty(options);
  }

  addNode = (id, component, metadata) => {
    if (!this.graph) {
      return;
    }
    this.graph.addNode(id, component, metadata);
  }

  getPan = () =>  {
    if (!this.appView) {
      return [
        0,
        0
      ];
    }
    return [
      this.appView.state.x,
      this.appView.state.y
    ];
  }

  panChanged = () =>  {
    // Send pan back to React
    if (!this.appView) {
      return;
    }
    this.appView.setState({
      x: this.pan[0],
      y: this.pan[1]
    });
  }

  getScale = () =>  {
    if (!this.appView) {
      return 1;
    }
    return this.appView.state.scale;
  }

  displaySelectionGroupChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setState({ displaySelectionGroup: this.displaySelectionGroup });
  }

  forceSelectionChanged = () =>  {
    if (!this.graphView) {
      return;
    }
    this.graphView.setState({ forceSelection: this.forceSelection });
  }

  focusNode = (node) => {
    this.appView.focusNode(node);
  }

  menusChanged = () =>  {
    // Only if the object itself changes,
    // otherwise builds menu from reference every time menu shown
    if (!this.appView) {
      return;
    }
    this.appView.setProps({ menus: this.menus });
  }

  readonlyChanged = () =>  {
    if (!this.appView) {
      return;
    }
    this.appView.setProps({ readonly: this.readonly });
  }

  debounceLibraryRefesh = () =>  {
    // Breaking the "no debounce" rule, this fixes #76 for subgraphs
    if (this.debounceLibraryRefeshTimer) {
      clearTimeout(this.debounceLibraryRefeshTimer);
    }
    this.debounceLibraryRefeshTimer = setTimeout(function () {
      this.rerender({ libraryDirty: true });
    }.bind(this), 200);
  }

  registerComponent = (definition, generated) => {
    var component = this.library[definition.name];
    var def = definition;
    if (component && generated) {
      // Don't override real one with generated dummy
      return;
    }
    this.set('library' + ('.' + definition.name), def);
    // So changes are rendered
    this.debounceLibraryRefesh();
  }

  getComponent = (name) => {
    return this.library[name];
  }

  toJSON = () =>  {
    if (!this.graph) {
      return {};
    }
    return this.graph.toJSON();
  }
  
  render() {
    return (
      <div id="graph">
        <div
          id="svgcontainer"
          menus="{{menus}}"
          width="{{width}}"
          height="{{height}}"
          pan="{{pan}}"
          scale="{{scale}}"
          autolayout="{{autolayout}}"
          readonly="{{readonly}}"
          theme="{{theme}}"
          selected-nodes="{{selectedNodes}}"
          error-nodes="{{errorNodes}}"
          selected-edges="{{selectedEdges}}"
          animated-edges="{{animatedEdges}}"
          display-selection-group="{{displaySelectionGroup}}"
          force-selection="{{forceSelection}}"
          icons="[[icons]]">
        </div>
      </div>
    );
  };
};
