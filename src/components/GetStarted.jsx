import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} hover:scale-105 transition duration-200  w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
    <div className={`${styles.flexCenter}
     bg-primary w-[100%] h-[100%] flex-col rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium 
          text-[18px] leading-[23px]'>
            <span className='text-gradient '>GET</span>
          </p>
          <img src={arrowUp}
            className='w-[23px]  h-[23px] 
            object-contain'
            alt="arrow" />
      </div>
        <p className='font-poppins font-medium 
          text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      
    </div>
    
    </div>
  )
}

export default GetStarted;
