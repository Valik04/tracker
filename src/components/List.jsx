import React from "react";
import moment from "moment";

function List ({ item,deleteTimer}) {

    const [count, setCount] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState(0);
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        const newIntervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        setIntervalId(newIntervalId);
        return () => clearInterval(newIntervalId);
    },[]);

    const handleClick = (e) => {
        e.preventDefault()
        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            setActive(!active)
            return;
        }

        const newIntervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        setIntervalId(newIntervalId);

        setActive(!active)
    }

    return(

        <li className={active ? 'green':'red'}>
            {active ? <span className='name-tracker' >{item.value}</span> : <span className='name-tracker-active'>{item.value}</span>}
            {active ? <span className='time'>{moment().hour(0).minute(0).second(count).format('HH : mm : ss')}</span> : <span className='time-active'>{moment().hour(0).minute(0).second(count).format('HH : mm : ss')}</span>}
            <div className='tracker-buttons'>
                <button onClick={(e) => handleClick(e)}>
                    {intervalId ? <span className="material-symbols-outlined stop">stop_circle</span> : <span className="material-symbols-outlined start">not_started</span>}
                </button>
                <span className="material-symbols-outlined">stop_circle</span>
                <button className='delete' onClick={(e) => deleteTimer(e, item.id)}>
                    <span className="material-symbols-outlined">cancel</span>
                </button>
            </div>
        </li>
    );
}

export default List;






