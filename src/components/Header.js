import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-100 px-20">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-extrabold text-blue-600">Delta Quiz</a>
            </div>
            <div className="flex-none text-blue-400 font-bold">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Topics</a></li>
                    <li >
                        <a>Statistics</a>
                    </li>
                    <li><a>Blog</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;