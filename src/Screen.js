import './styles/Screen.css';

function Screen( {screenText}) {

    return (
        <div className='screen'>
            <h4 id='display'>{screenText}</h4>
        </div>
    );
}

export default Screen;