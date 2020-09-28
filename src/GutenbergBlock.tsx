import React from 'react';
import Interweave from 'interweave';
import { BlockNodeProps, InnerBlocks } from './types';

interface HtmlBlockProps {
  html: string;
}

const HtmlBlock = ({ html }: HtmlBlockProps): JSX.Element => {
  return <Interweave noWrap={true} content={html} />;
};

export default function GutenbergBlock({
  blockName,
  innerHTML,
  blockMap,
  blocksUtilizingSubtree,
  children,
  ...props
}: BlockNodeProps): JSX.Element {
  let ConcreteBlockComponent: React.ElementType;

  if (blockMap[blockName]) {
    ConcreteBlockComponent = blockMap[blockName];
  } else {
    ConcreteBlockComponent = HtmlBlock;
  }

  // base case A: static block or raw html
  if (innerHTML) {
    return <ConcreteBlockComponent {...props} html={innerHTML} blockName={blockName} />;
  }

  // base case B: dynamic block with no more descedents
  if (!children || children.length === 0) {
    return <ConcreteBlockComponent {...props} blockName={blockName} />;
  }

  // recursive case: dynamic block with more descedents.
  return (
    <ConcreteBlockComponent
      {...(blocksUtilizingSubtree.includes(blockName) && children ? { tree: children } : null)}
      {...props}
    >
      {children.map((child, key) => (
        <GutenbergBlock
          blockName={child.blockName}
          innerHTML={child.innerHTML}
          {...child.attrs}
          index={key}
          key={key}
          blockMap={blockMap}
          blocksUtilizingSubtree={blocksUtilizingSubtree}
        >
          {child.innerBlocks as InnerBlocks[]}
        </GutenbergBlock>
      ))}
    </ConcreteBlockComponent>
  );
}
