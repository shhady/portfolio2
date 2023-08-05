import React, { useState } from 'react'
import Services2 from './Services2'
import Services1 from './Services1'
import Services3 from './Services3'

import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';

export default function Services() {
    const [services, setServices] = useState(1)

  return (
    <section id="services" className="services-section">
        <div className='servicesTop'></div>
    <h2>Services I Offer</h2>
    <div className='contentSer'>
    <div className='arrowsServices'>
   {services === 3 && <div className='arrow'  onClick={()=> setServices(2)}> <FaArrowLeft/>back</div>} 
    {services === 1 && <div className='arrow'  onClick={()=> setServices(2)}> more <FaArrowRight/></div>}
    {services === 2 && <><div className='arrow'  onClick={()=> setServices(1)}> <FaArrowLeft/>back</div><div className='arrow'  onClick={()=> setServices(3)}> more <FaArrowRight/></div></>}
    </div>
    <div className={`service-container ${services === 1 ? 'service-column' : services === 2 ? 'service-column-right' : 'service-column-left'}`}>
        {services === 1 ? (<Services1 />):(<>{services === 2 ? (<Services2 />):(<Services3/>)}</>)}
        </div>
        </div>
        <div className='bottomServices'></div>
    </section>
  )
}
