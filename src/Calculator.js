import './styles/Calculator.css';
import Screen from './Screen'
import { useState, useEffect } from 'react'

function Calculator() {

    const [total, setTotal] = useState(0);
    const [screenText, setScreenText] = useState('')
    const [numberStr, setNumberStr] = useState('');
    const [number, setNumber] = useState(0);

    useEffect( () => {
        if(numberStr !== 0) setScreenText(numberStr);
    }, [numberStr]);

    useEffect( () => {
        setScreenText('0');
    }, []);
    
    const clear = () => {
        setTotal(0);
        setNumberStr('');
        setScreenText('0');
    };

    const pushDigit = (digit) => {
        setNumberStr(numberStr.concat(digit));
    };

    const parseNumberStr = () => {
        if (isNaN(+numberStr)) {
            console.log('numberStr NaN error');
            return;
        }
        setNumber(+numberStr);
        console.log('Number str parsed: ' + number);
    }

    const add = () => {
        if (numberStr === '') {
            // error
        }
        parseNumberStr();

    };

    return (
        <div className='calculator'>
            <Screen screenText={screenText}/>
            <div className='grid'>
                <button id='clear' className='btn btn-wide' onClick={clear}>AC</button>
                <button id='divide' className='btn btn-bold'>/</button>
                <button id='multiply' className='btn btn-bold'>X</button>
                <button id='seven' className='btn' onClick={() => pushDigit(7)}>7</button>
                <button id='eight' className='btn' onClick={() => pushDigit(8)}>8</button>
                <button id='nine' className='btn' onClick={() => pushDigit(9)}>9</button>
                <button id='subtract' className='btn btn-bold'>-</button>
                <button id='four' className='btn' onClick={() => pushDigit(4)}>4</button>
                <button id='five' className='btn' onClick={() => pushDigit(5)}>5</button>
                <button id='six' className='btn' onClick={() => pushDigit(6)}>6</button>
                <button id='add' className='btn btn-bold'>+</button>
                <button id='one' className='btn' onClick={() => pushDigit(1)}>1</button>
                <button id='two' className='btn' onClick={() => pushDigit(2)}>2</button>
                <button id='three' className='btn' onClick={() => pushDigit(3)}>3</button>
                <button id='equals' className='btn btn-tall btn-bold'>=</button>
                <button id='zero' className='btn btn-wide' onClick={() => pushDigit(0)}>0</button>
                <button id='decimal' className='btn' style={{fontSize: '36px'}} onClick={() => pushDigit('.')}>.</button>
            </div>
        </div>
    );
}

export default Calculator;