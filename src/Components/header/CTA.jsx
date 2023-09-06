import React from 'react'
import CV from '../../Assets/Joshua_Palmer_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Chat</a>
        
    </div>
  )
}

export default CTA