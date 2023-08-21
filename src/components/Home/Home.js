import React from 'react';
import './Home.css';
import useReview from '../hook/useReview';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';



const Home = () => {
    const [review, setReview]= useReview([]);
    return (
        <div className='container'>
           <div className='home-container'>
           <div className='description'>
                  <h4>We design sustainable systems that are massively scalable—resulting in the greatest 
                    environmental benefit possible. 
                    Our energy generation and storage products work 
                    together with our electric vehicles to amplify their impact.</h4>

                    <button>Know more</button>
                </div>
                <div className='tesla'>
                    <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg'></img>
                </div>
           </div>
           <Blog></Blog>
           <Footer></Footer>
              
        </div>
        
    );
};

export default Home;