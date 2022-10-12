import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from './Quize';
import { RightContext, WrongContext } from './Root';
import '../App.css'

const Quizes = () => {
    const [right] = useContext(RightContext)
    const [wrong] = useContext(WrongContext)
    const quizesInfo = useLoaderData()
    const quizes = quizesInfo.data
    const { name, questions } = quizes;
    let count = 1;
    return (
        <div className='container-grid lg:mt-20 sm:mt-16'>
            <div className='lg:ml-[200px]'>
                <h1 className='text-3xl font-bold text-center'> Quiz Of {name}</h1>
                {
                    questions.map(singleQuestion => <Quize count={count++} key={singleQuestion.id} singleQuestion={singleQuestion}></Quize>)
                }
            </div>
            <div>
                <div className='p-10 bg-blue-200 rounded'>
                    <h2 className='text-2xl font-bold m-5 md:text-center sm:text-center'>Test Results</h2>
                    <p className='text-lg '>Correct Answer:{right} </p>
                    <p className='text-lg '>Wrong Answer:{wrong} </p>
                </div>
            </div>
        </div>
    );
};

export default Quizes;