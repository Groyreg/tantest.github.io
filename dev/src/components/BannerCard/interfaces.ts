import { RefObject } from 'react';

export interface IProps {
  refData: RefObject<HTMLDivElement>;
  isCardVisible: boolean;
  onClose: () => void;
}

export interface IStyles {
  isCardVisible: boolean;
}
