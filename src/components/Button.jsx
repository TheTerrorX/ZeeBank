import React from 'react'

const Button = () => {
  return (
    <div>
      <button type='button' 
      className={`py-4 bg-blue-gradient px-6 font-poppins
       font-medium text-[18px] text-primary outline-none 
        mt-10 hover:scale-105 transition duration-200 `} 
      
      >Get Started</button>
    </div>
  )
}

export default Button
