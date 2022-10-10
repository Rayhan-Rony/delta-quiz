import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-extrabold text-blue-600">Delta Quiz</a>
            </div>
            <div className="flex-none text-blue-400 font-bold">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li >
                        <a>Item 2</a>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;