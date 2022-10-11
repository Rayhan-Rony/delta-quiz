import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ topic, handleStartQuiz }) => {
    const { id, name, logo, total } = topic;

    return (
        <div>
            <div className="card lg:card-side bg-blue-100 shadow-xl mt-8">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className='text-xl'>Click the button to start testing yourself.</p>
                    <div className="card-actions justify-end align-middle">
                        <p>Total Number Of Quizes: {total}</p>
                        <Link to={`/quize/${id}`}> <button className="btn bg-blue-700 hover:bg-blue-500 border-none">Start Test</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;