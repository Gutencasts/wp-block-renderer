import React from 'react';
import GutenbergBlock from './GutenbergBlock';
import { InnerBlocks } from './types';

interface BlockRendererProps {
  blockMap: Record<string, React.ComponentType<Record<string, unknown>>>;
  innerBlocks: InnerBlocks[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({
  blockMap,
  innerBlocks,
}: BlockRendererProps) => {
  return (
    <GutenbergBlock blocksUtilizingSubtree={[]} blockMap={blockMap} blockName="fragment">
      {innerBlocks}
    </GutenbergBlock>
  );
};

export default BlockRenderer;
