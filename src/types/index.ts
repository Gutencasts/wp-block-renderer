export type StringOrArray<T> = T | StringOrArray<T>[];

export interface InnerBlocks {
  blockName: string;
  attrs: Record<string, unknown>;
  innerBlocks?: StringOrArray<InnerBlocks | string>;
  innerHTML?: string;
}

export interface BlocksTree {
  root: InnerBlocks;
}

export interface BlockNodeProps {
  blockName: string;
  children: Array<InnerBlocks>;
  innerHTML?: string;
  index?: number;
  blockMap: Record<string, React.ComponentType<Record<string, unknown>>>;
  blocksUtilizingSubtree: string[];
}
