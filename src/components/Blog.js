import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 m-auto p-5 '>
            <div className='mt-12 p-5 rounded  bg-blue-100'>
                <p className='text-2xl font-bold mb-2'>Q:1 What is the purpose of react router?</p>
                <p>Ans:Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='mt-12 p-5 rounded  bg-blue-100'>
                <p className='text-2xl font-bold mb-2'>Q:2 How does context Api works?</p>
                <p>Ans:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mt-12 p-5 rounded  bg-blue-100'>
                <p className='text-2xl font-bold mb-2'>Q:3 What is useRef hook in react?</p>
                <p>Ans:The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;