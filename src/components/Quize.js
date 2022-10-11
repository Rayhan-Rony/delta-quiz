import React from 'react';


const Quize = ({ singleQuestion }) => {
    const { options, id, correctAnswer, question } = singleQuestion
    console.log(options)
    // console.log(id)
    // console.log(correctAnswer)
    // console.log(question)
    return (
        <div>
            <p>{question}</p>

            <div className='grid grid-cols-2'>
                <p><input type="radio" name={id} />
                    <label >{options[0]}</label></p>
                <p> <input type="radio" name={id} />
                    <label >{options[1]}</label></p>
                <p><input type="radio" name={id} />
                    <label >{options[2]}</label></p>
                <p> <input type="radio" name={id} />
                    <label >{options[3] ? options[3] : "Above All"}</label></p>



            </div>
        </div>
    );
};

export default Quize;