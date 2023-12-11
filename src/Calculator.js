import './styles/Calculator.css';
import Screen from './Screen'
import { useState } from 'react'

function Calculator() {

    const [stack, setStack] = useState('');
    const [result, setResult] = useState('');
    const [currentOp, setCurrentOp] = useState(null);

    const ops = ['+', '-', '*', '/', '.'];

    const pushToStack = (val) => {
        if (!ops.includes(val)) {
            setStack(stack.concat(val)); return;
        }
        if (val === '.') {
            if (stack.includes('.')) return;
            else { setStack(stack.concat('.')); return; }
        }
        setCurrentOp(val);
        setResult(stack);
        setStack('');
    }

    const clearAll = () => {
        setResult('');
        setStack('');
    }

    const equals = () => {
        let output = 0, num1 = +result, num2 = +stack;
        switch (currentOp) {
            case '+':
                output = num1 + num2;
                break;
            case '-':
                output = num1 - num2;
                break;
            case '*':
                output = num1 * num2;
                break;
            case '/':
                output = num1 / num2;
                break;
            default: break;
        }
        setResult(output);
        setCurrentOp(null);
        setStack('');
    }

    return (
        <div className='calculator'>
            <Screen screenText={stack || currentOp || result || '00'}/>
            <div className='grid'>
                <button id='clear'    onClick={clearAll}  className='btn btn-wide'>AC</button>
                <button id='divide'   onClick={() => pushToStack('/')}  className='btn btn-bold'>/</button>
                <button id='multiply' onClick={() => pushToStack('*')}  className='btn btn-bold'>X</button>
                <button id='seven'    onClick={() => pushToStack('7')}  className='btn'>7</button>
                <button id='eight'    onClick={() => pushToStack('8')}  className='btn'>8</button>
                <button id='nine'     onClick={() => pushToStack('9')}  className='btn'>9</button>
                <button id='subtract' onClick={() => pushToStack('-')}  className='btn btn-bold'>-</button>
                <button id='four'     onClick={() => pushToStack('4')}  className='btn'>4</button>
                <button id='five'     onClick={() => pushToStack('5')}  className='btn'>5</button>
                <button id='six'      onClick={() => pushToStack('6')}  className='btn'>6</button>
                <button id='add'      onClick={() => pushToStack('+')}  className='btn btn-bold'>+</button>
                <button id='one'      onClick={() => pushToStack('1')}  className='btn'>1</button>
                <button id='two'      onClick={() => pushToStack('2')}  className='btn'>2</button>
                <button id='three'    onClick={() => pushToStack('3')}  className='btn'>3</button>
                <button id='equals'   onClick={equals}  className='btn btn-tall btn-bold'>=</button>
                <button id='zero'     onClick={() => pushToStack('0')}  className='btn btn-wide'>0</button>
                <button id='decimal'  onClick={() => pushToStack('.')}  className='btn' style={{fontSize: '36px'}}>.</button>
            </div>
        </div>
    );
}

export default Calculator;