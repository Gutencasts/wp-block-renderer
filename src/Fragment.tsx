import React from 'react';
import { BlockNodeProps } from './types';

export const Fragment: React.FC<BlockNodeProps> = ({
  children,
}: React.PropsWithChildren<BlockNodeProps>) => {
  return <React.Fragment>{children}</React.Fragment>;
};
