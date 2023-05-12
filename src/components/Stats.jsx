import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row 
    flex-wrap sm:mb-20 mb-6`}>
          {stats.map((item)=>(
            <div key={item.id} className={`flex-1 flex justify-start items-center
            m-3 flex-row`}>
              <h4 className='font-poppins font-semibold xs:text[40px]
              text-[35px] xs:leading-[53px] text-white leading-[43px]'>
              {item.value}</h4>
              <p 
                className='font-poppins font-normal xs:text[20px]
              text-[15px] xs:leading-[26px] text-gradient uppercase ml-3 leading-[21px]'
              >{item.title}</p>
            </div>
          ))}
    </section>
  )
}

export default Stats
