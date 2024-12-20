import React from 'react'
import './Home.css'
import Panel1 from '../Panel1/Panel1.js';
import Panel2 from '../Panel2/Panel2.js';
import Panel3 from '../Panel3/Panel3.js';
import Foot from '../Footer/Foot.js';
import carousel1 from '../../Images/carousel1.jpg';
import carousel2 from '../../Images/carousel2.jpg';
import carousel3 from '../../Images/carousel3.avif';
import carousel4 from '../../Images/carousel4.avif';
import carousel5 from '../../Images/carousel5.avif';
import carousel6 from '../../Images/carousel6.avif';
import carousel7 from '../../Images/carousel7.avif';
import carousel8 from '../../Images/carousel8.avif';
import carousel9 from '../../Images/carousel9.avif';
import carousel10 from '../../Images/carousel10.avif';
import carousel11 from '../../Images/carousel11.avif';
import carousel12 from '../../Images/carousel12.avif';

export default function Home(props) {
    const carouselitems = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
        carousel5,
        carousel6,
        carousel7,
        carousel8,
        carousel9,
        carousel10,
        carousel11,
        carousel12
      ]

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    props.shownav && <div>
        <Panel1 carouselitems={carouselitems}/>
        <Panel2/>
        <Panel3/>

        <Foot/>
        {/* <div className='home flex items-center mt-20 justify-center bg-pink-400 space-x-40 text-xl font-serif tracking-tight pb-5 pr-10 pt-16' style={{backgroundColor: '#F8ECE6'}} id='footer'>
            <h1>Contact us</h1>
            <h1>Quick Categories</h1>
            <h1>Visit</h1>
            <h1>Customer Care</h1>
            <h1>Follow us: </h1>
        </div>
        <div className='home flex text-lg font-mono tracking-tight space-x-16 pr-6 pb-40' style={{backgroundColor: '#F8ECE6'}}>
            <div className='pl-6'>
                Email: <br/>
                <a href='mailto:manishr030405@gmail.com'>manishr030405@gmail.com</a>
                <br/>
                Contact no: <br/>
                <a href='tel:+1234567890'>+1234567890</a>
            </div>
            <div className='list-none text-lg pl-7'>
                <li>Trekking</li>
                <li>Rock Climbing</li>
                <li>Scuba Diving</li>
                <li>Skiee</li>
                <li>Cycling</li>
                <li>Camping</li>
            </div>
            <div className='list-none text-lg pl-16'>
                <li>Our Blogs</li>
                <li>Popular Places</li>
                <li>Nearby Places</li>
                <li>New Places</li>
            </div>
            <div className='list-none text-lg pl-12'>
                <li>FAQs</li>
                <li>Privacy Policies</li>
                <li>Terms of Services</li>
                <li>About</li>
            </div>
            <div className='flex text-lg pl-20 space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#080808" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            <a href='https://github.com/Manishr345'>Manishr345</a>
            </div>
    </div> */}
    </div>
  )
}
