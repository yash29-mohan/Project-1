import React from 'react';
import vg from '../assests/2.webp';
import {AiFillAmazonCircle, AiFillGoogleCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
        <div className='home1' id='home'>
            <main> 
                <h1>ProjectONE!</h1>
                <p>Solution to my project idea</p>
            </main>
            
        </div>
        <div className="home2">
            <img src={vg} alt='Graphics' />
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam cupiditate eius animi facere ex cumque quidem iure, voluptate perferendis reiciendis inventore commodi sit voluptas error incidunt eveniet cum molestiae!</p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas nostrum nesciunt architecto officia dicta quia et, sed aperiam aspernatur voluptates alias. Dolorum laborum ducimus corrupti dolores culpa deserunt delectus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio magnam eaque delectus dolor corporis explicabo sit vel! Voluptatem quibusdam adipisci et exercitationem reiciendis sint aspernatur neque perspiciatis praesentium modi.
                </p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div 
                        style={{ 
                            animationDelay: "0.5s" 
                            }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div 
                        style={{ 
                            animationDelay: "1s" 
                            }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div 
                        style={{ 
                            animationDelay: "1.5s" 
                            }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div 
                        style={{ 
                            animationDelay: "2s" 
                            }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
        </>
    );
};

export default Home;