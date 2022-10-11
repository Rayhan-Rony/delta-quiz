import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from './Quize';

const Quizes = () => {
    const quizesInfo = useLoaderData()
    // console.log(quizesInfo)
    const quizes = quizesInfo.data
    // console.log(quizes)
    const { name, questions } = quizes;
    // console.log(questions)

    return (
        <div className='w-1/2 m-auto mt-20'>
            <h1 className='text-3xl font-bold text-center'> Quize Of {name}</h1>
            {
                questions.map(singleQuestion => <Quize key={singleQuestion.id} singleQuestion={singleQuestion}></Quize>)
            }
        </div>
    );
};

export default Quizes;