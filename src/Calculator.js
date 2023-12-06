import './styles/Calculator.css';
import Screen from './Screen'

function Calculator() {

    return (
        <div className='calculator'>
            <Screen />
            <div className='grid'>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
                <button className='btn'>#</button>
            </div>
        </div>
    );
}

export default Calculator;