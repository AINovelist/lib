'use client';
import { ReactNode } from 'react';
const ClientOnlyWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
export default ClientOnlyWrapper;
