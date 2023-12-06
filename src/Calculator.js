import './styles/Calculator.css';
import Screen from './Screen'

function Calculator() {

    return (
        <div className='calculator'>
            <Screen />
            <div className='grid'>
                <button className='btn btn-wide btn-AC'>AC</button>
                <button className='btn btn-bold'>/</button>
                <button className='btn btn-bold'>X</button>
                <button className='btn'>7</button>
                <button className='btn'>8</button>
                <button className='btn'>9</button>
                <button className='btn btn-bold'>-</button>
                <button className='btn'>4</button>
                <button className='btn'>5</button>
                <button className='btn'>6</button>
                <button className='btn btn-bold'>+</button>
                <button className='btn'>1</button>
                <button className='btn'>2</button>
                <button className='btn'>3</button>
                <button className='btn btn-tall btn-bold'>=</button>
                <button className='btn btn-wide'>0</button>
                <button className='btn' style={{fontSize: '36px'}}>.</button>
            </div>
        </div>
    );
}

export default Calculator;