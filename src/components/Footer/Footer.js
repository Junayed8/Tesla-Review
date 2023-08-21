import React from 'react';

const Footer = () => {
    return (
        <div className='homework'>
            <div className='semantic'>
           <h2>Semantic tags</h2>
            <p>The HTML semantics refers to the tags that provide meaning to an 
                HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. 
                This article will focus on ‘What is Semantics in HTML’. 
                The core characteristic of a semantic element is that it clearly communicated
                 its meaning to both the developer and the browser. 
                These elements clearly define its content. </p>
            </div>
            <div className='context'>
                <h2>Context API</h2>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

                    In a typical React application, 
                    data is passed top-down (parent to child) via props, 
                    but such usage can be cumbersome for certain types of props 
                    (e.g. locale preference, UI theme) that are required by many 
                    components within an application. 
                    Context provides a way to share values like these 
                    between components without having to explicitly pass a prop through every level of the tree.
                </p>
            </div>
        </div>
    );
};

export default Footer;