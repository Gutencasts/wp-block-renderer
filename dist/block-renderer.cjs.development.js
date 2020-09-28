'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Interweave = _interopDefault(require('interweave'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var HtmlBlock = function HtmlBlock(_ref) {
  var html = _ref.html;
  return React.createElement(Interweave, {
    noWrap: true,
    content: html
  });
};

function GutenbergBlock(_ref2) {
  var blockName = _ref2.blockName,
      innerHTML = _ref2.innerHTML,
      blockMap = _ref2.blockMap,
      blocksUtilizingSubtree = _ref2.blocksUtilizingSubtree,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["blockName", "innerHTML", "blockMap", "blocksUtilizingSubtree", "children"]);

  var ConcreteBlockComponent;

  if (blockMap[blockName]) {
    ConcreteBlockComponent = blockMap[blockName];
  } else {
    ConcreteBlockComponent = HtmlBlock;
  } // base case A: static block or raw html


  if (innerHTML) {
    return React.createElement(ConcreteBlockComponent, Object.assign({}, props, {
      html: innerHTML,
      blockName: blockName
    }));
  } // base case B: dynamic block with no more descedents


  if (!children || children.length === 0) {
    return React.createElement(ConcreteBlockComponent, Object.assign({}, props, {
      blockName: blockName
    }));
  } // recursive case: dynamic block with more descedents.


  return React.createElement(ConcreteBlockComponent, Object.assign({}, blocksUtilizingSubtree.includes(blockName) && children ? {
    tree: children
  } : null, props), children.map(function (child, key) {
    return React.createElement(GutenbergBlock, Object.assign({
      blockName: child.blockName,
      innerHTML: child.innerHTML
    }, child.attrs, {
      index: key,
      key: key,
      blockMap: blockMap,
      blocksUtilizingSubtree: blocksUtilizingSubtree
    }), child.innerBlocks);
  }));
}

var BlockRenderer = function BlockRenderer(_ref) {
  var blockMap = _ref.blockMap,
      innerBlocks = _ref.innerBlocks;
  return React.createElement(GutenbergBlock, {
    blocksUtilizingSubtree: [],
    blockMap: blockMap,
    blockName: "fragment"
  }, innerBlocks);
};

exports.BlockRenderer = BlockRenderer;
exports.default = BlockRenderer;
//# sourceMappingURL=block-renderer.cjs.development.js.map
