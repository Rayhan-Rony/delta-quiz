import React, { createContext, useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

export const RightContext = createContext()
export const WrongContext = createContext()

const Root = () => {
    const [right, setRight] = useState(0)
    // console.log(right);
    const [wrong, setWrong] = useState(0)
    console.log(wrong)
    return (

        <WrongContext.Provider value={[wrong, setWrong]}>
            <RightContext.Provider value={[right, setRight]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </RightContext.Provider>
        </WrongContext.Provider>



    );
};

export default Root;