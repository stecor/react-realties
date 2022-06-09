import React from 'react'

const AboutImage = () => {
  return (
    <div style={{ width: '800px', margin: '100px' }}>
      <img
        src={require('../../images/house.jpg')}
        alt='aboutus'
        style={{ borderRadius: '30px' }}
      />
    </div>
  )
}

export default AboutImage
