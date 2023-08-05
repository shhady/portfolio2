import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './home.css';
import Header from "../../components/header/Header"
import Services from '../services/Services';
import Experience from '../experience/Experience';
import Technologies from '../technologies/Technologies';
function Home() {
  const parallaxRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentPage < 3) {
      // User scrolled down and there's a next section
      parallaxRef.current.scrollTo(currentPage + 1);
      setCurrentPage(currentPage + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      // User scrolled up and there's a previous section
      parallaxRef.current.scrollTo(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSectionClick = (nextPage) => {
    // Move to the clicked section
    parallaxRef.current.scrollTo(nextPage, { onComplete: () => {
      setCurrentPage(nextPage);
      if (nextPage === 0) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    } });
  };

  return (
    <>
<Header currentPage={currentPage} handleSectionClick={handleSectionClick}  />
        
   
    <div onWheel={handleWheel}>
      <Parallax pages={4} style={{ top: '0', left: '0' }} ref={parallaxRef} config={{ clamp: false }}>
        <ParallaxLayer offset={0} speed={0.1} onClick={() => handleSectionClick(1)} id='FirstSection'>
          <div className='animation_layer1' id='id1'>
            <div className='aninamtionTopCorner'></div>
            <div className='aninamtionBottomCorner'></div>
            {/* <Header currentPage={currentPage} handleSectionClick={handleSectionClick} /> */}
            <div className='jobFirstLayer'>
          <h2>Full Stack <br/> Web Developer</h2>
         <p> I'm a dedicated Web Developer, specializing in innovative web solutions. With expertise in responsive websites, dynamic apps, and scalable backends, I'm committed to impactful, technology-driven results. Let's collaborate and elevate your online presence with creativity and excellence.</p>
          </div>
          {/* <div className='imageEtoro'></div> */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <div className='animation_layer parallax' id='about'>
            <Services />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1} >
          <div className='animation_layer parallax' id='workExp'>
           <Experience />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.1} >
          <div className='animation_layer parallax' id='projects'>
            <Technologies />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    </>
  );
}

export default Home;
