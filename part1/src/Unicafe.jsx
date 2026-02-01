import { useState } from 'react'

const Unicafe = () => {
    const [feedbacks, setFeedbacks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleFeedback = (key) => {
        setFeedbacks((prev) => ({
            ...prev,
            [key]: prev[key] + 1,
        }));
    }

    const total = Object.values(feedbacks).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div>
            <h2>Give Feedback</h2>
            <div>
                <Button text="good" handleClick={handleFeedback} />
                <Button text="neutral" handleClick={handleFeedback} />
                <Button text="bad" handleClick={handleFeedback} />
            </div>

            <h2>Statistics</h2>
            {total > 0 && Object.entries(feedbacks).map(([key, value]) => {
                return (
                    <div key={key}>{key}: {value}</div>
                )
            })}
            {total > 0 && <p>all: {total}</p>}

            <Statistics feedbacks={feedbacks} total={total} />
        </div>
    )
}


const Button = ({ text, handleClick }) => {
    return <button key={text} onClick={() => handleClick(text)}>{text}</button>
}

const Statistics = ({ feedbacks, total }) => {

    return (
        <>
            {total === 0
                ? 'No feedback given'
                : <div>
                    <p>average: {((feedbacks['good'] - feedbacks['bad']) / total) || 0}</p>
                    <p>positive: {((feedbacks['good'] / total) * 100) || 0} %</p>
                </div>
            }
        </>
    )
}

export default Unicafe
