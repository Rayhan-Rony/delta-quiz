import React, { useContext } from 'react';
import QuizTopic from './QuizTopic';
import { QuizTopicDataContext } from './Root';

const Home = () => {
    const quizesData = useContext(QuizTopicDataContext)
    const quizesTopic = quizesData.data
    return (
        <div className='mt-12 lg:w-3/4 m-auto'>
            <h1 className='font-bold text-7xl text-center'>Test Yourself As A Pro Developer</h1>
            <div className='mt-20'>
                {
                    quizesTopic.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;