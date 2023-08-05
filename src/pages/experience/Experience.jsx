import React, { useState } from 'react';
import './exp.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Experience() {
  const [page, setPage] = useState(1);

  return (
    <div className='experience'>
      <div className='aninamtionTopCornerExp'></div>
      <div className='content'>
        <h2>Work Experience</h2>
        <div style={{width:"90%", margin:"auto"}}>
          {page === 1 ? (
            <div className='arrowExp' onClick={() => setPage(2)}>
              <FaArrowRight />more
            </div>
          ) : (
            <div className='arrowExp' onClick={() => setPage(1)}>
              <FaArrowLeft />back
            </div>
          )}
        </div>
        {page === 1 ? (
          <div className='exp12'>
            <div className="exp1">
              <h3>2022-Present</h3>
              <h3>Full Stack Development Teacher</h3>
              <p>Inspiring the next generation of web developers through engaging and comprehensive teaching. Designed and delivered curriculum covering both front-end and back-end technologies. Guided students in building practical projects, fostering critical thinking and hands-on skills.</p>
            </div>
            <div className="exp2">
              <h3>2021-Present</h3>
              <h3>Freelance Full Stack Developer</h3>
              <p>Delivering bespoke web solutions for clients worldwide. Developed responsive and user-centric websites and applications utilizing cutting-edge technologies. Collaborated closely with clients to understand their needs, implement solutions, and ensure seamless functionality.</p>
            </div>
          </div>
        ) : (
          <div className="exp3">
            <h3>2015-2020</h3>
            <h3>Account Manager - eToro Ltd</h3>
            <p>Managed a $45M portfolio for over 300 investors, acting as their primary liaison with the company. Analyzed market trends across diverse assets, offering tailored strategies to align with each client's risk tolerance and financial goals.</p>
          </div>
        )}
      </div>
      <div className='aninamtionBottomCornerExp'></div>
    </div>
  );
}
