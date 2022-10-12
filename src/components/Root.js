import React, { createContext, useState } from 'react';
import Header from './Header';
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './Footer';

export const RightContext = createContext()
export const WrongContext = createContext()
export const QuizTopicDataContext = createContext({})

const Root = () => {
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const quizTopicData = useLoaderData({})
    return (
        <QuizTopicDataContext.Provider value={quizTopicData}>
            <WrongContext.Provider value={[wrong, setWrong]}>
                <RightContext.Provider value={[right, setRight]}>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </RightContext.Provider>
            </WrongContext.Provider>
        </QuizTopicDataContext.Provider>

    );
};

export default Root;