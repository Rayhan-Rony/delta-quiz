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
        <div className=' lg:mt-20 sm:mt-16 md:mt-16 lg:w-1/2 lg:m-auto'>
            <h1 className='text-3xl font-bold text-center'> Quize Of {name}</h1>
            {
                questions.map(singleQuestion => <Quize key={singleQuestion.id} singleQuestion={singleQuestion}></Quize>)
            }
        </div>
    );
};

export default Quizes;