import './styles/Calculator.css';
import Screen from './Screen'

function Calculator() {

    return (
        <div className='calculator'>
            <Screen />
            <div className='grid'>
                <button id='clear' className='btn btn-wide btn-AC'>AC</button>
                <button id='divide' className='btn btn-bold'>/</button>
                <button id='multiply' className='btn btn-bold'>X</button>
                <button id='seven' className='btn'>7</button>
                <button id='eight' className='btn'>8</button>
                <button id='nine' className='btn'>9</button>
                <button id='subtract' className='btn btn-bold'>-</button>
                <button id='four' className='btn'>4</button>
                <button id='five' className='btn'>5</button>
                <button id='six' className='btn'>6</button>
                <button id='add' className='btn btn-bold'>+</button>
                <button id='one' className='btn'>1</button>
                <button id='two' className='btn'>2</button>
                <button id='three' className='btn'>3</button>
                <button id='equals' className='btn btn-tall btn-bold'>=</button>
                <button id='zero' className='btn btn-wide'>0</button>
                <button id='decimal' className='btn' style={{fontSize: '36px'}}>.</button>
            </div>
        </div>
    );
}

export default Calculator;