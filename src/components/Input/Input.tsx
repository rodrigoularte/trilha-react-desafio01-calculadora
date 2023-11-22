import {FC} from 'react';
import {InputContainer} from './styles';

const Input: FC<{value: string}> = ({value}) => {
  return (
    <InputContainer>
      {/* <div>
        <span>{'5+5'}</span>
      </div> */}
      <input disabled value={value} />
    </InputContainer>
  );
};

export {Input};
