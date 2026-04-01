import {useState} from 'react';
import {Button} from './components/Button';
import {Input} from './components/Input';

import {Container, Content, Row} from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [calculation, setCalculation] = useState('');

  console.log({
    currentNumber,
    firstNumber,
    operation,
    calculation,
  });

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setCalculation('');
  };

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

  const handleCalculate = (action: string) => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCalculation(`${currentNumber.replace('.', ',')} ${action}`);
      setCurrentNumber('0');
      setOperation(action);
    } else {
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
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      handleCalculate(operation);
    }
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
          <Button label="del" disabled />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="÷" onClick={() => handleCalculate('÷')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={() => handleCalculate('x')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={() => handleCalculate('-')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => handleCalculate('+')} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
