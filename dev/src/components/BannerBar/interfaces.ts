import { RefObject } from 'react';

export interface IProps {
  refData: RefObject<HTMLDivElement>;
  onClose: () => void;
}
