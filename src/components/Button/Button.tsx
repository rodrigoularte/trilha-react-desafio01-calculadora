import {FC} from 'react';
import {ButtonContainer} from './styles';

const Button: FC<{label: string; onClick?: () => void}> = ({
  label,
  onClick,
}) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
};

export {Button};
