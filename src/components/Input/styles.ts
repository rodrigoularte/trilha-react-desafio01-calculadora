import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 75px;

  font-size: 24px;
  font-family: 'Roboto';

  div {
    display: flex;
    width: 100%;
    font-size: 16px;
    justify-content: flex-end;
  }

  input {
    width: 100%;
    height: 50px;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 24px;
    font-family: 'Roboto';
    color: black;

    text-align: right;
  }
`;
