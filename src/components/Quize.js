import React, { useState } from 'react';

const Quize = ({ singleQuestion }) => {
    const { options, id, correctAnswer, question } = singleQuestion
    // console.log(singleQuestion)
    // console.log(options)
    // console.log(id)
    // console.log(correctAnswer)
    // console.log(question)

    const handleCorrectAnswer = (text) => {
        if (text === correctAnswer) {
            console.log('parcho')
        }
        else {
            console.log('Paro nai hehe')
        }
        // console.log(text)
    }
    // onClick={() => handleCorrectAnswer({ options })}
    return (
        <div className=' bg-blue-100 p-12'>
            <p>Quiz :{question}</p>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-3'>

                <p onClick={() => handleCorrectAnswer(options[0])}> <input type="radio" id={options[0]} name="option" /><label htmlFor={options[0]} >{options[0]}</label></p>


                <p onClick={() => handleCorrectAnswer(options[1])}> <input type="radio" id={options[1]} name="option" />
                    <label htmlFor={options[1]} >{options[1]}</label></p>

                <p onClick={() => handleCorrectAnswer(options[2])}><input type="radio" id={options[2]} name="option" />
                    <label htmlFor={options[2]} >{options[2]}</label></p>

                <p onClick={() => handleCorrectAnswer(options[3])}> <input type="radio" id={options[3]} name="option" />
                    <label htmlFor={options[3]} >{options[3] ? options[3] : "Above All"}</label></p>



            </div>
        </div>
    );
};

export default Quize;