import React from 'react';
import { InnerBlocks } from './types';
interface BlockRendererProps {
    blockMap: Record<string, React.ComponentType<Record<string, unknown>>>;
    innerBlocks: InnerBlocks[];
}
export declare const BlockRenderer: React.FC<BlockRendererProps>;
export default BlockRenderer;
