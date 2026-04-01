import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px;
  border: 1px solid #cdcdcd;
  background-color: #ffffff;
  color: black;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #dfdfdf;
  }
`;
