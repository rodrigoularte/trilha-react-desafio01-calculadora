import {FC} from 'react';
import {InputContainer} from './styles';

const Input: FC<{value: string}> = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export {Input};
