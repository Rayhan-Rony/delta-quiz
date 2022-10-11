import React from 'react';
import { useLoaderData } from 'react-router-dom'
import QuizTopic from './QuizTopic';

const Home = () => {
    const quizesData = useLoaderData()
    // console.log(quizesData.data)
    const quizesTopic = quizesData.data

    const handleStartQuiz = (id) => {
        console.log(id)
    }
    return (
        <div className='mt-12 lg:w-3/4 m-auto'>
            <h1 className='font-bold text-7xl text-center'>Test Yourself As A Pro Developer</h1>
            <div className='mt-20'>
                {
                    quizesTopic.map(topic => <QuizTopic key={topic.id} topic={topic} handleStartQuiz={handleStartQuiz}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;