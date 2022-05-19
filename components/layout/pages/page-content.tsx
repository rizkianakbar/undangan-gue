import * as React from 'react';
import { Container } from '../container';

export const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 px-4 pb-1">
      <Container>{children}</Container>
    </div>
  );
};
