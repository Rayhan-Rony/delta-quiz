import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gray-100 lg:px-20">
            <div className="flex-1">
                <Link to="/home"><button className="btn btn-ghost normal-case text-3xl font-extrabold text-blue-600">Delta Quiz</button></Link>
            </div>
            <div className="flex-none text-blue-400 font-bold">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li >
                        <Link to='/statistics'>Statistics</Link>
                    </li>
                    <li>
                        <Link to='/blog'> Blog</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Header;