import React from 'react';
import { BlockNodeProps } from './types';

export const Fragment: React.FC<BlockNodeProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index,
  children,
  ...rest
}: React.PropsWithChildren<BlockNodeProps>) => {
  return <React.Fragment {...rest}>{children}</React.Fragment>;
};
