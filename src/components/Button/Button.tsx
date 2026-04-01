import {FC} from 'react';
import {ButtonContainer} from './styles';

type Props = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<Props> = ({label, disabled = false, onClick}) => {
  return (
    <ButtonContainer onClick={onClick} type="button" disabled={disabled}>
      {label}
    </ButtonContainer>
  );
};

export {Button};
