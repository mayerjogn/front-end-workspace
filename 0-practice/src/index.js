import React from 'react';
import ReactDOM from 'react-dom/client';
import PostMain from './components/PostMain';
import PostBtn from './components/PostBtn';
import PostHead from './components/PostHead';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <PostHead/>
    <PostMain />
        <PostBtn />
    </>
);


