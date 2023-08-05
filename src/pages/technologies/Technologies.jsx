import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs, FaDatabase, FaServer, FaCode, } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb,SiPostman } from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';
import { BiSolidRightArrow,BiSolidDownArrow,BiSolidCloudDownload } from 'react-icons/bi';
import { MdMarkEmailRead } from 'react-icons/md';


import './technologies.css';

const technologiesData = [
  {
    title: 'HTML',
    icon: <FaHtml5 />,
    explanation: 'Hypertext Markup Language for structuring web content.',
  },
  {
    title: 'CSS',
    icon: <FaCss3 />,
    explanation: 'Cascading Style Sheets for styling web elements.',
  },
  {
    title: 'React',
    icon: <FaReact />,
    explanation: 'JavaScript library for building interactive user interfaces.',
  },
  {
    title: 'JavaScript',
    icon: <IoLogoJavascript />,
    explanation: 'High-level programming language for web development.',
  },
  {
    title: 'Node.js',
    icon: <FaNodeJs />,
    explanation: 'JavaScript runtime environment for server-side development.',
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb />,
    explanation: 'NoSQL database for storing and managing data.',
  },
  {
    title: 'Express.js',
    icon: <FaServer />,
    explanation: 'Web application framework for Node.js, simplifying backend development.',
  },
  {
    title: 'Cloudinary',
    icon: <BiSolidCloudDownload />,
    explanation: 'Media management platform for storing, optimizing, and delivering images and videos.',
  },
  {
    title: 'SendGrid',
    icon: <MdMarkEmailRead />,
    explanation: 'Cloud-based email delivery and transactional email platform for sending emails reliably.',
  },
  {
    title: 'Socket.io',
    icon: <TbBrandSocketIo />,
    explanation: 'Library for real-time, bidirectional communication between web clients and servers.',
  },
  {
    title: 'Postman',
    icon: <SiPostman />,
    explanation: 'API testing and documentation tool for web developers.',
  }, 
   
];

function Technologies() {
  const [activeTech, setActiveTech] = useState(null);

  const handleTechClick = (index) => {
    if (activeTech === index) {
      setActiveTech(null); // Toggle off if clicked again
    } else {
      setActiveTech(index); // Set the clicked technology as active
    }
  };

  return (
    <div className="technologies-container">
        <div className='servicesTop'></div>
        <div style={{position:"absolute", zIndex:"9", marginTop:"-25px"}}>
      <h2>Full Stack Expertise</h2>
      <div className="technologies-list">
        {technologiesData.map((tech, index) => (
          <div
            key={index}
            className={`technology ${activeTech === index ? 'active' : ''}`}
            onClick={() => handleTechClick(index)}
            
          >
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'10px'}}>
           {activeTech === index ? (<BiSolidDownArrow onClick={()=>setActiveTech('')}/>):(<BiSolidRightArrow />)} 
            {tech.icon}
            <p>{tech.title}</p> </div>
            {activeTech === index && <p className="explanation">{tech.explanation}</p>}
          </div>
        ))}
      </div>
      <div className='bottomTech'></div>

      </div>
    </div>
  );
}

export default Technologies;
