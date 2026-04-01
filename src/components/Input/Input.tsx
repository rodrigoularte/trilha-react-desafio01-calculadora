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
      <input type="text" value={value} disabled />
    </InputContainer>
  );
};

export {Input};
