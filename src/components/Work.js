import React, { useState, useContext } from 'react';
import { Context } from '../App';

const Work = ({ id, work }) => {
    const [time, setTime] = useState('00:00');
    const [timer, setTimer] = useState(false);
    const { works, setWorks } = useContext(Context);

    const startTimer = () => {
        if (timer === false) {
            alert("timer started!");
            setTimer(true);
            setTime('00:00');
        } else {
            alert("timer stoped!");
            setTimer(false);
            setTime('00:00');
        }
    }
    const removeWork = () => {
        setWorks(works.filter((works) => works.id !== id));
    }

    return (
        <>
            <div className="work">
                <p>{work}</p>
                <div className="action-buttons">
                    <button onClick={removeWork}><img src="delete.png" className='work-logo' alt="delete" /></button>
                    <button onClick={startTimer}>{time}</button>
                </div>
            </div>
        </>
    )
}

export default Work;
