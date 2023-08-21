import React from 'react';
import './Blog.css';

const Blog = () => {
    // adding blog//
    return (
        <div className='blogs'>
            <div className='blog-1'>
           <p>Our Impact
Our mission is to accelerate the world’s transition to sustainable energy. 
In pursuit of this goal, we build products that are designed to replace some of the 
planet’s biggest polluters – while trying to do the right thing along the way.</p>
            </div>
            <div className='blog-2'>
              <p>The Path to a Sustainable Future
To accomplish this plan, the world’s annual deployment of solar and wind 
and annual production of batteries will need to continue to 
grow dramatically.
 We believe these growth rates are achievable.</p>
            </div>
            <div className='blog-3'>
            <p>Displacing Fossil Fuel Alternatives
Every product we sell helps owners lower emissions. 
Emissions per mile are significantly 
lower in our vehicles than in gas-powered vehicles.</p>
            </div>
        </div>
    );
};

export default Blog;