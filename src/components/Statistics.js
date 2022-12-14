import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { QuizTopicDataContext } from './Root';
const Statistics = () => {
    const quizesData = useContext(QuizTopicDataContext)
    const data = quizesData.data
    return (
        <div >
            <h1 className='text-2xl font-bold text-center mt-6'>Here we go for some statistics</h1>
            <ResponsiveContainer className="lg:m-auto" width="70%" height={573}>
                <BarChart width={700} height={400} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;