import {FC} from 'react';
import {InputContainer} from './styles';

const Input: FC<{value: string; calculation: string}> = ({
  value,
  calculation,
}) => {
  return (
    <InputContainer>
      {calculation && (
        <div>
          <span>{calculation}</span>
        </div>
      )}
      <input disabled value={value} />
    </InputContainer>
  );
};

export {Input};
