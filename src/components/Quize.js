import React from 'react';
import { toast } from 'react-toastify';
import { AiFillEye } from 'react-icons/ai';

const Quize = ({ singleQuestion }) => {
    const { options, id, correctAnswer, question } = singleQuestion
    // console.log(singleQuestion)
    // console.log(options)
    // console.log(id)
    // console.log(correctAnswer)
    // console.log(question)

    const handleCorrectAnswer = (text) => {
        if (correctAnswer === text) {
            toast.dark('Right Answer', { autoclose: 500 })

        }
        else {
            toast.dark('Wrong Answer', { autoclose: 500 })

        }
        console.log(text)
    }
    const handleViewCorrectAns = () => {
        toast.dark(`The right answer is: ${correctAnswer}`, { autoClose: 2500 })
    }
    // onClick={() => handleCorrectAnswer({ options })}
    return (
        <div className=' bg-blue-100 p-12 rounded-lg m-5'>
            <div className='flex justify-between align-middle'>
                <p className='text-xl font-bold'>Quiz :{question}</p>
                <p className='text-xl' ><AiFillEye onClick={handleViewCorrectAns}></AiFillEye></p>
            </div>


            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-3'>

                <p className='border-solid border-2 border-sky-300 p-5 m-3 rounded text-lg'> <input onClick={() => handleCorrectAnswer(options[0])} type="radio" id={options[0]} name="option" /><label className='ml-2' htmlFor={options[0]} >{options[0]}</label></p>


                <p className='border-solid border-2 border-sky-300 p-5 m-3 rounded text-lg'> <input onClick={() => handleCorrectAnswer(options[1])} type="radio" id={options[1]} name="option" />
                    <label className='ml-2' htmlFor={options[1]} >{options[1]}</label></p>

                <p className='border-solid border-2 border-sky-300 p-5 m-3 rounded text-lg'><input onClick={() => handleCorrectAnswer(options[2])} type="radio" id={options[2]} name="option" />
                    <label className='ml-2' htmlFor={options[2]} >{options[2]}</label></p>

                <p className='border-solid border-2 border-sky-300 p-5 m-3 rounded text-lg'> <input onClick={() => handleCorrectAnswer(options[3])} type="radio" id={options[3] ? options[3] : 'Above All'} name="option" />
                    <label className='ml-2' htmlFor={options[3] ? options[3] : 'Above All'} >{options[3] ? options[3] : "Above All"}</label></p>

            </div>
        </div>
    );
};

export default Quize;