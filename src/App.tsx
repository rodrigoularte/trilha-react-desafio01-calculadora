import {useState} from 'react';
import {Button} from './components/Button';
import {Input} from './components/Input';

import {Container, Content, Row} from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleAddNumber = (num: string) => {
    setCurrentNumber((prev) => {
      if (num === '.' && prev.includes('.')) {
        return prev;
      }

      if (num === '.' && prev === '0') {
        return '0.';
      }

      return `${prev === '0' ? '' : prev}${num}`;
    });
  };

  const handleCalculation = (action: string) => {
    if (operation === '') {
      setOperation(action);
      setCalculation(`${currentNumber.replace('.', ',')} ${action}`);
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      return;
    }

    if (action !== operation) {
      setOperation(action);

      setCalculation(`${firstNumber.replace('.', ',')} ${action}`);
      return;
    }
  };

  const getResult = (action: string) => {
    switch (action) {
      case '+':
        const addition = Number(firstNumber) + Number(currentNumber);
        setCalculation(`${calculation} ${currentNumber} =`);
        setCurrentNumber(String(addition));
        setOperation('');
        break;
      case '-':
        const subtraction = Number(firstNumber) - Number(currentNumber);
        setCalculation(`${calculation} ${currentNumber} =`);
        setCurrentNumber(String(subtraction));
        setOperation('');
        break;
      case 'x':
        const multiplication = Number(firstNumber) * Number(currentNumber);
        setCalculation(`${calculation} ${currentNumber} =`);
        setCurrentNumber(String(multiplication));
        setOperation('');
        break;
      case '÷':
        const division = Number(firstNumber) / Number(currentNumber);
        setCalculation(`${calculation} ${currentNumber} =`);
        setCurrentNumber(String(division));
        setOperation('');
        break;
      default:
        break;
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      getResult(operation);
    }
  };

  const handleOnDelete = () => {
    setCurrentNumber((prev) => {
      if (prev.length === 1) {
        return '0';
      }

      return prev.slice(0, -1);
    });
  };

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setCalculation('');
  };

  return (
    <Container>
      <Content>
        <Input
          value={currentNumber.replace('.', ',')}
          calculation={calculation}
        />
        <Row>
          <Button label="sqr" disabled />
          <Button label="%" disabled />
          <Button label="c" onClick={handleOnClear} />
          <Button label="del" onClick={handleOnDelete} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="÷" onClick={() => handleCalculation('÷')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={() => handleCalculation('x')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={() => handleCalculation('-')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => handleCalculation('+')} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
